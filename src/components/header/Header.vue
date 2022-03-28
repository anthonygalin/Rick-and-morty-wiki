<template>
  <section
    id="Header"
    class="flex justify-between py-4 px-12 bg-black bg-opacity-10"
  >
    <div class="flex">
      <img
        src="../../assets/utils/Rick_and_Morty_Title.svg"
        alt="headerTitle"
        class="w-1/6"
      />
      <span class="text-lg">Wiki</span>
    </div>
    <div class="flex gap-2">
      <div
        v-for="link in headerLinks"
        :key="`Link-${link.title}`"
        class="grid content-center"
      >
        <router-link
          :to="link.link"
          exact-active-class="border-b-primary border-b-4 text-secondary rounded"
        >
          {{ link.title }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderView",
  data: () => ({
    data: {
      isActive: true,
      hasError: false,
    },
    headerLinks: [
      {
        title: "Characters",
        link: "/Characters",
      },
      {
        title: "Location",
        link: "/Locations",
      },
      {
        title: "Vehicles",
        link: "/Vehicles",
      },
    ],
  }),
};
</script>

<style scoped></style>
