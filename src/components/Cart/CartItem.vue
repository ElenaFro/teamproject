<template>
  <div class="cart_item columns">
    <div class="cart_item_plant column is-one-third">
      <img
      class="cart_item__image mr-6"
      :src="'../../src/assets/plantsImages/' + cart_item_data.image"
      alt="Растение"
      />
      <a class="cart_item_data__name has-text-success">{{ cart_item_data.name }}</a>
    </div>

    <div class="cart_item_data__info column">
      <p>Цена</p>
      <p>{{ cart_item_data.price }} руб.</p>
    </div>
    <div class="cart_item_data__quantity column">
      <p>Количество</p>
      <div class="incr columns mt-2">
        <span class=" tag incr_button column is-narrow is-success is-light py-0 px-2" @click="decreaseQuantity">−</span>
        <p class="column is-narrow">{{ cart_item_data.quantity }} шт.</p>
        <span class=" tag incr_button column is-narrow is-success is-light py-0 px-2" @click="increaseQuantity">+</span>
      </div>
      
    </div>
    <button  class="button is-success is-light" @click="deleteFromCart">Удалить</button>
    
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
    increaseQuantity() {
      this.$emit('increaseQuantity', this.cart_item_data.index);
    },
    decreaseQuantity() {
      this.$emit('decreaseQuantity', this.cart_item_data.index);
    }
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
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgb(216, 216, 216);
  box-shadow: 2px 2px 8px 0 rgb(208, 218, 218);
  &__image {
    max-width: 100px;
  }
}

.cart_item_plant {
  display: flex;
  align-items: center;
}
.incr_button {
  border: 1px solid rgb(216, 216, 216);
  box-shadow: 2px 2px 4px 0 rgb(208, 218, 218);
  font-size: 20px;
  // line-height: 20px;
}

.incr {
  align-items: center;
}
</style>
