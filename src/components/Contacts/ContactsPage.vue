<template>
  <div class="main">
    <MailHeader />
    <Navigation />
    <div class="container">
      <div class="main-content">
        <h2>Связаться с нами</h2>
        <div class="contact-info">
          <p>Адрес: ул. Примерная, д. 123, г. Вашгород</p>
          <p>Телефон: +7 (XXX) XXX-XX-XX</p>
          <p>Email: info@zelenyimir.ru</p>
          <p>График работы:</p>
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