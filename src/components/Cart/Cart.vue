<template>
  <div class="cart">
    <h2>КорзинА</h2>
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.vcode"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapActions } from "vuex";
import { mapGetters } from 'vuex';
export default {
  name: "cart",
  components: {
    CartItem,
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
  computed: {},
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>