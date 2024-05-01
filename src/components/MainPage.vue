<template>
  <div>
    <Header />
    <Navigation />
    <!-- <About />
    <Catalog /> -->
    <!-- <News /> -->
    <Advertisement />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
//   import About from './components/About.vue';
//   import Catalog from './components/Catalog.vue';
//   import News from './components/News.vue';
import Advertisement from './components/Advertisement.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Navigation,
  //   About,
  //   Catalog,
  //   News,
    Advertisement,
    Footer,
  },
};
</script>