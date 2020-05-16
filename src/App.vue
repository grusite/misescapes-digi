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
import Header from "./components/Landing/Header";
import Footer from "./components/Landing/Footer";

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