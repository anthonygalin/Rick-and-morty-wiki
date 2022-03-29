<template>
  <div id="item-card" class="flex flex-col hover:transform">
    <img
      v-if="item.image"
      class="rounded-full w-auto"
      :src="item.image"
      :alt="`characterImg:${item.name}`"
    />
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
};
</script>
