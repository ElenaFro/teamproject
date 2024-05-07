<template>
  <div class="cart_item">
    <img
      class="cart_item__image"
      :src="'../../src/assets/plantsImages/' + cart_item_data.image"
      alt="Растение"
    />
    <div class="cart_item_data__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
    </div>
    <div class="cart_item_data__quantity">
      <p>Количество</p>
      <p>{{ cart_item_data.quantity }}</p>
    </div>
    <button @click="deleteFromCart">Удалить</button>
  </div>
</template>

<script>
export default {
  name: "cartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  mounted() {
    this.cart_item_data["quantity"] = 1;
  },
};
</script>

<style lang="scss">
.cart_item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 20px;
  box-shadow: 4px 4px 16px 0 yellowgreen;
  &__image {
    max-width: 100px;
  }
}
</style>