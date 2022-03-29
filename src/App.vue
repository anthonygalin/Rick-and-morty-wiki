<template>
  <div id="app">
    <header-view class="sticky top-0 z-50" />
    <router-view />
  </div>
</template>

<script>
import headerView from "@/components/header/Header";

export default {
  name: "HomeView",
  components: {
    headerView,
  },
};
</script>
