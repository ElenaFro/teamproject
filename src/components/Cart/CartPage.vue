<template>
  <div class="main">
    <MailHeader />
    <Navigation />
    <h2>КОРЗИНА</h2>
    <CartItem />
    <FooterPart />
  </div>
</template>

<script>
import MailHeader from "../MailHeader.vue";
import Navigation from "../Navigation.vue";
import CartItem from "./CartItem.vue";
import FooterPart from "../FooterPart.vue";
export default {
  name: "catalog",
  components: {
    MailHeader,
    Navigation,
    CartItem,
    FooterPart,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log("dont worry");
  },
};
</script>