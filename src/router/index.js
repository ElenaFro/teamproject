import { createRouter, createWebHistory } from "vue-router";
import StartPage from "../components/startPage.vue";
import Main from "../components/mainPage.vue";
import NotFound from "../components/notFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "start",
    component: StartPage,
  },
  {
    path: "/main",
    name: "main",
    component: Main,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
