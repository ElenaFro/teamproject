<template>
  <div class="catalog">
    <CatalogItem />
    <!-- <CatalogItem
      v-for="plant in plants"
      :key="plant.vcode"
      :plant_data="plant"
    /> -->
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
export default {
  name: "catalog",
  components: {
    CatalogItem,
  },
};
</script>