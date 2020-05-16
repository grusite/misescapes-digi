<template>
  <v-content>
    <div id="puzzle">
      <Board ref="board" v-show="playing" @restart="restart" />
      <OptionsPane ref="optionsPane" @gameStart="start" v-show="!playing" />
      <router-link to="/"><v-btn
        color="secondary"
        rounded
      >
        Home
      </v-btn>
    </router-link>
    </div>
  </v-content>
</template>

<script>
import Board from "../components/puzzles/SliderPuzzle/Board";
import OptionsPane from "../components/puzzles/SliderPuzzle/OptionsPane";
export default {
  components: {
    Board,
    OptionsPane
  },
  data() {
    return {
      playing: false
    };
  },
  methods: {
    start(...args) {
      this.playing = true;
      this.$refs.board.start(...args);
    },
    restart() {
      this.playing = false;
      this.$refs.optionsPane.reset();
    }
  }
};
</script>

<style lang="scss">
#puzzle {
  margin: 50px;
}
</style>
