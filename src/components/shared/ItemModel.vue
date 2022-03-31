<template>
  <section id="item-model">
    <div
      class="bg-black-blue border-2 border-secondary w-80 h-80 rounded-xl grid place-content-center justify-items-center gap-2"
    >
      <!--   Item model image.   -->
      <img
        :src="item.image"
        alt=""
        class="absolute rounded-full w-2/4 -top-20 left-20 border-4 border-secondary"
      />
      <!--   Item model data.   -->
      <ul class="flex flex-col gap-1 pt-6 px-4">
        <li class="break-words font-semi-bold text-lg text-primary">
          Name:
          <span class="font-normal text-base text-secondary">{{
            item.name
          }}</span>
        </li>
        <li class="break-words font-semi-bold text-lg text-primary">
          Species:<span class="font-normal text-base text-secondary">
            {{ item.species }}</span
          >
        </li>
        <li class="break-words font-semi-bold text-lg text-primary">
          Gender:<span class="font-normal text-base text-secondary">
            {{ item.gender }}</span
          >
        </li>
        <li class="break-words font-semi-bold text-lg text-primary">
          Origin:<span class="font-normal text-base text-secondary">
            {{ item.origin.name }}</span
          >
        </li>
      </ul>
      <!--   Item model status   -->
      <p
        class="text-center font-semi-bold w-1/2 rounded-md text-xl mt-2"
        :class="liveOrDeath"
      >
        {{ item.status }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ItemModel",
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

<style scoped></style>
