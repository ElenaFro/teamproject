<template>
  <div class="main-catalog">
    <MailHeader />
    <Navigation :cart_data="CART" />
    <nav class="breadcrumb has-succeeds-separator ml-3  mt-3 is-small" aria-label="breadcrumbs">
      <ul>
        <li><a href="/main">Главная</a></li>
        <li class="is-active"><a href="/catalog" aria-current="page">Каталог</a></li>
      </ul>
    </nav>
    <div class="content-catalog">
      <Catalog />
    </div>
    
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
    ...mapGetters(["CART"]),
  },
};
</script>
<style scoped>
li {
  color: #000;
}
.main-catalog{
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Установка минимальной высоты страницы */
}
.content-catalog{
  flex: 1; /* Занимаем все доступное пространство */
}
</style>