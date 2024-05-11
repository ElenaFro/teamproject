<template>

  <div class="catalog-filters  mt-6 ml-6 mb-5">

    <div class="select is-small mr-3">
      <select v-model="filterOptions.category1">
        <option value="">Все категории</option>
        <option value="Цветы">Цветы</option>
        <option value="Кустарники">Кустарники</option>
        <option value="Деревья">Деревья</option>
      </select>
    </div>

    <div class="select is-small mr-3">
      <select v-model="filterOptions.category2">
        <option value="">Все типы</option>
        <option value="Растения для помещения">Растения для помещения</option>
        <option value="Уличные растения">Уличные растения</option>
      </select>
    </div>

    <div class="select is-small mr-4">
      <select v-model="filterOptions.availability">
        <option value="">Все (наличие)</option>
        <option value="true">В наличии</option>
        <option value="false">Нет в наличии</option>
      </select>
    </div>
    
    <input type="checkbox" v-model="filterOptions.sale"> Со скидкой
  </div>

  <div class="catalog">
    <CatalogItem v-for="plant in filteredPlants" :key="plant.vcode" :plant_data="plant" @addToCart="addToCart" />
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
    return {
      filterOptions: {
        category1: "",
        // category1: "Цветы"
        category2: "",
        availability: "",
        sale: false
      }    
    };
  },
  watch: {
    filterOptions: {
      handler: "filterPlants",
      deep: true
    }
  },
  computed: {
    ...mapGetters(["PLANTS"]),
    filteredPlants() {
    return this.filterPlants();
  }
  },
  methods: {
    ...mapActions(["GET_PLANTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    filterPlants() {
      return this.PLANTS.filter(plant => {
        let passCategory1 = this.filterOptions.category1 === "" || plant.category1 === this.filterOptions.category1;
        let passCategory2 = this.filterOptions.category2 === "" || plant.category2 === this.filterOptions.category2;
        let passAvailability = this.filterOptions.availability === "" || plant.availability.toString() === this.filterOptions.availability;
        let passSale = !this.filterOptions.sale || plant.sale === this.filterOptions.sale;
        return passCategory1 && passCategory2 && passAvailability && passSale;
      });
    }
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
  justify-content: left;
  flex-wrap: wrap;
  align-items: center;
}
</style>