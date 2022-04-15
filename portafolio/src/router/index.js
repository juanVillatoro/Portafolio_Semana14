import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IntroduccionView from '../views/IntroduccionView.vue'
import AboutMe from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/introduccion',
    name: 'IntroduccionView',
    component: IntroduccionView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutMe
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
