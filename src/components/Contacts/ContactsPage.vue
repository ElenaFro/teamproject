<template>
  <div class="main">
    <MailHeader />
    <Navigation />
    <h2>КОНТАКТЫ</h2>
    <FooterPart />
  </div>
</template>

<script>
import MailHeader from "../MailHeader.vue";
import Navigation from "../Navigation.vue";
import FooterPart from "../FooterPart.vue";
export default {
  name: "contacts",
  components: {
    MailHeader,
    Navigation,
    FooterPart,
  },
};
</script>