<template>
  <div class="catalog-items">
    <div class="catalog-item">
      <img
        class="catalog-item__image"
        :src="'../../src/assets/plantsImages/' + plant_data.image"
        alt="Растение"
      />
      <p class="catalog-item__name">{{ plant_data.name }}</p>
      <p class="catalog-item__about">{{ plant_data.about }}</p>
      <p class="catalog-item__price">{{ plant_data.price + "₽" }}</p>
      <button class="catalog-item__add_to_cart_btn pink btn" @click="addToCart">
        В корзину
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "catalogItem",
  props: {
    plant_data: {
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

<style>
.catalog-items {
  display: flex;
  justify-content: center;
}
.catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  box-shadow: 2px 2px 8px 0 teal;
}
.catalog-item__image {
  width: 250px;
}
.catalog-item__name {
  background-color: #48c78e;
  color: #164630;
  padding: 0 20px;
  margin: 12px 0;
  font-size: 1.2em;
}
</style>