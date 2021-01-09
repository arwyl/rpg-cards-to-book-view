<template>
  <section>
    <div class="d-md-flex d-flex-row">
      <div class="p-2">
        <select
          class="form-control"
          v-model="by"
          @change="byElement = cardElementSort.SUBTITLE"
        >
          <option :value="cardSort.TITLE">Title</option>
          <option :value="cardSort.SPELLEVEL">
            Spell level (experimental)
          </option>
          <option :value="cardSort.ELEMENT">Element</option>
          <option :value="cardSort.FIRSTTAG">First tag name</option>
        </select>
      </div>
      <div
        class="p-2"
        v-if="by === cardSort.ELEMENT"
        @change="propertyName = ''"
      >
        <select class="form-control" v-model="byElement">
          <option :value="cardElementSort.SUBTITLE">Subtitle</option>
          <option :value="cardElementSort.PROPERTY">
            First property with name
          </option>
        </select>
      </div>
      <div class="p-2" v-if="byElement === cardElementSort.PROPERTY">
        <input
          class="form-control"
          type="text"
          v-model="propertyName"
          placeholder="Enter property name"
        />
      </div>
      <div class="d-flex d-flex-row">
        <div class="p-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="cb-sortDesc"
              v-model="desc"
            />
            <label class="form-check-label" for="cb-sortDesc">
              Descending
            </label>
          </div>
        </div>
        <div class="p-2">
          <button class="btn btn-primary" type="button" @click="sort">
            Sort
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import cardSort from "../models/card-sort";
import cardElementSort from "../models/card-element-sort";
import types from "../models/elements/types";

export default {
  name: "CardSorter",
  emits: ["sortChanged"],
  props: {
    by: {
      type: String,
      default: () => cardSort.TITLE,
    },
    byElement: {
      type: String,
      default: () => cardElementSort.SUBTITLE,
    },
    propertyName: String,
    desc: Boolean,
  },
  data() {
    return {
      cardSort,
      cardElementSort,
    };
  },
  methods: {
    sort(e) {
      let func = null;

      if (this.by === cardSort.SPELLEVEL) {
        func = (c) =>
          c.elements
            .filter((e) => e.type === types.SUBTITLE)
            .map((e) => {
              if (
                e.name &&
                (e.name.indexOf("Cantrip") !== -1 ||
                  e.name.indexOf("cantrip") !== -1)
              ) {
                return 0;
              }

              return parseInt(e.name, 10) || (this.desc ? -1 : 999);
            })[0];
      } else if (this.by === cardSort.ELEMENT) {
        if (this.byElement === cardElementSort.SUBTITLE) {
          func = (c) =>
            c.elements
              .filter((e) => e.type === types.SUBTITLE)
              .map((e) => e.name)[0];
        } else {
          func = (c) =>
            c.elements
              .filter(
                (e) => e.type === types.PROPERTY && e.name === this.propertyName
              )
              .map((e) => e.name)[0];
        }
      } else if (this.by === "firstTag") {
        func = (c) => c.tags[0];
      }

      this.$emit("sortChanged", { elementSelector: func, desc: this.desc });

      e.target.blur();
    },
  },
};
</script>