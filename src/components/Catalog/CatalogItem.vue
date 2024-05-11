<template>
  <div class="catalog-items">
    <div class="catalog-item">
      <img
        class="catalog-item__image mx-3"
        :src="'../../src/assets/plantsImages/' + plant_data.image"
        alt="Растение"
      />
      <p class="catalog-item__sale" v-if="!plant_data.sale">New</p>
      <p class="catalog-item__sale has-text-danger" v-if="plant_data.sale">Sale</p>
      <p class="catalog-item__name">{{ plant_data.name }}</p>
      <p class="catalog-item__about">{{ plant_data.about }}</p>
      <p class="catalog-item__price">{{ plant_data.price + "₽" }}</p>
      <button class="button is-success catalog-item__add_to_cart_btn btn" @click="addToCart">
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
      this.$emit("addToCart", this.plant_data);
     },
  },
};
</script>

<style>
.catalog-items {
  position: relative;
  display: flex;
  justify-content: center;
}
.catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  border: 1px solid rgb(216, 216, 216);
  box-shadow: 2px 2px 8px 0 rgb(208, 218, 218);
}
.catalog-item__image {
  width: 250px;
}
.catalog-item__name {
  background-color: #48c78e;
  color: #164630;
  padding: 6px 18px;
  font-weight: 400;
  margin: 12px 0;
  font-size: 1.2em;
  border-radius: 12px 6px;
}
.catalog-item__add_to_cart_btn {
  background-color: teal;
  padding: 10px 20px;
  margin: 12px 0 6px 0;
  border-radius: 6px 12px;
  color: whitesmoke;
  font-weight: 600;
  transition: background-color 0.3s;
}

.catalog-item__add_to_cart_btn:hover{
  background-color: rgb(7, 150, 150);
  border: 1px solid teel;
}

.catalog-item__add_to_cart_btn:active{
  background-color: rgb(1, 87, 87);
}

.catalog-item__sale {
  position: absolute;
  top: 30px;
  left: 40px;
}
</style>
