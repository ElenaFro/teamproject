<template>
  <div class="start-wrapper">
    <section
      class="hero hero1 is-fullheight"
      :style="{
        backgroundImage: `url(${fonImage})`,
        backgroundSize: 'center',
        backgroundPosition: 'left',
      }"
    >
      <div class="hero-body">
        <article class="message is-success">
          <div class="message-header">
            <p>Добро пожаловать в наш уютный магазин растений</p>
          </div>
          <div class="message-body">
            Здесь вы найдете не только зелень для вашего дома или офиса, но и
            вдохновение для создания живых оазисов вокруг себя. Мы стремимся
            предложить вам <strong>самые красивые и здоровые растения</strong>.
            От зеленых друзей для ваших оконных подоконников до величественных
            деревьев для вашего сада — у нас есть что-то
            <em>для каждого любителя природы</em>. Наша команда с удовольствием
            поможет вам сделать выбор и обеспечить уход за вашими новыми
            зелеными подопечными.
          </div>
        </article>
      </div>
    </section>
    <form class="box-form ml-6 pl-6 mt-6">
      <figure class="image is-200x200 mx-auto mb-6 mt-6">
        <img :src="logoStart" alt="Мир растений" />
      </figure>
      <h2 class="mb-4 is-size-4 mt-6">Попасть на сайт</h2>
      <div class="field">
        <label class="label" for="email">Электронная почта</label>
        <div class="control">
          <input
            class="input"
            type="email"
            id="email"
            v-model="email"
            placeholder="1t@1t.ru"
          />
        </div>
      </div>
      <div class="field">
        <label class="label" for="pswd">Пароль</label>
        <div class="control">
          <input
            class="input"
            type="password"
            id="pswd"
            v-model="pass"
            placeholder="1t"
          />
        </div>
      </div>
      <div>
        <button @click="recoverPassword">Забыли пароль?</button>
      </div>
      <button class="button is-success mb-4 mr-3 mt-4" @click="login">
        Войти
      </button>
      <button class="button is-success is-outlined mt-4" @click="signUp">
        Зарегистрироваться
      </button>
    </form>
  </div>
</template>

<script>
import { isAuth } from "../router/index.js";
import logoStart from "@/assets/logo-start.png";
import fonImage from "@/assets/fon.jpg";
export default {
  data() {
    return {
      email: "",
      pass: "",
      logoStart: logoStart,
      fonImage: fonImage,
    };
  },
  methods: {
    login() {
      if (isAuth(this.email, this.pass)) {
        this.$router.replace("/main");
      } else if (this.email === "") {
        if (this.pass === "") {
          alert("Введите почту и пароль");
        } else {
          alert("Введите почту");
        }
      } else if (this.pass === "") {
        alert("Введите пароль");
      } else if (!isAuth(this.email, this.pass)) {
        alert("Такой почты не существует или пароль не подходит");
      }
    },
    recoverPassword() {
      if (this.email === "") {
        alert("Введите почту");
      } else if (!isAuth(this.email, this.pass)) {
        alert("Спасибо! Сбросили Ваш пароль на Вашу почту");
      } else {
        alert("Вы помните пароль. Добро пожаловать!");
        this.$router.replace("/main");
      }
    },
    signUp() {
      if (this.email === "" && this.pass === "") {
        alert("Введите почту и пароль");
      } else if (this.email === "") {
        alert("Введите почту");
      } else if (this.pass === "") {
        alert("Введите пароль");
      } else if (isAuth(this.email, this.pass)) {
        alert("Вы уже зарегистрированы. Добро пожаловать!");
        this.$router.replace("/main");
      } else {
        alert("Поздравляем с регистрацией! Теперь можете войти");
      }
    },
  },
};
</script>

<style>
@import "bulma/css/bulma.min.css";
#app {
  display: flex;
}
section {
  padding: 20px 0;
}
.start-wrapper {
  display: flex;
  justify-content: space-between;
}
.message {
  margin: 60px;
}
.hero1 {
  width: 55%;
}
</style>
