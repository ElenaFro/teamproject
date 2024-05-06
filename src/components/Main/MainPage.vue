<template>
  <div class="main">
    <MailHeader />
    <Navigation />
    <MainBody />
    <FooterPart />
  </div>
</template>

<script>
import MailHeader from "../MailHeader.vue";
import Navigation from "../Navigation.vue";
import MainBody from "../MainBody.vue";
import FooterPart from "../FooterPart.vue";
export default {
  name: "main-page",
  components: {
    MailHeader,
    Navigation,
    MainBody,
    FooterPart,
  },
};
</script>
