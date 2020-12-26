import { createWebHistory, createRouter } from "vue-router";
import Kontaineren from "../views/Kontaineren.vue";

const routes = [
  {
    path: "/",
    name: "Kontaineren",
    component: Kontaineren,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;