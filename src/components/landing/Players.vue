<template>
    <v-sheet
        id="players"
        color="#333333"
        dark
        tag="section"
        tile
      >
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Jugadores</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-theme-provider light>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  flat
                  label="Jugador 1*"
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  flat
                  label="Jugador 2*"
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  flat
                  label="Jugador 3*"
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  flat
                  label="Jugador 4*"
                  solo
                ></v-text-field>
              </v-col>

              <v-col
                class="mx-auto"
                cols="auto"
              >
                <router-link to="/letter-puzzle">
                  <v-btn
                    color="accent"
                    x-large
                  >
                    ¡Empezar!
                  </v-btn>
                </router-link>
              </v-col>
            </v-row>
          </v-theme-provider>
        </v-container>

        <div class="py-12"></div>
    </v-sheet>
</template>