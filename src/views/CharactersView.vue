<template>
  <main>
    <container-component
      class="grid grid-cols-2 gap-4 lg:grid-cols-8 lg:gap-6 sm:grid-cols-4 sm:gap-4"
      id="character-main"
    >
      <div
        v-for="character in characters.results"
        :key="`characterId:${character.id}`"
      >
        <item-card
          class="lg:hover:scale-110 lg:transition lg:delay-125 sm:hover:scale-110 sm:transition sm:delay-125"
          :item="character"
        />
      </div>
    </container-component>
  </main>
</template>

<script>
import containerComponent from "../components/shared/Container";
import itemCard from "../components/shared/ItemCard";

export default {
  name: "CharactersView",
  components: {
    containerComponent,
    itemCard,
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
