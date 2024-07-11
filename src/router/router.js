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

// export function isUserAuth(email, pass) {
//   return fetch('http://localhost:3000/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email: email, password: pass }),
//   })
//   .then(response => {
//     if (!response.ok) {
//       if (response.status === 404) {
//         // console.log(isUserAuth(email, pass));
//         // Handle the case where the server returns a 404 Not Found error
//         throw new Error('Ошибка при входе: сервер не может найти конечную точку /users');
        
//       } else {
//         // Handle other errors
//         throw new Error('Ошибка при входе');
//       }
//     }
//     return response.json();
//   })
//   .then(data => {
//     if (data.authenticated) {
//       return data.user;
//     } else {
//       return false;
//     }
//   })
//   .catch(error => {
//     console.error('Ошибка:', error);
//     return false;
//   });
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
      if (response.status === 404) {
        throw new Error('Ошибка при входе: сервер не может найти конечную точку /users');
      } else {
        throw new Error('Ошибка при входе');
      }
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
    return data; // Возвращаем данные аутентификации
  })
  .catch(error => {
    console.error('Ошибка:', error);
    return false;
  });
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
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem('isAuthenticated');
//   if (to.name !== 'start' && !isAuthenticated) {
//     next({ name: 'start' }); // Перенаправляем на страницу входа, если пользователь не аутентифицирован
//   } else {
//     next();
//   }
// });

export default router;
