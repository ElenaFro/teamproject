import { createRouter, createWebHistory } from "vue-router";
import StartPage from "/src/components/StartPage.vue";
import Main from "/src/components/MainPage.vue";
import NotFound from "/src/components/notFoundPage.vue";

export function isAuth(email, pass) {
  return email === "1t" && pass === "1t";
}

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
