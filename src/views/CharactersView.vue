<template>
  <main id="character-view">
    <!--  Loader  -->
    <loading
      :active="isLoading"
      :can-cancel="false"
      :is-full-page="true"
      :lock-scroll="true"
      color="#97ce4c"
      :height="120"
      :width="120"
      loader="dots"
      background-color="black"
      @input="isLoading = $event"
    />
    <!--  Start characters page view  -->
    <container-component id="character-main">
      <!--   V-for of obtained characters   -->
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
      <!--   Modal back background when is open   -->
      <div
        v-if="currentCharacter"
        @click.self="closeModal"
        class="w-full h-full bg-black bg-opacity-75 absolute"
      />
      <!--   Character modal   -->
      <item-model
        v-if="currentCharacter"
        class="fixed justify-self-center mt-32"
        :item="currentCharacter"
      />
      <!--   Page navigator component   -->
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
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "CharactersView",
  components: {
    containerComponent,
    itemCard,
    pageNavigator,
    itemModel,
    Loading,
  },
  data: () => ({
    currentPage: null,
    currentCharacter: null,
    maxPage: null,
    isLoading: false,
  }),
  computed: {
    //Get characters
    characters() {
      return this.$store.getters.characters;
    },
  },
  watch: {
    //Watch in character: max page and current page state
    characters() {
      this.currentPage = this.$store.getters.currentPage;
      this.maxPage = this.$store.getters.maxPage;
      this.isLoading = false;
    },
  },
  methods: {
    //Paginator next button logic
    async nextPage() {
      this.isLoading = true;
      await this.$store.dispatch("nextPage");
      await this.$store.dispatch("getCharacters");
      this.currentPage = await this.$store.getters.currentPage;
    },
    //Paginator prev button logic
    prevPage() {
      this.isLoading = true;
      this.$store.dispatch("prevPage");
      this.$store.dispatch("getCharacters");
      this.currentPage = this.$store.getters.currentPage;
    },
    //Character pages buttons select logic
    onPageChange(page) {
      this.isLoading = true;
      this.$store.dispatch("pageChange", page);
      this.$store.dispatch("getCharacters");
      this.currentPage = this.$store.getters.currentPage;
    },
    //Open modal logic
    onOpenModal(character) {
      this.currentCharacter = character;
    },
    //Close modal logic
    closeModal(e) {
      e.target;
      this.currentCharacter = null;
    },
  },
  //Make the character api call when component is created
  async created() {
    this.isLoading = true;
    this.maxPage = this.$store.getters.maxPage;
    this.currentPage = this.$store.state.pageId;
    await this.$store.dispatch("getCharacters");
  },
};
</script>
