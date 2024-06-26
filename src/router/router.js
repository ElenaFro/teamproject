import { createRouter, createWebHistory } from "vue-router";
import StartPage from "/src/components/StartPage.vue";
import MainPage from "/src/components/Main/MainPage.vue";
import AboutUsPage from "/src/components/AboutUs/AboutUsPage.vue";
import ContactsPage from "/src/components/Contacts/ContactsPage.vue";
import CatalogPage from "/src/components/Catalog/CatalogPage.vue";
import Cart from "/src/components/Cart/Cart.vue";
import NotFoundPage from "/src/components/notFoundPage.vue";
import GetPlants from "/src/components/GetPlants.vue";
import PlantPage from "/src/components/Catalog/PlantPage.vue";
import RegistrPage from "/src/components/RegistrPage.vue";
import Person from "/src/components/PersonalАссount/Person.vue";

// let wasUserAuth = false;

// export function isUserAuth(email, pass) {
//   wasUserAuth = email === "1t@1t.ru" && pass === "1t";
//   return wasUserAuth;
// }

// export function isUserAuth(email, pass) {
//   fetch('http://localhost:3000/login', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email: email, password: pass }),
//   })
//   .then(response => {
//       if (!response.ok) {
//           throw new Error('Ошибка при входе');
//       }
//       return response.json();
//   })
//   .then(data => {
//       if (data.authenticated) {
//           return true;
//       } else {
//           return false;
//       }
//   })
//   // .catch(error => {
//   //     console.error('Ошибка:', error);
//   //     return false;
//   // });
// }

export function isUserAuth(email, pass) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email, password: pass }),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Ошибка при входе');
      }
      return response.json();
  })
  // .then(data => {
  //     return data.authenticated;
  .then(data => {
    if (data.authenticated) {
        return true;
    } else {
        return false;
    }
  })

 
  .catch(error => {
      console.error('Ошибка:', error);
      return false;
  });
}

// const authGuard = (to, from, next) => {
//   if (wasUserAuth) next();
//   else {
//     alert("Извините, но Вы не авторизованы!");
//     next("/");
//   }
// };

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
    path: "/get-plants",
    name: "getPlants",
    component: GetPlants,
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
  {
    path: '/plant/:id',
    name: 'plantPage',
    component: PlantPage,
  },
  {
    path: '/registr',
    name: 'registr',
    component: RegistrPage,
  },
  {
    path: '/person',
    name: 'person',
    component: Person,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
