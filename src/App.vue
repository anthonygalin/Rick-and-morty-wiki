<template>
  <div id="app">
    <header-view class="sticky top-0 z-50" />
    <router-view class="lg:h-full pb-2 pt-4" />
    <footer
      class="pt-2 sticky w-screen bottom-0 z-50 bg-black-blue border-t-2 border-secondary lg:w-screen lg:fixed"
    >
      <p class="text-center">"All rights reserved 2022"</p>
    </footer>
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
  methods: {
    onClickOutside() {
      console.log("clicked outside");
    },
  },
};
</script>
