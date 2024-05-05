<template>
  <div class="main">
    <section class="hero is-success ">
      <div class="hero">
        <p class="text has-text-light is-6  pl-6 ml-6">Доставка по России Почтой России</p>
      </div>
    </section>
    <header class="container">
      <nav class="navbar px-5" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="index.html">
            <img src="/src/assets/logo_header.png">
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
          <div class="navbar-start">
            <a class="navbar-item is-size-7">
              О нас
            </a>

            <a class="navbar-item is-size-7">
              Контакты
            </a>

            <a class="navbar-item is-size-7">
              Каталог
            </a>

            <div class="navbar-item has-dropdown is-hoverable mr-6 ">
              <a class="navbar-link is-size-7 mr-6">
                Покупателям
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item is-size-7">
                  Доставка и оплата
                </a>
                <a class="navbar-item is-size-7">
                  Возврат
                </a>
                <a class="navbar-item is-size-7">
                  Акции
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item is-size-7">
                  Новости
                </a>
              </div>
            </div>

            <a class="navbar-item is-size-7 has-text-success-20 ml-6">
              <svg-icon type="mdi" class="icon is-large" :path="path3"></svg-icon>
            </a>

            <a class="navbar-item is-size-7  has-text-danger">
              <svg-icon type="mdi" class="icon is-large" :path="path2"></svg-icon>
            </a>
            <a class="navbar-item is-size-7 has-text-success-20">
              <svg-icon type="mdi" class="icon is-large" :path="path1"></svg-icon>
            </a>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-size-7">
              Личный кабинет
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item is-size-7">
                Заказы
              </a>
              <a class="navbar-item is-size-7">
                Корзина
              </a>
              <a class="navbar-item is-size-7">
                Выход
              </a>
            </div>
          </div>

        </div>
      </nav>
    </header>

    <div class="container">
      <div class="columns is-desktop is-vcentered">
        <div class="column is-narrow mt-6 mx-5 ">
          <div>
            <h1 class="title has-text-success-25 is-2 is-italic">Мир растений</h1>
          </div>
          <div class="pt-6">
            <p class="is-size-6 mt-6">&#8226; для дома и офиса</p>
            <p class="is-size-6">&#8226; широкий выбор</p>
            <p class="is-size-6">&#8226; консультация специалистов</p>
            <p class="is-size-6">&#8226; улучшение микроклимата помещений</p>
          </div>
        </div>
        <div class="banner-image  px-3">
          <figure class="image is-140x140">
            <img src="/src/assets/photo_1.png" alt="Placeholder image">
          </figure>
        </div>
      </div>
    </div>

    <footer class="footer mb-2 pb-2  mt-6">
      <div class="container mt-1 mb-5 px-3">
        <p class="title has-text-success-20 is-3 is-italic">Контакты</p>
      </div>

      <div class="container columns is-desctop mx-auto">
        <figure class="image is-80x80 column is-narrow is-one-fifth height=100 mb-2 mr-6 ml-4">
          <img src="/src/assets/logo-footer.png" height="100">
        </figure>
        <div class="column ml-6 pl-6">
          <p class="ml-5">Москва: +7(499)1234567</p>
          <p class="ml-5">Дмитров: +7(499)1234567</p>
          <p class="ml-5">эл.почта : info@example.com</p>
        </div>
        <div class="column is-narrow">
          <div class="is-flex mt-5">
            <a class="block px-2" href="#"><img src="/src/assets/socials_vk.svg" alt="VK"></a>
            <a class="block px-2" href="#"><img src="/src/assets/socials.svg" alt="Telegram"></a>
            <a class="block px-2" href="#"><img src="/src/assets/socials_w.svg" alt="WhatsApp"></a>
          </div>
        </div>
      </div>
      <div class="content has-text-centered pt-4 mt-4">
        <p class="is-size-7">
          <strong>Bulma</strong> by <a class="has-text-warning-dark" chref="https://jgthms.com">команда D&E</a>.
          The source code is licensed<a class="has-text-warning-dark"
            href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          The website content is licensed <a class="has-text-warning-dark"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC
            BY NC SA 4.0 </a>All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
.footer {
  background-color: rgb(229, 248, 237);
}

.container {
  justify-content: space-between
}

body {
  background-color: white;
}
</style>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCart, mdiHeart, mdiMagnify } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
      path1: mdiCart,
      path2: mdiHeart,
      path3: mdiMagnify
    }
  }
}
</script>
