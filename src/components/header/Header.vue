<template>
  <section
    id="Header"
    v-click-outside="onCloseBar"
    class="px-4 pt-4 pb-2 lg:flex lg:justify-between lg:p-4 lg:gap-4 lg:items-center bg-black-blue"
  >
    <!--  Loader  -->
    <loading
      :active="isLoading"
      :can-cancel="false"
      :is-full-page="true"
      :lock-scroll="true"
      color="#97ce4c"
      :height="120"
      :width="120"
      loader="dots"
      background-color="black"
      @input="isLoading = $event"
    />
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
          v-model="searchItem"
          type="text"
          :placeholder="`Search ${$route.name}`"
          @keyup.enter="onSearchItem"
          class="w-full rounded-full bg-black bg-opacity-50 px-4 lg:h-14"
        />
        <button
          type="button"
          class="absolute right-0 inset-y-0 pr-4 mdi mdi-magnify justify-self-end text-white/25 text-2xl"
          @click="onSearchItem"
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
        class="w-full lg:h-0 flex flex-col gap-2 lg:flex lg:flex-row"
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
          class="grid content-center mx-6 mt-2 lg:m-0 lg:hover:scale-105 lg:transition lg:delay-125"
        >
          <router-link
            :to="link.link"
            exact-active-class="border-b-4 border-b-secondary lg:border-0 lg:bg-secondary px-2 lg:rounded-t-2xl lg:rounded-b-md font-semi-bold"
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
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "HeaderView",
  components: {
    Loading,
  },
  data: () => ({
    searchItem: "",
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
    ],
    isLoading: false,
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
    onCloseBar() {
      if (!this.openSearchBar || !this.openNavBar) {
        this.openSearchBar = false;
        this.openNavBar = false;
      }
    },
    async onSearchItem() {
      this.isLoading = true;
      if (this.$route.name === "Characters") {
        await this.$store.dispatch("searchCharacter", this.searchItem);
        await this.$store.dispatch("getCharacters");
      } else {
        await this.$store.dispatch("searchLocation", this.searchItem);
        await this.$store.dispatch("getLocations");
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped></style>
