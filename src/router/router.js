import { createRouter, createWebHistory } from "vue-router";
import StartPage from "/src/components/StartPage.vue";
import MainPage from "/src/components/Main/MainPage.vue";
import AboutUsPage from "/src/components/AboutUs/AboutUsPage.vue";
import contactsPage from "/src/components/Contacts/ContactsPage.vue";
import CatalogPage from "/src/components/Catalog/CatalogPage.vue";
import CartPage from "/src/components/Cart/CartPage.vue";
import NotFoundPage from "/src/components/notFoundPage.vue";

let wasUserAuth = false;

export function isUserAuth(email, pass) {
  wasUserAuth = email === "1t@1t.ru" && pass === "1t";
  return wasUserAuth;
}

const authGuard = (to, from, next) => {
  if (wasUserAuth) next();
  else {
    alert("Извините, но Вы не авторизованы!");
    next("/");
  }
};

const routes = [
  {
    path: "/",
    name: "start",
    component: StartPage,
  },
  {
    path: "/main",
    name: "mainPage",
    component: MainPage,
    beforeEnter: authGuard,
  },
  {
    path: "/about-us",
    name: "aboutUs",
    component: AboutUsPage,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: contactsPage,
  },
  {
    path: "/catalog",
    name: "catalogPage",
    component: CatalogPage,
  },
  {
    path: "/cart",
    name: "cartPage",
    component: CartPage,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFoundPage",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
