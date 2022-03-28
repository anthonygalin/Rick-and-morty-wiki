import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Characters",
    name: "Characters",
    component: HomeView,
  },
  {
    path: "/Locations",
    name: "location",
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
