<template>
  <div class="catalog">
    <CatalogItem
      v-for="plant in PLANTS"
      :key="plant.vcode"
      :plant_data="plant"
    />
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "catalog",
  components: {
    CatalogItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PLANTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PLANTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PLANTS_FROM_API();
  },
};
</script>

<style>
.catalog {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
}
</style>