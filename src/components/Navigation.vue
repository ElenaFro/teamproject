<template>
  <header class="container1">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/main">
          <img src="/src/assets/logo_header.png" />
        </a>
        <a role="button" class="navbar-burger has-text-success-dark" aria-label="menu" aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu mt-1">
        <div class="navbar-start ml-6">
          <a class="navbar-item is-size-7" href="/about-us"> О нас </a>
          <a class="navbar-item is-size-7" href="/contacts"> Контакты </a>
          <a class="navbar-item is-size-7 mr-6" href="/catalog"> Каталог </a>
          <div class="navbar-item ml-6">
            <a class="navbar-item is-size-7 has-text-success-20 ml-6" href="/search">
              <svg-icon type="mdi" class="icon is-large" :path="path1"></svg-icon>
            </a>
            <a class="navbar-item is-size-7 has-text-danger" href="/favorite">
              <svg-icon type="mdi" class="icon is-large" :path="path2"></svg-icon>
            </a>

            <router-link :to="{ name: 'cart', params: {cart_data: CART} }">
              <div class="is-success is-light is-size-7" >
                <div class="navbar-item is-size-7 has-text-success-20">
                  <svg-icon type="mdi" class="icon is-large" :path="path3"></svg-icon>
                  {{ CART.length }}
                </div>        
              </div>
            </router-link>
          </div>
          
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link is-size-7"> Личный кабинет </a>
          <div class="navbar-dropdown">
            <a class="navbar-item is-size-7" href="/buy"> Заказы </a>
            <a class="navbar-item is-size-7" href="/about-me"> Обо мне </a>
            <a class="navbar-item is-size-7" @click="logout" href="/">
              Выход
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters} from "vuex";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMagnify, mdiCart, mdiHeart } from "@mdi/js";
export default {
  name: "navigation",
  components: {
    SvgIcon,
  },
  data() {
    return {
      path1: mdiMagnify,
      path2: mdiHeart,
      path3: mdiCart,
    };
  },
  methods: {
    logout() {
      wasAuth = false;
    },
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>