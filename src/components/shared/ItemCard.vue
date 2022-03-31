<template>
  <div id="item-card" class="flex flex-col hover:transform relative">
    <!--  Card item image  -->
    <img
      v-if="item.image"
      class="rounded-full w-auto"
      :src="item.image"
      :alt="`characterImg:${item.name}`"
    />
    <!--  Card item status  -->
    <span
      v-if="item.status"
      class="absolute left-3/4 rounded-t-2xl text-lg px-0.5 font-semi-bold"
      :class="liveOrDeath"
      >{{ item.status[0] }}</span
    >
    <!--  Card item name  -->
    <h1
      class="text-sm truncate text-center mt-2 px-2 border-2 border-primary rounded bg-black/50"
    >
      {{ item.name }}
    </h1>
    <!--  this section is only used in Location view  -->
    <div v-if="item.residents" class="p-4 bg-black bg-opacity-50 rounded-md">
      <ol>
        <li class="break-words font-semi-bold text-lg text-primary">
          Type:
          <span class="font-normal text-base text-secondary"
            >{{ item.type }}.</span
          >
        </li>
        <li class="break-words font-semi-bold text-lg text-primary">
          Dimension:
          <span class="font-normal text-base text-secondary"
            >{{ item.dimension }}.</span
          >
        </li>
        <li class="break-words font-semi-bold text-lg text-primary">
          Residents:
          <span class="font-normal text-base text-secondary"
            >{{ item.residents.length }}.</span
          >
        </li>
      </ol>
    </div>
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
    //Assign  tailwind class dependent of the status.
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
