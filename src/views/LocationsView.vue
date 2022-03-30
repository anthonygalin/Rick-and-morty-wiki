<template>
  <main id="location-view">
    <container-component
      id="location-main"
      class="!grid !grid-cols-1 sm:!grid-cols-3 lg:!grid-cols-4"
    >
      <div
        v-for="location in locations"
        :key="`characterId:${location.id}`"
        class="cursor-pointer"
      >
        <item-card
          class="lg:hover:scale-110 lg:transition lg:delay-125 sm:hover:scale-105 lg:hover:scale-110 sm:transition sm:delay-125"
          :item="location"
        />
      </div>
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

export default {
  name: "LocationsView",
  components: {
    containerComponent,
    itemCard,
    pageNavigator,
  },
  data: () => ({
    currentPage: null,
    maxPage: null,
  }),
  computed: {
    locations() {
      return this.$store.getters.locations.results;
    },
  },
  watch: {
    locations() {
      this.currentPage = this.$store.state.locationPageId;
      this.maxPage = this.$store.getters.maxLocationPage;
    },
  },
  methods: {
    async nextPage() {
      await this.$store.dispatch("nextLocationPage");
      await this.$store.dispatch("getLocations");
      return (this.currentPage = await this.$store.getters.currentLocationPage);
    },
    prevPage() {
      this.$store.dispatch("prevLocationPage");
      this.$store.dispatch("getLocations");
      return (this.currentPage = this.$store.getters.currentLocationPage);
    },
    onPageChange(page) {
      this.$store.dispatch("pageChange", page);
      this.$store.dispatch("getLocations");
      return (this.currentPage = this.$store.getters.currentPage);
    },
  },
  async created() {
    this.maxPage = this.$store.state.maxLocationPage;
    this.currentPage = this.$store.state.locationPageId;
    await this.$store.dispatch("getLocations");
  },
};
</script>
