<template>
  <div>
    <button class="button is-success is-outlined mt-4" @click="goToStartPage">
      Вернуться на главную страницу
    </button>
    <h1>Список растений</h1>
    <ul>
      <li v-for="plant in plants" :key="plant.id">
        <h2>{{ plant.name }}</h2>
        <p>{{ plant.about }}</p>
        <p>{{ plant.price }} руб.</p>
        <img
          class="catalog-item__image mx-3"
          :src="'../../src/assets/plantsImages/' + plant.image"
          alt="Растение"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plants: [],
    };
  },
  created() {
    this.$axios
      .get("http://localhost:3000/plants")
      .then((response) => {
        this.plants = response.data;
      })
      .catch((error) => {
        console.error("Ошибка получения данных:", error);
      });
  },
  methods: {
    goToStartPage() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-weight: 700;
  margin-top: 10px;
}
li {
  margin: 20px 0;
  padding: 10px 0;
  text-align: center;
  border: 1px solid grey;
}
.button.is-outlined {
    border-color: yellow;
    color: yellow;
    background-color: black;
}
</style>
