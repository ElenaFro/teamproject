import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";

import axios from 'axios';

// createApp(App).use(store).use(router).mount("#app");

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.use(store).use(router).mount('#app');