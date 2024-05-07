<template>
        <div class="ml-5">
            <h3 class="title has-text-success-25 is-4 is-italic">Распродажа</h3>
        </div>
        <CatalogSale />
       
  </template>
  
  <script>
  import CatalogSale from "@/components/Catalog/CatalogSale.vue";
  export default {
    name: "MainCatalog",
    components: {
    CatalogSale,
  },
    props: {},
    data() {
        return {};
    },
   };
  </script>
  
  <style>
  body {
    background-color: white;
  }
  .image {
    width: 400px;
  }

  </style>