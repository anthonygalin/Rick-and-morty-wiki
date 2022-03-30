import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CharactersView from "../views/CharactersView";
import LocationsView from "@/views/LocationsView";

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
    name: "Locations",
    component: LocationsView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
