<template>
  <div class="card-catalog">
    <img
      class="card-catalog__image"
      :src="'../src/assets/images/' + plants_data.image"
      alt="picture"
    />
    <p class="card-catalog__name">{{ plants_data.name }}</p>
    <p class="card-catalog__price">{{ plants_data.price }}</p>
    <p class="card-catalog__about">{{ plants_data.about }}</p>
    <button class="card-catalog__add_to_cart_btn pink btn" @click="addToCart">
      В корзину
    </button>
  </div>
</template>
<script>
export default {
  name: "card-catalog",
  props: {
    plants_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
</style>