<template>
  <div class="container">
    <div class="columns is-desktop is-vcentered">
      <div class="column mt-6 mx-5">
        <div>
          <h1 class="title has-text-success-25 is-2 is-italic">Мир растений</h1>
        </div>
        <div class="pt-6 mb-6 mr-6">
          <p class="is-size-6 mt-6">&#8226; для дома и офиса</p>
          <p class="is-size-6">&#8226; широкий выбор</p>
          <p class="is-size-6">&#8226; консультация специалистов</p>
          <p class="is-size-6">&#8226; улучшение микроклимата помещений</p>
        </div>
      </div>
      <div class="banner-image column">
        <figure class="image mr-6">
          <img src="/src/assets/photo_1.png" alt="Placeholder image" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainBody",
};
</script>

<style scoped>

body {
  background-color: white;
}
.image {
  width: 600px;
}
</style>