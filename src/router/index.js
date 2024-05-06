import { createRouter, createWebHistory } from "vue-router";
import StartPage from "/src/components/StartPage.vue";
import MainPage from "/src/components/Main/MainPage.vue";
import AboutUsPage from "/src/components/AboutUs/AboutUsPage.vue";
import contactsPage from "/src/components/Contacts/ContactsPage.vue";
import CatalogPage from "/src/components/Catalog/CatalogPage.vue";
import CartPage from "/src/components/Cart/CartPage.vue";
import NotFoundPage from "/src/components/NotFoundPage.vue";
export function isAuth(email, pass) {
  return email === "1t@1t.ru" && pass === "1t";
}
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
