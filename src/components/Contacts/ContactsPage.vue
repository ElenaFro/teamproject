<template>
  <div class="main">
    <MailHeader />
    <Navigation />
    <div class="container mt-6 mb-6">
      <div class="main-content mb-6">
        <p class="title has-text-success-25 is-4 is-italic ml-5 bt-6 mt-6">Связаться с нами</p>
        <div class="contact-info mt-2 ml-5">
          <p>Адрес: ул. Примерная, д. 123, г. Вашгород</p>
          <p>Телефон: +7 (XXX) XXX-XX-XX</p>
          <p>Email: info@zelenyimir.ru</p>
          <p class="title has-text-success-25 is-6 is-italic mt-6">График работы:</p>
          <p>Понедельник-Пятница: 9:00 - 18:00</p>
          <p>Суббота: 10:00 - 16:00</p>
          <p>Воскресенье: выходной</p>
        </div>
      </div>
    </div>
    <FooterPart />
  </div>
</template>

<script>
import MailHeader from "../MailHeader.vue";
import Navigation from "../Navigation.vue";
import FooterPart from "../FooterPart.vue";
export default {
  name: "contacts",
  components: {
    MailHeader,
    Navigation,
    FooterPart,
  },
};
</script>