<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>

        <!-- Apartado para agregar introducción al portafolio -->
        <b-nav-item class="btn btn-dark" type="light" to="/introduccion">Introducción al portafolio</b-nav-item>
        
        <!-- Generalidades de la asignatura -->
        <b-nav-item-dropdown class="btn btn-dark" type="light" text="Generalidad" right>
          <b-dropdown-item to="/descripcion">Descripción</b-dropdown-item>
          <b-dropdown-item to="/contenidos">Contenidos</b-dropdown-item>
          <b-dropdown-item to="/jornalizacion">Jornalización</b-dropdown-item>
          <b-dropdown-item to="/calendarizacion">Calendarización</b-dropdown-item>
        </b-nav-item-dropdown>

        <!-- Apartado para agregar datos de mi persona -->
        <b-nav-item class="btn btn-dark" type="light" to="/aboutme">Acerca de mí</b-nav-item>

        <!-- Apartado para agregar las conclusiones generales de los contenidos -->
        <b-nav-item class="btn btn-dark" type="light" to="/conclusiones">Conclusiones</b-nav-item>
        
      </b-navbar-nav>

      <!-- Componentes para la estructura de la sidebar -->

      <div>
        <!-- Botón en la navbar para abrir sidebar -->
        <b-button id="Siderbar" v-b-toggle.sidebar-1-variant class="btn btn-light" type="dark">Abrir Bitácora</b-button>

        <!-- Sidebar -->
        <!-- Bitacora de aprendizajes -->
        <b-sidebar id="sidebar-1-variant" title="Bitácora de Aprendizaje" shadow>
          <div class="px-3 py-2">

            <!-- Apartado para las tareas ex-aula -->
            <div>
              <b-button class="w-100 btn btn-dark" style="text-align: center" to="/bitacora/tareas-exaula">Tareas ex-aula</b-button>
            </div>

            <hr size="1" />

            <!-- Button collapse para las investigaciones del contenido -->
            <div>
              <b-button v-b-toggle.collapse-1 class="w-100 btn btn-dark" style="text-align: center; color: #FFFFFF">
                Investigaciones
                <div style="float: right">
                  <b-icon icon="caret-down-square"></b-icon>
                </div>
              </b-button>

              <b-collapse id="collapse-1">
                <b-list-group>
                  <b-list-group-item
                    class="border-1 bg-light">
                    Cómputo I
                  </b-list-group-item>
                  <b-list-group-item class="border-1 bg-light" to="/bitacora/investigaciones/semana1">
                    Semana 1
                  </b-list-group-item>
                  <b-list-group-item class="border-1 bg-light" to="/bitacora/investigaciones/semana2">
                    Semana 2
                  </b-list-group-item>
                  <b-list-group-item class="border-1 bg-light" to="/bitacora/investigaciones/semana3">
                    Semana 3
                  </b-list-group-item>
                  <b-list-group-item class="border-1 bg-light" to="/bitacora/investigaciones/semana4">
                    Semana 4
                  </b-list-group-item>
                  <b-list-group-item class="border-1 bg-light" to="/bitacora/investigaciones/semana5">
                    Semana 5
                  </b-list-group-item>
                  <b-list-group-item
                    class="border-1 bg-light">
                    Cómputo II
                  </b-list-group-item>
                  <b-list-group-item class="border-1 bg-light" to="/bitacora/investigaciones/semana7">
                    Semana 7
                  </b-list-group-item>
                  <b-list-group-item class="border-1 bg-light" to="/bitacora/investigaciones/semana8">
                    Semana 8
                  </b-list-group-item>
                  <b-list-group-item class="border-1 bg-light" to="/bitacora/investigaciones/semana9">
                    Semana 9
                  </b-list-group-item>
                  <b-list-group-item class="border-1 bg-light" to="/bitacora/investigaciones/semana10">
                    Semana 10
                  </b-list-group-item>
                  <b-list-group-item class="border-1 bg-light" to="/bitacora/investigaciones/semana11">
                    Semana 11
                  </b-list-group-item>
                  <b-list-group-item class="border-1 bg-light" to="/bitacora/investigaciones/semana12">
                    Semana 12
                  </b-list-group-item>
                </b-list-group>
              </b-collapse>
            </div>
            <!-- Fin del collapse -->

            <hr size="1" />

            <!-- Apartado para prácticas desarrolladas -->
            <div>
              <b-button class="w-100 btn btn-dark" style="text-align: center" to="/bitacora/practicas">Prácticas desarrolladas</b-button>
            </div>

            <hr size="1" />

            <!-- Apartado para los laboratorios realizados -->
            
            <div>
              <b-button class="w-100 btn btn-dark" style="text-align: center" to="/bitacora/labs">Laboratorios desarrollados</b-button>
            </div>

            <hr size="1" />

            <!-- Apartado para los proyectos grupales -->

            <div>
              <b-button class="w-100 btn btn-dark" style="text-align: center" to="/bitacora/proygrupales">Proyectos grupales</b-button>
            </div>

            <!-- Apartado para los materiales de apoyo -->

            <hr size="1" />

            <div>
              <b-button class="w-100 btn btn-dark" style="text-align: center" to="/bitacora/materialapoyo">Materiales de Apoyo</b-button>
            </div>

          
          </div>
        </b-sidebar>
      </div>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
  methods: {
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
