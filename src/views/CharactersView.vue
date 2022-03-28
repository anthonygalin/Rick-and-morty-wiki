<template>
  <container-component>
    <div
      v-for="character in characters.results"
      :key="`character-${character.id}`"
    >
      <p>{{ character.name }}</p>
    </div>
  </container-component>
</template>

<script>
import containerComponent from "../components/shared/Container";

export default {
  name: "CharactersView",
  components: {
    containerComponent,
  },
  computed: {
    characters() {
      return this.$store.state.characters;
    },
  },
  beforeMount() {
    this.$store.dispatch("getCharacters");
  },
};
</script>

<style scoped></style>
