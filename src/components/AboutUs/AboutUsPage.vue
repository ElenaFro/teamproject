<template>
  <div class="main">
    <MailHeader />
    <Navigation />
    <h2>О НАС</h2>
    <FooterPart />
  </div>
</template>

<script>
import MailHeader from "../MailHeader.vue";
import Navigation from "../Navigation.vue";
import FooterPart from "../FooterPart.vue";
export default {
  name: "about-us",
  components: {
    MailHeader,
    Navigation,
    FooterPart,
  },
};
</script>