<template>
  <div class="main">
    <MailHeader />
    <Navigation />
    <MainBody />
    <MainCatalog />
    <FooterPart />
  </div>
</template>

<script>
import MailHeader from "../MailHeader.vue";
import Navigation from "../Navigation.vue";
import MainBody from "../MainBody.vue";
import MainCatalog from "../MainCatalog.vue";
import FooterPart from "../FooterPart.vue";
export default {
  name: "main-page",
  components: {
    MailHeader,
    Navigation,
    MainBody,
    MainCatalog,
    FooterPart,
  },
};
</script>
