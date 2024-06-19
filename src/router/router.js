import { createRouter, createWebHistory } from "vue-router";
import StartPage from "/src/components/StartPage.vue";
import MainPage from "/src/components/Main/MainPage.vue";
import AboutUsPage from "/src/components/AboutUs/AboutUsPage.vue";
import ContactsPage from "/src/components/Contacts/ContactsPage.vue";
import CatalogPage from "/src/components/Catalog/CatalogPage.vue";
import Cart from "/src/components/Cart/Cart.vue";
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
    // beforeEnter: authGuard,
  },
  {
    path: "/about-us",
    name: "aboutUs",
    component: AboutUsPage,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsPage,
  },
  {
    path: "/catalog",
    name: "catalogPage",
    component: CatalogPage,
  },
  {
    path: '/cart/:cart_data*',
    name: 'cart',
    component: Cart,
    props: true
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
