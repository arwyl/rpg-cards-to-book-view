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
export default {
  name: "RpgCardsLoader",
  emits: ["loaded"],
  methods: {
    openDialog(e) {
      document.getElementById("file-load").click();
      e.target.blur();
    },
    load(e) {
      const files = e.target.files;

      let count = files.length;

      const allRead = () => {
        console.log("load");
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
  },
};
</script>