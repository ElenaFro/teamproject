<template>
  <div class="main">
    <MailHeader />
    <Navigation />
    <Catalog />
    <FooterPart />
  </div>
</template>

<script>
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
};
</script>