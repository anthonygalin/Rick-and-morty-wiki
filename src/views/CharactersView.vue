<template>
  <main id="character-view">
    <container-component
      class="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4 lg:grid-cols-8 lg:gap-6"
      id="character-main"
    >
      <div v-for="character in characters" :key="`characterId:${character.id}`">
        <item-card
          class="lg:hover:scale-110 lg:transition lg:delay-125 sm:hover:scale-110 sm:transition sm:delay-125"
          :item="character"
        />
      </div>
      <page-navigator
        @nextPage="nextPage"
        @prevPage="prevPage"
        :current-page-index="currentPage"
        class="mt-4 col-span-2 place-self-center sm:col-span-4 lg:col-span-8"
      />
    </container-component>
  </main>
</template>

<script>
import containerComponent from "../components/shared/Container";
import itemCard from "../components/shared/ItemCard";
import pageNavigator from "@/components/shared/PageNavigator";

export default {
  name: "CharactersView",
  components: {
    containerComponent,
    itemCard,
    pageNavigator,
  },
  data: () => ({
    currentPage: null,
  }),
  computed: {
    characters() {
      return this.$store.getters.characters.results;
    },
  },
  methods: {
    async nextPage() {
      await this.$store.dispatch("nextPage");
      await this.$store.dispatch("getCharacters");
      return (this.currentPage = await this.$store.getters.currentPage);
    },
    prevPage() {
      this.$store.dispatch("prevPage");
      this.$store.dispatch("getCharacters");
      return (this.currentPage = this.$store.getters.currentPage);
    },
  },
  beforeMount() {
    this.$store.dispatch("getCharacters");
    this.currentPage = this.$store.getters.currentPage;
  },
};
</script>

<style scoped></style>
