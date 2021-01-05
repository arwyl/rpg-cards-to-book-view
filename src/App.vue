<template>
  <div class="container">
    <section class="nonprintable">
      <h2>rpg-cards-to-book-view</h2>
      <br />

      <div class="p-3 mb-2 bg-info text-dark">
        Load any number of .json files with arrays of
        <a target="_blank" href="https://crobi.github.io/rpg-cards/"
          >rpg cards</a
        >
        and press Print.
        <br />
        You can reorder cards anyway you want by dragging them.
        <br />
        Tested only in
        <a target="_blank" href="https://www.google.com/chrome/"
          >Google Chrome</a
        >. Probably will work in any <strong>modern</strong> browser.
      </div>

      <p>
        Loaded cards: <span id="span-count">{{ cards.length }}</span>
      </p>

      <label>Sorting</label>
      <card-sorter @sort-changed="sort"></card-sorter>

      <div class="d-flex d-flex-row">
        <div class="p-2">
          <button class="btn btn-primary" type="button" @click="openFileDialog">
            Load from json files
          </button>
        </div>
        <div class="p-2">
          <button class="btn btn-primary" type="button" @click="download">
            Save to file
          </button>
        </div>
        <div class="p-2">
          <button class="btn btn-danger" type="button" @click="clear">
            Clear cards
          </button>
        </div>
        <div class="p-2">
          <button class="btn btn-success" type="button" @click="print">
            Print
          </button>
        </div>
        <div class="p-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="cb-useSimplifiedView"
              v-model="useSimplifiedView"
            />
            <label class="form-check-label" for="cb-useSimplifiedView">
              Use simplified view
            </label>
          </div>
        </div>
      </div>

      <form style="display: none">
        <input
          type="file"
          id="file-load"
          name="files[]"
          multiple
          accept="application/JSON"
          @change="load"
        />
      </form>
      <hr />
    </section>
    <section>
      <template v-if="useSimplifiedView">
        <draggable
          v-model="cards"
          item-key="title"
          @change="store"
          drag-class="rpg-card-drag"
        >
          <template #item="{ element }">
            <card-simplified :modelValue="element"></card-simplified>
          </template>
        </draggable>
      </template>
      <template v-else>
        <draggable
          v-model="cards"
          item-key="title"
          @change="store"
          drag-class="rpg-card-drag"
        >
          <template #item="{ element }">
            <card :modelValue="element"></card>
          </template>
        </draggable>
      </template>
    </section>
  </div>
</template>

<script>
import card from "./components/Card.vue";
import cardSimplified from "./components/CardSimplified.vue";
import cardSorter from "./components/CardSorter.vue";
import draggable from "vuedraggable";

import storage from "./services/card-storage";
import mapper from "./services/card-mapper";
import sorter from "./services/card-sorter";

let initialCards = [];

try {
  initialCards = storage.get();
} catch (err) {
  console.error("Error during loading cards from storage", err);
}

export default {
  name: "App",
  data() {
    return {
      cards: initialCards,
      useSimplifiedView: false,
    };
  },
  methods: {
    store() {
      storage.set(this.cards);
    },
    sort(e) {
      this.cards = sorter(this.cards, e.elementSelector, e.desc);
      this.store();
    },
    openFileDialog(e) {
      document.getElementById("file-load").click();
      e.target.blur();
    },
    load(e) {
      const files = e.target.files;

      let count = files.length;

      const allRead = () => {
        this.cards = newCards;
        this.store();
      };

      let newCards = [];
      for (let i = 0, f; (f = files[i]); i++) {
        const reader = new FileReader();

        reader.onload = () => {
          try {
            const data = JSON.parse(reader.result);
            newCards = newCards.concat(
              data.map((x) => mapper.fromRpgCardJson(x))
            );
          } catch (err) {
            console.error("File is not in correct format", err);
          }

          if (!--count) {
            allRead();
          }
        };

        reader.readAsText(f);
      }

      e.srcElement.form.reset();
    },
    clear(e) {
      storage.clear();
      this.cards = [];
      e.target.blur();
    },
    print(e) {
      window.print();
      e.target.blur();
    },
  },
  components: {
    card,
    "card-simplified": cardSimplified,
    draggable,
    "card-sorter": cardSorter,
  },
};
</script>

<style scoped>
article {
  cursor: move;
}

article.rpg-card-drag {
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>