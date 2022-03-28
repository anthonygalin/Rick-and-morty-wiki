import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CharactersView from "../views/CharactersView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/Characters",
    name: "Characters",
    component: CharactersView,
  },
  {
    path: "/Locations",
    name: "Location",
    component: HomeView,
  },
  {
    path: "/Vehicles",
    name: "vehicles",
    component: HomeView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
