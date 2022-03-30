<template>
  <main id="character-view">
    <container-component id="character-main">
      <div
        v-for="character in characters.results"
        :key="`characterId:${character.id}`"
        @click="onOpenModal(character)"
        class="cursor-pointer"
      >
        <item-card
          class="lg:transition lg:delay-125 hover:scale-110 sm:transition sm:delay-125"
          :item="character"
        />
      </div>
      <div
        v-if="currentCharacter"
        @click.self="closeModal"
        class="w-full h-full bg-black bg-opacity-75 absolute"
      />
      <item-model
        v-if="currentCharacter"
        class="fixed justify-self-center mt-32"
        :item="currentCharacter"
      >
      </item-model>
      <page-navigator
        @nextPage="nextPage"
        @prevPage="prevPage"
        @pageChanged="onPageChange"
        :max-page="maxPage"
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
    maxPage: null,
  }),
  computed: {
    characters() {
      return this.$store.getters.characters;
    },
  },
  watch: {
    characters() {
      this.currentPage = this.$store.state.pageId;
      this.maxPage = this.$store.getters.maxPage;
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
    onPageChange(page) {
      this.$store.dispatch("pageChange", page);
      this.$store.dispatch("getCharacters");
      return (this.currentPage = this.$store.getters.currentPage);
    },
    onOpenModal(character) {
      this.currentCharacter = character;
    },
    closeModal(e) {
      e.target;
      this.currentCharacter = null;
    },
  },
  async created() {
    this.maxPage = this.$store.getters.maxPage;
    this.currentPage = this.$store.state.pageId;
    await this.$store.dispatch("getCharacters");
  },
};
</script>

<style scoped></style>
