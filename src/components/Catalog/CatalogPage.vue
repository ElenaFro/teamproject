<template>
  <div class="main">
    <MailHeader />
    <Navigation />
    <h1>catalog start</h1>
    <CatalogItem
      v-for="plant in plants"
      :key="plant.vcode"
      :plant_data="plant"
    />
    <h2>catalog end</h2>
    <FooterPart />
  </div>
</template>

<script>
import MailHeader from "../MailHeader.vue";
import Navigation from "../Navigation.vue";
import CatalogItem from "./CatalogItem.vue";
import FooterPart from "../FooterPart.vue";
export default {
  name: "catalog",
  components: {
    MailHeader,
    Navigation,
    CatalogItem,
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