import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Path component imports
import MainMenu from './views/MainMenu.vue';
import EasyGame from './components/EasyGame.vue';
import NormalGame from './components/NormalGame.vue';
import HardGame from './components/HardGame.vue';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '', component: MainMenu},
    {path: '/easy', component: EasyGame},
    {path: '/normal', component: NormalGame},
    {path: '/hard', component: HardGame}
  ]
})
