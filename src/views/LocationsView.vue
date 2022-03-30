<template>
  <main id="location-view">
    <container-component
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6"
      id="character-main"
    >
      <div
        v-for="location in locations.results"
        :key="`characterId:${location.id}`"
        class="cursor-pointer"
      >
        <item-card
          class="lg:hover:scale-110 lg:transition lg:delay-125 sm:hover:scale-110 sm:transition sm:delay-125"
          :item="location"
        />
      </div>
    </container-component>
  </main>
</template>

<script>
import containerComponent from "../components/shared/Container";
import itemCard from "../components/shared/ItemCard";

export default {
  name: "LocationsView",
  components: {
    containerComponent,
    itemCard,
  },
  data: () => ({}),
  computed: {
    locations() {
      return this.$store.state.locations;
    },
  },
  beforeMount() {
    this.$store.dispatch("getLocations");
  },
};
</script>
