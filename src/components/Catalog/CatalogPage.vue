<template>
  <div class="main">
    <MailHeader />
    <Navigation />
    <h1>catalog start</h1>
    <Catalog />
    <h2>catalog end</h2>
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