<template>
  <div class="main">
    <MailHeader />
    <Navigation />
    <div class="about-container">
      <div class="main-content">
        <p class="title has-text-success-25 is-4 is-italic bt-6  ml-5 mt-4">О нашем магазине</p>
        <p class="ml-5">Добро пожаловать в "Зелёный Мир" – ваш онлайн-магазин для всех, кто
          любит растения и хочет принести кусочек природы в свой дом или офис.
          Мы предлагаем широкий выбор качественных растений, цветов и деревьев
          для любых потребностей.</p>
        <!-- <h2 class="ml-5">Наш ассортимент</h2> -->
        <p class="title has-text-success-25 is-6 is-italic ml-5 mt-3 mb-2">
          У нас вы найдете все, что нужно для создания уютного зелёного уголка:
        </p>
        <ul class="ml-5">
          <li>☘ Красивые комнатные растения для вашего дома</li>
          <li>☘ Яркие цветы для оформления интерьера и праздников</li>
          <li>☘ Полезные травы и овощные саженцы для вашего огорода</li>
          <li>☘ Импозантные деревья и кустарники для вашего сада</li>
        </ul>
        <!-- <h2 class="ml-5">Наши преимущества</h2> -->
        <p class="title has-text-success-25 is-6 is-italic mt-3 ml-5 mb-2">Покупая у нас, вы получаете:</p>
        <ul class="ml-5">
          <li>☘ Высокое качество растений, выращенных с любовью и заботой</li>
          <li>☘ Широкий выбор сортов и видов растений</li>
          <li>☘ Быструю и удобную доставку по всей стране</li>
          <li>
            ☘ Профессиональные консультации по уходу за растениями от наших
            экспертов
          </li>
        </ul>
        <p class="title has-text-success-25 is-6 is-italicml-5 mt-3 mb-4 ml-5">
          Присоединяйтесь к нам и создайте свой собственный зелёный мир уже
          сегодня!
        </p>
   
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
  name: "about-us",
  components: {
    MailHeader,
    Navigation,
    FooterPart,
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
  line-height: 1.6;
}
header {
  color: #fff;
  text-align: center;
  padding: 1rem;
}
.main-content {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.about-container{

}
h1,
h2 {
  text-align: center;
  margin: 1.5rem 0;
}
p {
  text-align: justify;
}
</style>