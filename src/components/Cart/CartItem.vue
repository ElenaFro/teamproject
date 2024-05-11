<template>
  <div class="cart_item columns">
    <div class="column is-one-third">
      <img
      class="cart_item__image"
      :src="'../src/assets/plantsImages/' + cart_item_data.image"
      alt="Растение"
      />
      <p>{{ cart_item_data.name }}</p>
    </div>

    <div class="cart_item_data__info column">
      <p>{{ cart_item_data.price }}</p>
    </div>
    <div class="cart_item_data__quantity column">
      <p>Количество</p>
      <p>{{ cart_item_data.quantity }} шт.</p>
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
  // display: flex;
  // flex-wrap: nowrap;
  justify-content: space-between;
  // align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgb(216, 216, 216);
  box-shadow: 2px 2px 8px 0 rgb(208, 218, 218);
  &__image {
    max-width: 100px;
  }
}
</style>
