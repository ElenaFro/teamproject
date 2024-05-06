<template>
  <!-- <img
      class="card-catalog__image"
      :src="'/src/assets/images/' + plant.image"
      alt="picture"
    /> -->
  <p class="card-catalog__name">{{ plant.name }}</p>
  <p class="card-catalog__price">{{ plant.price }}</p>
  <p class="card-catalog__about">{{ plant.about }}</p>
  <button class="card-catalog__add_to_cart_btn pink btn" @click="addToCart">
    В корзину
  </button>
</template>

<script>
export default {
  name: "catalogItem",
  props: {
    plants: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    addToCart() {
      // Реализация добавления в корзину
    },
  },
};
</script>