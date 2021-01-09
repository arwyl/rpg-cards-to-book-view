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
        You can reorder cards anyway you want by dragging their title.
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

      <div class="d-md-flex d-flex-row">
        <div class="p-2">
          <rpg-cards-loader
            @loaded="load"
            @onError="onError"
          ></rpg-cards-loader>
        </div>
        <div class="p-2">
          <button class="btn btn-primary" type="button" @click="loadExample">
            Load example
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
          handle=".title"
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
import { useToast } from "vue-toastification";
import card from "./components/Card.vue";
import cardSimplified from "./components/CardSimplified.vue";
import cardSorter from "./components/CardSorter.vue";
import rpgCardsLoader from "./components/RpgCardsLoader.vue";
import draggable from "vuedraggable";

import storage from "./services/card-storage";
import mapper from "./services/card-mapper";
import sorter from "./services/card-sorter";
import Exception from "./models/exception";

import example from "./example";

const toast = useToast();

let initialCards;

function showError(err) {
  console.error(err.message, err);
  toast.error(err.message + "\nSee console output for details.");
}

function mapCards(rpgCards) {
  const mapped = rpgCards
    .map((x) => {
      try {
        const res = mapper.fromRpgCardJson(x);
        return res;
      } catch (err) {
        showError(new Exception("Error during parsing example file.", err));
        return undefined;
      }
    })
    .filter((x) => x);
  return mapped;
}

try {
  initialCards = storage.get();
} catch (err) {
  showError(new Exception("Error during loading cards from storage.", err));
}

export default {
  name: "App",
  data() {
    return {
      cards: initialCards || [],
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
    loadExample(e) {
      const mapped = mapCards(example);
      this.cards = mapped;
      this.store();
      e.target.blur();
    },
    load(e) {
      const mapped = mapCards(e.rpgCards);
      this.cards = mapped;
      this.store();
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
    onError(e) {
      showError(e.exception);
    },
  },
  components: {
    card,
    "card-simplified": cardSimplified,
    draggable,
    "card-sorter": cardSorter,
    "rpg-cards-loader": rpgCardsLoader,
  },
};
</script>

<style scoped>
article.rpg-card-drag {
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>

<style>
.title {
  cursor: move;
}
</style>