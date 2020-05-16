<template>
  <v-content>
      <HeaderSection/>
      <Story/>
      <Puzzles/>
      <Stats/>
      <Blog/>
      <Players/>
  </v-content>
</template>

<script>
import HeaderSection from "../components/landing/HeaderSection";
import Story from "../components/landing/Story";
import Puzzles from "../components/landing/Puzzles";
import Stats from "../components/landing/Stats";
import Blog from "../components/landing/Blog";
import Players from "../components/landing/Players";

export default {
  components: {
    HeaderSection,
    Story,
    Puzzles,
    Stats,
    Blog,
    Players
  },

  data: () => ({
    // Data
  })
};
</script>