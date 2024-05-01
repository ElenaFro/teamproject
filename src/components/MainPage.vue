<template>
  <div>
    <Header />
    <Navigation />
    <About />
    <ProductCatalog />
    <News />
    <Advertisement />
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Navigation from './Navigation.vue';
import About from './About.vue';
import ProductCatalog from './ProductCatalog.vue';
import News from './News.vue';
import Advertisement from './Advertisement.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Header,
    Navigation,
    About,
    ProductCatalog,
    News,
    Advertisement,
    Footer,
  },
};
</script>