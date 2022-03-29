<template>
  <section
    id="Header"
    class="px-4 pt-4 pb-2 lg:flex lg:justify-between lg:p-4 lg:gap-4 lg:items-center bg-black-blue"
  >
    <!--  Logo Svg  -->
    <div class="hidden lg:flex hover:scale-105 lg:transition lg:delay-125">
      <img
        src="../../assets/utils/Rick_and_Morty_Title.svg"
        alt="page logo"
        class="h-16"
      />
      <span class="self-start">Wiki</span>
    </div>

    <!--  Search Bar  -->
    <div
      :class="openSearchBar ? 'block' : 'hidden'"
      class="flex justify-between lg:flex lg:grow"
    >
      <!--   Back SearchBar   -->
      <div class="block lg:hidden" :class="openSearchBar ? 'block' : 'hidden'">
        <button
          @click="onOpenSearchBar"
          class="mdi mdi-arrow-left mx-4 p-2 text-2xl rounded-lg"
        />
      </div>
      <!--   Input search bar   -->
      <div class="w-full relative flex justify-end">
        <input
          type="text"
          :placeholder="`Search ${$route.name}`"
          class="w-full rounded-full bg-black bg-opacity-50 px-4 lg:h-14"
        />
        <button
          class="absolute right-0 inset-y-0 pr-4 mdi mdi-magnify justify-self-end text-white/25 text-2xl"
        ></button>
      </div>
    </div>
    <!--  NavBar button  -->
    <div class="flex justify-between items-center lg:p-4">
      <div
        class="block lg:hidden"
        :class="openNavBar || openSearchBar ? 'hidden' : 'block'"
      >
        <button
          @click="onOpenNavBar"
          class="mdi mdi-format-align-left mx-4 p-2 text-2xl rounded-lg"
        />
      </div>
      <!--  Header Title  -->
      <h1
        class="text-xl font-semi-bold lg:hidden"
        :class="openNavBar || openSearchBar ? 'hidden' : 'block'"
      >
        {{ $route.name }}
      </h1>
      <!--  NavBar Items  -->
      <div
        :class="openNavBar ? 'block' : 'hidden'"
        class="w-full flex flex-grow gap-2 lg:flex"
      >
        <!--   Back NavBar   -->
        <div class="block lg:hidden" :class="openNavBar ? 'block' : 'hidden'">
          <button
            @click="onOpenNavBar"
            class="mdi mdi-arrow-left mx-4 p-2 text-2xl rounded-lg"
          />
        </div>
        <div
          v-for="link in headerLinks"
          :key="`Link-${link.title}`"
          class="grid content-center lg:hover:scale-105 lg:transition lg:delay-125"
        >
          <router-link
            :to="link.link"
            exact-active-class="bg-secondary px-2 rounded-full font-semi-bold"
          >
            {{ link.title }}
          </router-link>
        </div>
      </div>
      <!--   Search button   -->
      <div
        class="block lg:hidden"
        :class="openSearchBar || openNavBar ? 'hidden' : 'block'"
      >
        <button
          @click="onOpenSearchBar"
          class="mdi mdi-magnify mx-4 p-2 text-2xl rounded-lg"
        />
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
        title: "Home",
        link: "/",
      },
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
    openNavBar: false,
    openSearchBar: false,
  }),
  methods: {
    onOpenNavBar() {
      this.openNavBar = !this.openNavBar;
    },
    onOpenSearchBar() {
      this.openSearchBar = !this.openSearchBar;
    },
  },
};
</script>

<style scoped></style>
