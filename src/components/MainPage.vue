<template>
 <div class="main">
    <header class="container">
    <nav class="navbar px-5" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
          <a class="navbar-item" href="index.html">
              <img src="/src/assets/logo_header.png" height="100">
          </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
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

          <a class="navbar-item is-size-7">
            Поиск
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-size-7">
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
          <a class="navbar-item is-size-7">
            Избранное
          </a>
          <a class="navbar-item is-size-7">
            Корзина
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light has-background-success-light is-success ">
                Личный кабинет
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <div class="container">
    <div class="columns is-desktop is-vcentered">
      <div class="column is-narrow mt-6 mx-3 ">
        <div>
          <h1 class="title has-text-primary-20 is-1 is-italic">Мир растений</h1>
        </div>
        <div>
          <p class="is-size-6 mt-6">- для дома и офиса</p>
          <p class="is-size-6">- широкий выбор</p>
          <p class="is-size-6">- консультация специалистов</p>
          <p class="is-size-6">- улучшения микроклимата помещений</p>
        </div>
      </div>
      <div class="banner-image  px-3">
        <figure class="image is-140x140">
          <img src="/src/assets/photo_1.png" alt="Placeholder image">
        </figure>
      </div>
    </div>
  </div>

   <footer class="footer mb-2 pb-2">
    <div class="container mt-1 mb-5 px-3">
      <p class="title has-text-primary-20 is-3 is-italic">Контакты</p>
    </div>

    <div class="container columns is-desctop mx-auto">
      <div class="column">
        <p>Москва: +7(499)1234567</p>
        <p>Дмитров: +7(499)1234567</p>
        <p>эл.почта : info@example.com</p>
      </div>
      <div class="column is-narrow">
        <div class="is-flex mt-5">
          <a class="block px-3" href="#"><img src="/src/assets/socials_vk.svg" alt="VK"></a>
          <a class="block px-3" href="#"><img src="/src/assets/socials.svg" alt="Telegram"></a>
          <a class="block px-3" href="#"><img src="/src/assets/socials_w.svg" alt="WhatsApp"></a>
        </div>
      </div>
    </div>
    <div class="content has-text-centered pt-4 mt-4">
      <p>
        <strong>Bulma</strong> by <a class="has-text-warning-dark" chref="https://jgthms.com">команда D&E</a>.
        The source code is licensed<a class="has-text-warning-dark"
          href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        The website content is licensed <a class="has-text-warning-dark"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC
          BY NC SA 4.0 </a>All rights reserved.
      </p>
    </div>
  </footer>> 
 </div>
</template>

<style  scoped>
/* @media (min-width: 1024px) {
  .main {
    min-height: 100vh;
    display: flex;
    align-items: center;
    font-size: 2em;
  }
  h1 {
    color: whitesmoke;
  }
} */

  body {
    background-color: white;
  }  
</style>



