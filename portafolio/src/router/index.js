import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IntroduccionView from '../views/IntroduccionView.vue'
import DescripcionView from '../views/DescripcionView.vue'
import ContenidosView from '../views/ContenidosView.vue'
import JornalizacionView from '../views/JornalizacionView.vue'
import CalendarizacionView from '../views/CalendarizacionView.vue'
import AboutMe from '../views/About.vue'
import ConclusionesView from '../views/ConclusionesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/introduccion',
    name: 'IntroduccionView',
    component: IntroduccionView
  },
  {
    path: '/',
    name: 'IntroduccionView',
    component: IntroduccionView
  },
  {
    path: '/descripcion',
    name: 'DescripcionView',
    component: DescripcionView
  },
  {
    path: '/contenidos',
    name: 'ContenidosView',
    component: ContenidosView
  },
  {
    path: '/jornalizacion',
    name: 'JornalizacionView',
    component: JornalizacionView
  },
  {
    path: '/calendarizacion',
    name: 'CalendarizacionView',
    component: CalendarizacionView
  },
  {
    path: '/aboutme',
    name: 'About',
    component: AboutMe
  },
  {
    path: '/conclusiones',
    name: 'ConclusionesView',
    component: ConclusionesView
  },
]

const router = new VueRouter({
  routes
})

export default router
