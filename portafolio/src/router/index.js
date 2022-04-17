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


// Importes de los componentes de la carpeta "bitácora"

import TareasView from '../views/bitacora/TareasView.vue'
import PracticasView from '../views/bitacora/PracticasView.vue'
import LabView from '../views/bitacora/LabView.vue'
import ProyGrupalesView from '../views/bitacora/ProyGrupalesView.vue'
import MaterialApoyView from '../views/bitacora/MaterialApoyView.vue'

// Importe de las investigaciones semanales

import SemUnoView from '../views/bitacora/investigaciones/SemUnoView.vue'
import SemDosView from '../views/bitacora/investigaciones/SemDosView.vue'
import SemTresView from '../views/bitacora/investigaciones/SemTresView.vue'
import SemCuatroView from '../views/bitacora/investigaciones/SemCuatroView.vue'
import SemCincoView from '../views/bitacora/investigaciones/SemCincoView.vue'
import SemSieteView from '../views/bitacora/investigaciones/SemSieteView.vue'
import SemOchoView from '../views/bitacora/investigaciones/SemOchoView.vue'
import SemNueveView from '../views/bitacora/investigaciones/SemNueveView.vue'
import SemDiezView from '../views/bitacora/investigaciones/SemDiezView.vue'
import SemOnceView from '../views/bitacora/investigaciones/SemOnceView.vue'
import SemDoceView from '../views/bitacora/investigaciones/SemDoceView.vue'


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
  // Apartados de la bitácora
  {
    path: '/bitacora/tareas-exaula',
    name: 'TareasView',
    component: TareasView
  },
  {
    path: '/bitacora/practicas',
    name: 'PracticasView',
    component: PracticasView
  },
  {
    path: '/bitacora/labs',
    name: 'LabView',
    component: LabView
  },
  {
    path: '/bitacora/proygrupales',
    name: 'ProyGrupalesView',
    component: ProyGrupalesView
  },
  {
    path: '/bitacora/materialapoyo',
    name: 'MaterialApoyView',
    component: MaterialApoyView
  },
  // Investigaciones semanales
  {
    path: '/bitacora/investigaciones/semana1',
    name: 'SemUnoView',
    component: SemUnoView
  },
  {
    path: '/bitacora/investigaciones/semana2',
    name: 'SemDosView',
    component: SemDosView
  },
  {
    path: '/bitacora/investigaciones/semana3',
    name: 'SemTresView',
    component: SemTresView
  },
  {
    path: '/bitacora/investigaciones/semana4',
    name: 'SemCuatroView',
    component: SemCuatroView
  },
  {
    path: '/bitacora/investigaciones/semana5',
    name: 'SemCincoView',
    component: SemCincoView
  },
  {
    path: '/bitacora/investigaciones/semana7',
    name: 'SemSieteView',
    component: SemSieteView
  },
  {
    path: '/bitacora/investigaciones/semana8',
    name: 'SemOchoView',
    component: SemOchoView
  },
  {
    path: '/bitacora/investigaciones/semana9',
    name: 'SemNueveView',
    component: SemNueveView
  },
  {
    path: '/bitacora/investigaciones/semana10',
    name: 'SemDiezView',
    component: SemDiezView
  },
  {
    path: '/bitacora/investigaciones/semana11',
    name: 'SemOnceView',
    component: SemOnceView
  },
  {
    path: '/bitacora/investigaciones/semana12',
    name: 'SemDoceView',
    component: SemDoceView
  },
]

const router = new VueRouter({
  routes
})

export default router
