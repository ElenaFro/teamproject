<template>
  <div class="main">
    <MailHeader />
    <Navigation />
    <Catalog />
    <Cart v-if="CART.length" :cart_data="CART" />
    <FooterPart />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MailHeader from "../MailHeader.vue";
import Navigation from "../Navigation.vue";
import Catalog from "./Catalog.vue";
import Cart from "../Cart/Cart.vue";
import FooterPart from "../FooterPart.vue";
export default {
  name: "catalogPage",
  components: {
    MailHeader,
    Navigation,
    Catalog,
    Cart,
    FooterPart,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>