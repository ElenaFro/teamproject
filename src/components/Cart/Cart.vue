<template>
  <div class="cart">
    <MailHeader />
    <Navigation :cart_data="CART" />
    <p class="title has-text-success-25 is-4 is-italic ml-5 bt-6">Корзина</p>
    <CartItem
      v-for="(item, index) in CART"
      :key="item.vcode"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increaseQuantity="increaseItemQuantity(index)"
      @decreaseQuantity="decreaseItemQuantity(index)"
    />
    <div class="columns is-centered">
      <div class="ml-6 mb-6 column is-narrow is-offset-8" v-if="totalCost !== 0">
        <p class="ml-2 my-3">Стоимость: {{ totalCost }} руб.</p>
        <button class="button is-success">Оформить заказ</button>
      </div>
    </div>
    <FooterPart />
  </div>
</template>

<script>
import MailHeader from "../MailHeader.vue";
import Navigation from "../Navigation.vue";
import CartItem from "./CartItem.vue";
import FooterPart from "../FooterPart.vue";
import { mapActions } from "vuex";
import { mapGetters } from 'vuex';
export default {
  name: "cart",
  components: {
    MailHeader,
    Navigation,
    CartItem,
    FooterPart,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"]),
    totalCost() {
        return this.CART.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
      ...mapActions(["INCREASE_ITEM_QUANTITY", "DECREASE_ITEM_QUANTITY"]),
    increaseItemQuantity(index) {
      this.INCREASE_ITEM_QUANTITY(index);
    },
    decreaseItemQuantity(index) {
      this.DECREASE_ITEM_QUANTITY(index);
    },
  },
};
</script>