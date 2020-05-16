import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import SliderPuzzle from '../views/SliderPuzzle.vue'
import LetterPuzzle from '../views/LetterPuzzle.vue'
import PhoeniciansPuzzle from '../views/PhoeniciansPuzzle.vue'
import RomanAlgebraPuzzle from '../views/RomanAlgebraPuzzle.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/letter-puzzle',
      name: 'letterPuzzle',
      component: LetterPuzzle,
    },
    {
      path: '/phoenicians-puzzle',
      name: 'phoeniciansPuzzle',
      component: PhoeniciansPuzzle,
    },
    {
      path: '/roman-algebra-puzzle',
      name: 'romanAlgebraPuzzle',
      component: RomanAlgebraPuzzle,
    },
    {
      path: '/slider-puzzle',
      name: 'sliderPuzzle',
      component: SliderPuzzle,
    },
  ],
})
