<template>
  <div class="wrapper">
    <section>
      <h1>ЭТО СТАРТОВАЯ СТРАНИЦА + ФОРМА АВТОРИЗАЦИИ/РЕГИСТРАЦИИ</h1>
    </section>
    <section>
      <article class="message is-primary">
        <div class="message-header">
          <p>Добро пожаловать в наш уютный магазин растений!</p>
        </div>
        <div class="message-body">
          Здесь вы найдете не только зелень для вашего дома или офиса, но и
          вдохновение для создания живых оазисов вокруг себя. Мы стремимся
          предложить вам <strong>самые красивые и здоровые растения</strong>. От
          зеленых друзей для ваших оконных подоконников до величественных
          деревьев для вашего сада — у нас есть что-то
          <em>для каждого любителя природы</em>. Наша команда с удовольствием
          поможет вам сделать выбор и обеспечить уход за вашими новыми зелеными
          подопечными.
        </div>
      </article>
    </section>
    <section class="authForm">
      <div class="field">
        <p class="control">
          <input
            class="input"
            type="email"
            name="email"
            v-model="email"
            placeholder="1t"
          />
        </p>
      </div>
      <div class="field">
        <p class="control">
          <input
            class="input"
            type="password"
            name="pswd"
            v-model="pass"
            placeholder="1t"
          />
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-primary" @click="submit()">Войти</button>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
    submit() {
      if (this.email === "1t" && this.pass === "1t") {
        this.$router.replace("/main");
      } else {
        alert("Wrong email or password");
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
</style>
