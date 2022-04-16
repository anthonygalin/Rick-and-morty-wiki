<template>
  <main id="location-view">
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
    <!--  Start locations page view  -->
    <container-component
      id="location-main"
      class="!grid !grid-cols-1 sm:!grid-cols-3 lg:!grid-cols-4"
    >
      <!--   V-for of obtained locations   -->
      <div
        v-for="location in locations"
        :key="`characterId:${location.id}`"
        class="cursor-pointer"
      >
        <!--   Modal back background when is open   -->
        <item-card
          class="lg:hover:scale-110 lg:transition lg:delay-125 sm:hover:scale-105 lg:hover:scale-110 sm:transition sm:delay-125"
          :item="location"
        />
      </div>
      <!--   Page navigator component   -->
      <page-navigator
        @nextPage="nextPage"
        @prevPage="prevPage"
        @pageChanged="onPageChange"
        :max-page="maxPage"
        :current-page-index="currentPage"
        class="mt-4 col-span-1 place-self-center sm:col-span-3 lg:col-span-4"
      />
    </container-component>
  </main>
</template>

<script>
import containerComponent from "../components/shared/Container";
import itemCard from "../components/shared/ItemCard";
import pageNavigator from "@/components/shared/PageNavigator";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "LocationsView",
  components: {
    containerComponent,
    itemCard,
    pageNavigator,
    Loading,
  },
  data: () => ({
    currentPage: null,
    maxPage: null,
    isLoading: false,
  }),
  computed: {
    //Get locations
    locations() {
      return this.$store.getters.locations.results;
    },
  },
  watch: {
    //Watch in location: max page and current page state
    locations() {
      this.currentPage = this.$store.getters.currentLocationPage;
      this.maxPage = this.$store.getters.maxLocationPage;
      this.isLoading = false;
    },
  },
  methods: {
    //Paginator next button logic
    async nextPage() {
      this.isLoading = true;
      await this.$store.dispatch("nextLocationPage");
      await this.$store.dispatch("getLocations");
      this.currentPage = await this.$store.getters.currentLocationPage;
    },
    //Paginator prev button logic
    prevPage() {
      this.isLoading = true;
      this.$store.dispatch("prevLocationPage");
      this.$store.dispatch("getLocations");
      this.currentPage = this.$store.getters.currentLocationPage;
    },
    //Location pages buttons select logic
    onPageChange(page) {
      this.isLoading = true;
      this.$store.dispatch("locationPageChange", page);
      this.$store.dispatch("getLocations");
      this.currentPage = this.$store.getters.currentLocationPage;
    },
  },
  //Make the character api call when component is created
  async created() {
    this.isLoading = true;
    this.maxPage = this.$store.state.maxLocationPage;
    this.currentPage = this.$store.state.locationPageId;
    await this.$store.dispatch("getLocations");
  },
};
</script>
