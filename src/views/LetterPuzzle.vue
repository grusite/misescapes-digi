<template>
  <v-content>
    <section
        id="letter-puzzle"
        class="overflow-hidden"
    >
        <v-row
        class="info white--text"
        no-gutters
        >
        <v-col
            class="hidden-sm-and-down"
            md="6"
        >
            <v-img
            :src="require('@/assets/letter-puzzle.png')"
            height="100%"
            />
        </v-col>

        <v-col
            class="pa-5"
            cols="12"
            md="6" 
            style="background-color: #86592d;"
        >
            <BaseHeading class="mb-5">
            Letter story
            </BaseHeading>

            <p
                class="title font-weight-light"
                style="line-height: 1.7 !important;"
            >
                Lorem ipsum dolor sit amet, consectetur adipi<br>
                scin elit. Etiam vulputate augue vel felis gravida<br>
                porta. Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consectetur adipi<br>
                scin elit. Etiam vulputate augue vel felis gravida<br>
                porta. Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consectetur adipi<br>
                scin elit. Etiam vulputate augue vel felis gravida<br>
                porta. Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consectetur adipi<br>
                scin elit. Etiam vulputate augue vel felis gravida<br>
                porta. Lorem ipsum dolor sit amet.
            </p>

            <v-sheet
            color="transparent"
            max-width="600"
            >
            <v-text-field
                color="info"
                label="Respuesta"
                solo
                flat
            />
            
            <router-link to="/phoenicians-puzzle"><BaseBtn>Enviar</BaseBtn></router-link>
            </v-sheet>
        </v-col>
        </v-row>
    </section>
  </v-content>
</template>

<script>
import BaseBtn from "../components/puzzles/LetterPuzzle/Btn";
import BaseHeading from "../components/puzzles/LetterPuzzle/Heading";
export default {
  name: "LetterPuzzle",
  components: { BaseBtn, BaseHeading }
};
</script>