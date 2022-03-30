<template>
  <main id="character-view">
    <container-component id="character-main">
      <div
        v-for="character in characters"
        :key="`characterId:${character.id}`"
        @click="onOpenModal(character)"
      >
        <item-card
          class="lg:hover:scale-110 lg:transition lg:delay-125 sm:hover:scale-110 sm:transition sm:delay-125"
          :item="character"
        />
      </div>
      <div
        v-if="currentCharacter"
        class="w-screen h-full bg-black bg-opacity-75 absolute"
      />
      <item-model
        v-if="currentCharacter"
        class="fixed justify-self-center mt-32"
        :item="currentCharacter"
      >
        <button
          @click="closeModal"
          type="button"
          class="mdi mdi-close text-2xl"
        />
      </item-model>
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
import itemModel from "@/components/shared/ItemModel";

export default {
  name: "CharactersView",
  components: {
    containerComponent,
    itemCard,
    pageNavigator,
    itemModel,
  },
  data: () => ({
    currentPage: null,
    currentCharacter: null,
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
    onOpenModal(character) {
      this.currentCharacter = character;
    },
    closeModal() {
      this.currentCharacter = null;
    },
  },
  beforeMount() {
    this.$store.dispatch("getCharacters");
    this.currentPage = this.$store.state.pageId;
  },
};
</script>

<style scoped></style>
