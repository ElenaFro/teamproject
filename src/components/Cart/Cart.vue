<template>
  <div class="cart">
    <MailHeader />
    <Navigation :cart_data="CART" />
    <h2>Корзина</h2>
    <CartItem
      v-for="(item, index) in CART"
      :key="item.vcode"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
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
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>