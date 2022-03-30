<template>
  <div id="item-card" class="flex flex-col hover:transform relative">
    <img
      v-if="item.image"
      class="rounded-full w-auto"
      :src="item.image"
      :alt="`characterImg:${item.name}`"
    />
    <span
      v-if="item.status"
      class="absolute left-3/4 rounded-t-2xl text-lg px-0.5 font-semi-bold"
      :class="liveOrDeath"
      >{{ item.status[0] }}</span
    >
    <h1
      class="text-sm truncate text-center mt-2 px-2 border-2 border-primary rounded bg-black/50"
    >
      {{ item.name }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    liveOrDeath() {
      if (this.item.status === "Alive") {
        return "bg-success";
      } else {
        return this.item.status === "Dead" ? "bg-error" : "bg-grey";
      }
    },
  },
};
</script>
