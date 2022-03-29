<template>
  <section class="flex gap-8 items-center">
    <button
      type="button"
      class="mdi mdi-arrow-left-bold text-3xl sm:hover:scale-125 sm:hover:transition sm:hover:delay-125"
      @click="$emit('prevPage')"
    />
    <span class="text-2xl">{{ currentPageIndex }}</span>
    <button
      type="button"
      class="mdi mdi-arrow-right-bold text-3xl sm:hover:scale-125 sm:hover:transition sm:hover:delay-125"
      @click="$emit('nextPage')"
    />
  </section>
</template>

<script>
export default {
  name: "PageNavigator",
  props: {
    currentPageIndex: {
      type: Number,
      required: true,
      default: 1,
    },
  },
};
</script>
