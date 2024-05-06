<template>
  <footer class="footer pb-2 mt-4">
    <div class="container mt-1 mb-5 px-3">
      <p class="title has-text-success-20 is-3 is-italic">Контакты</p>
    </div>
    <div class="container columns is-desctop mx-auto">
      <figure
        class="image is-80x80 column is-narrow is-one-fifth height=100 mb-2 mr-6 ml-4"
      >
        <img src="/src/assets/logo-footer.png" height="100" />
      </figure>
      <div class="column ml-6 pl-6">
        <p class="ml-5">Москва: +7(499)1234567</p>
        <p class="ml-5">Дмитров: +7(499)1234567</p>
        <p class="ml-5">эл.почта : info@example.com</p>
      </div>
      <div class="column is-narrow">
        <div class="is-flex mt-5">
          <a class="block px-2" target="_blank" href="https://vk.com/1tsprint"
            ><img src="/src/assets/socials_vk.svg" alt="VK"
          /></a>
          <a
            class="block px-2"
            target="_blank"
            href="https://t.me/sprint_1t_bot"
            ><img src="/src/assets/socials.svg" alt="Telegram"
          /></a>
          <a class="block px-2" target="_blank" href="https://www.whatsapp.com/"
            ><img src="/src/assets/socials_w.svg" alt="WhatsApp"
          /></a>
        </div>
      </div>
    </div>
    <div class="content has-text-centered">
      <p class="is-size-7">
        <strong>Bulma</strong> by
        <a class="has-text-warning-dark" chref="https://jgthms.com"
          >команда D&E</a
        >. The source code is licensed<a
          class="has-text-warning-dark"
          href="http://opensource.org/licenses/mit-license.php"
          >MIT</a
        >. The website content is licensed
        <a
          class="has-text-warning-dark"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY NC SA 4.0 </a
        >All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerPart",
};
</script>

<style>
.footer {
  background-color: rgb(229, 248, 237);
}
</style>