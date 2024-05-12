<template>
    <div class="catalog">
      <CatalogItem
        v-for="plant in salePlants"
        :key="plant.vcode"
        :plant_data="plant"
        @addToCart="addToCart"
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
      ...mapGetters(["PLANTS"]),
      salePlants() {
         return this.PLANTS.filter(plant => plant.sale === true);
      }
    },
    methods: {
      ...mapActions(["GET_PLANTS_FROM_API", "ADD_TO_CART"]),
      addToCart(data) {
        this.ADD_TO_CART(data);
        console.log(data)
      },
    },
    mounted() {
      this.GET_PLANTS_FROM_API().then((response) => {
        if (response.data) {
          console.log("data ok");
        }
      });
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