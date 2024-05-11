<template>
  <div class="main">
    <MailHeader />
    <Navigation :cart_data="CART" />
    <Catalog />
    <FooterPart />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MailHeader from "../MailHeader.vue";
import Navigation from "../Navigation.vue";
import Catalog from "./Catalog.vue";
import FooterPart from "../FooterPart.vue";
export default {
  name: "catalogPage",
  components: {
    MailHeader,
    Navigation,
    Catalog,
    FooterPart,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART", "PLANTS"]),
  },
};
</script>