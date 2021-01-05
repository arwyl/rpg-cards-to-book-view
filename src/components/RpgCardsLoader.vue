<template>
  <div>
    <button class="btn btn-primary" type="button" @click="openDialog">
      Load from json files
    </button>
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
  </div>
</template>

<script>
import Exception from "../models/exception";

export default {
  name: "RpgCardsLoader",
  emits: ["loaded", "onError"],
  methods: {
    openDialog(e) {
      document.getElementById("file-load").click();
      e.target.blur();
    },
    load(e) {
      const files = e.target.files;

      let count = files.length;

      const allRead = () => {
        this.$emit("loaded", { rpgCards: newCards });
      };

      let newCards = [];
      for (let i = 0, f; (f = files[i]); i++) {
        const reader = new FileReader();

        reader.onload = () => {
          try {
            const data = JSON.parse(reader.result);
            newCards = newCards.concat(data);
          } catch (err) {
            this.$emit("onError", {
              exception: new Exception("File is not in correct format.", err),
            });
          }

          if (!--count) {
            allRead();
          }
        };

        reader.readAsText(f);
      }

      e.srcElement.form.reset();
    },
  },
};
</script>