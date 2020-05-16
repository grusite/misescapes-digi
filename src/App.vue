<template>
  <v-app>
    <Header/>
    <main>
      <router-view></router-view>
    </main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "./components/landing/Header";
import Footer from "./components/landing/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer
  },

  data: () => ({
    // Data
  })
};
</script>