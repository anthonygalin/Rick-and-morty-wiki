<template>
  <div id="app" class="lg:overflow-hidden">
    <header-view class="sticky top-0 z-50" />
    <router-view class="pb-2 pt-4" />
  </div>
</template>

<script>
import headerView from "@/components/header/Header";
import Vue from "vue";

Vue.directive("click-outside", {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});

export default {
  name: "HomeView",
  components: {
    headerView,
  },
};
</script>
