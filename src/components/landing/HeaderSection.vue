<template>  
    <section id="hero">
        <v-row no-gutters>
            <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="https://media-cdn.tripadvisor.com/media/photo-m/1280/19/4d/ec/08/isla-del-fraile.jpg"
            >
            <v-theme-provider dark>
                <v-container fill-height>
                <v-row
                    align="center"
                    class="white--text mx-auto"
                    justify="center"
                >
                    <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                    >
                    <span
                        class="font-weight-light"
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    >
                        EL SECRETO DE
                    </span>

                    <br>

                    <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                        class="font-weight-black"
                    >
                        LA ISLA DEL FRAILE
                    </span>

                    </v-col>

                    <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#story')"
                    >
                    <v-icon>mdi-chevron-double-down</v-icon>
                    </v-btn>
                </v-row>
                </v-container>
            </v-theme-provider>
            </v-img>
        </v-row>
    </section>
</template>