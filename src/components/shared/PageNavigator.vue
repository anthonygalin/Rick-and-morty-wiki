<template>
  <section class="flex gap-8 items-center">
    <button
      v-if="currentPageIndex !== 1"
      type="button"
      class="mdi mdi-arrow-left-bold text-3xl sm:hover:scale-125 sm:hover:transition sm:hover:delay-125"
      @click="$emit('prevPage')"
    />
    <!--  visible buttons start  -->
    <div v-for="page in pages" :key="page.name">
      <button
        class="p-1 rounded-full sm:hover:scale-110 sm:hover:transition sm:hover:delay-1125"
        :class="isPageActive(page.name)"
        @click="onClickPage(page.name)"
      >
        {{ page.name }}
      </button>
    </div>
    <button
      v-if="currentPageIndex !== maxPage"
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
    maxPage: {
      type: Number,
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
  },
  data: () => ({
    newIndex: "",
    activePage: "",
  }),
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPageIndex === 1) {
        return 1;
      }

      // When inbetween
      return this.currentPageIndex - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.maxPage);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPageIndex,
        });
      }
      return range;
    },
  },
  methods: {
    onClickPage(page) {
      this.$emit("pageChanged", page);
    },
    isPageActive(page) {
      if (page === this.currentPageIndex) {
        return "border-2 border-primary font-semi-bold text-lg";
      }
    },
  },
};
</script>
