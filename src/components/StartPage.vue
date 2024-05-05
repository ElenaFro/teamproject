<template>
  <div class='start-wrapper'>
    <section class="hero  hero1 is-fullheight" style="background-image: url('src/assets/fon.jpg'); background-size: center; background-position: left;">
      <div class="hero-body">
        <article class="message is-success">
            <div class="message-header">
                <p>Добро пожаловать в наш уютный магазин растений, друзья!</p>
            </div>
            <div class="message-body">
                Здесь вы найдете не только зелень для вашего дома или офиса, но и
                вдохновение для создания живых оазисов вокруг себя. Мы стремимся
                предложить вам <strong>самые красивые и здоровые растения</strong>. От
                зеленых друзей для ваших оконных подоконников до величественных деревьев
                для вашего сада — у нас есть что-то <em>для каждого любителя природы</em>.
                Наша команда с удовольствием поможет вам сделать выбор и обеспечить уход
                за вашими новыми зелеными подопечными.
            </div>
        </article>
      </div>
   </section>

   <form class="box-form ml-6 pl-6 mt-6">
      <figure class="image is-200x200 mx-auto mb-6 mt-6">
        <img src="/src/assets/logo-start.png"/>
      </figure>
        <h2 class="mb-4 is-size-4 mt-6">Вход / Регистрация</h2>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                name="email"
                v-model="email"
                placeholder="1t"
              />
            </div>
        </div>

        <div class="field">
            <label class="label">Пароль</label>
            <div class="control">
              <input
                class="input"
                type="password"
                name="pswd"
                v-model="pass"
                placeholder="1t"
              />
            </div>
        </div>

        <div>
            <a href="http://">Забыли пароль?</a>
        </div>
        <button class="button is-success mb-4 mr-3 mt-4" @click="submit()">Войти</button>
        <button class="button is-success is-outlined mt-4">Зарегистрироваться</button>
    </form>

  </div>
    
</template>

<script>
import { isAuth } from "../router/index.js";

export default {
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
    submit() {
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
      } else if (this.email !== "1t") {
        alert("Такой почты не существует");
      } else if (this.pass !== "1t") {
        alert("Такой пароль не подходит");
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

.hero1{
    width: 55%;
}

.box-form {
    /* width: 700px;
    height: 300px; */
    /* display: flex;
    flex-direction: column;
    justify-content: top; */
    /* margin-right: 300px; */
}
/* 
#app {
  padding-right: 2rem;
  padding-left: 0;
} */
</style>
