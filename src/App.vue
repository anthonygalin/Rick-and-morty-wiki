<template>
  <div id="app">
    <header-view />
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
