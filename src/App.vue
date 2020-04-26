<template>
  <v-app>
    <Header/>

    <v-content>
        <HeaderSection/>
        <Story/>
        <Puzzles/>
        <Stats/>
        <Blog/>
        <Players/>
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import HeaderSection from "./components/HeaderSection";
import Story from "./components/Story";
import Puzzles from "./components/Puzzles";
import Stats from "./components/Stats";
import Blog from "./components/Blog";
import Players from "./components/Players";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Header,
    HeaderSection,
    Story,
    Puzzles,
    Stats,
    Blog,
    Players,
    Footer
  },

  data: () => ({
    // Data
  })
};
</script>