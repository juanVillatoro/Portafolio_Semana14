<template>
    <div>
        <!-- Titulo del componente -->
        <b-jumbotron  style="background-color: #69EAF0">
            <template #header>
                Semana 1: Introducción a las librerías (Boostrap y Vuejs)
            </template>
        </b-jumbotron>

        <!-- Línea divisora -->

        <hr class="my-4">

        <!-- Espacio -->

        <hr size="1" />

        <b-container style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 20px; text-align: justify; background-color: #65B8E6">
            
            <hr size="1" />

            <center><h2><b>Boostrap</b></h2></center>

            <hr size="1" />
            
            <p>
                En esta semana aprendimos acerca de boostrap, esta herramienta 
                es un framework CSS de código abierto utilizada para el front-end, 
                es muy útil para crear cualquier tipo de interfaces web.
            </p>

            <hr size="1" />

            <p>
                Sus inicios fueron en la plataforma Twitter en el año 2011 por las personas 
                Mark Otto y Jacob Thornton, este framework es de código abierto, lo que significa 
                que cualquier persona puede utilizarlo y modificarlo para bien, boostrap a lo largo 
                de los años se ha convertido en uno de los frameworks más populares en el mundo del 
                desarrollo web. Su enfoque principal es permitirle al usuario crear sus propios diseños 
                web utilizando formularios, botones, entradas de texto, etc. Para modificar la apariencia 
                del sitio que desarrolle.
            </p>

            <hr size="1" />

            <p>
                Este framework aporta contenidos por medio de etiquetas, también aporta componentes, soporte 
                móvil, clases para añadirle a los componentes, cuadriculas, formularios, entre otros. 
            </p>

            <center><h2><b>VueJs</b></h2></center>

            <p>
                En esta semana también aprendimos un poco acerca de VueJS, esta herramienta es una framework 
                progresivo, cuya librería central está enfocada solo en la capa de visualización. Vue está 
                diseñado para ser adoptable para los usuarios, ya que provee facilidad para implementar 
                otras bibliotecas. Además de esto, VueJS es capaz de crear aplicaciones sofisticadas cuando 
                esta es utilizada con otras herramientas actuales y de soporte.
            </p>

            <hr size="1" />

            <p>
                Con VueJS se puede crear todas las vistas que tendrá la página web, y se pueden hacer dinámicas 
                además de que pueden conectarse a un servidor para obtener datos dinámicos de una base de datos 
                externa.
            </p>

            <hr size="1" />

            <p>
                VueJS tiene las siguientes características: Modularidad, Reactividad, Componentes Web, Virtual DOM, 
                Eventos y transiciones, Mixins, Lifeclicle, entre otras. La Reactividad consiste en que si se cambia 
                una variable en alguna parte de la vista de la página Vue se encargará de actualizar el valor. 
            </p>

            <hr size="1" />

            <p>
                Los Mixins son las funciones y lógica de los componentes que pueden reutilizarse en otros componentes 
                web, y el Lifecicle consiste en modificar lo que pasa antes de cargar un componente.
            </p>

            <hr size="1" />

            <p>
                VueJS posee su propia lista de comandos, que le permite inicializar una app con la configuración que 
                nosotros querramos. Entre las formas en que se puede inicializar están “vue init webpack”, “vue init 
                simple”, entre muchas otras.
            </p>

            <hr size="1" />


            <h2><b>Bibliografía:</b></h2>

            <hr size="1" />

            <ul>
                <li>
                    Anonimo. (2022). Arimetrics. Obtenido de https://www.arimetrics.com/glosario-digital/bootstrap
                </li>

                <hr size="1" />

                <li>
                    You, E. (Febrero de 2014). Vuejs. Obtenido de https://es.vuejs.org/v2/guide/
                </li>
            </ul>


        </b-container>

        <hr size="1" />

    </div>
</template>

<script>
    export default {
    name: "SemUnoComponent",
    };
</script>