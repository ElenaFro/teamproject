<template>
  <div class="main">
    <MailHeader />
    <Navigation />
    <Cart />
    <FooterPart />
  </div>
</template>

<script>
import MailHeader from "../MailHeader.vue";
import Navigation from "../Navigation.vue";
import Cart from "./Cart.vue";
import FooterPart from "../FooterPart.vue";
export default {
  name: "catalog",
  components: {
    MailHeader,
    Navigation,
    Cart,
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