<template>
    <div>
        <!-- Titulo del componente -->
        <b-jumbotron  style="background-color: #69EAF0">
            <template #header>
                Semana 4: Componentes
            </template>
        </b-jumbotron>

        <!-- Línea divisora -->

        <hr class="my-4">

        <!-- Espacio -->

        <hr size="1" />

        <b-container style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 20px; text-align: justify; background-color: #65B8E6">

            <hr size="1" />
            
            <p>
                Los componentes de Vue son la forma en que reutilizamos tantas veces como se quiera una 
                instancia creada con el mismo Vue.js, usando estos componentes se puede crear documentos 
                html y darles acción a estos, cada componente tiene su propia característica, propiedad y 
                método particular que de forma sencilla podemos reutilizar para otra aplicación. 
            </p>

            <hr size="1" />

            <p>
                La sintaxis para crear componentes es: “Vue.component(“name”, { options })”, la variable 
                “name” indica el nombre que queramos que tenga el componente, la parte de “options” son 
                todas las opciones que podemos enviar a cada instancia de Vue con las diferencias que no 
                necesitamos especificar el contexto y el data puede retornar como un objeto. Los compontes 
                de Vue pueden ser utilizados para recibir parámetro de otro archivo, como un html. 
            </p>

            <hr size="1" />

            <p>
                En una aplicación es común tener organizado los componentes organizados en forma de árbol, 
                se puede tener componentes para un encabezado, una barra lateral y un área de contenido, 
                cada uno de los cuales en su mayoría contienen otros componentes para los enlaces de 
                navegación y publicaciones de blog, entre otros. Para usar métodos en templates de Vue estos 
                deben ser registrados para que Vue los reconozca, para esto existen dos formas de registrarlos, 
                global o local.
            </p>

            <hr size="1" />

            <p>
                Los componentes pueden ser registrados de forma global, esto se logra mediante el llamado al método 
                “component” de Vue, si un componente se registra de forma global quiere decir que está disponible para 
                cualquier componente de Vue, sin importar cual sea. Así como el registro global de un componente 
                proporciona muchas ventajas también posee una desventaja clara, la cual sería el tiempo, porque a medida 
                que este pase y sigamos utilizando la app los componentes globales pueden ir acumulándose aun sin ser 
                utilizados en todas las vistas que existen en la app, para esto Vue provee de la ventaja de agregar los 
                componentes que serán utilizados en un componente en específico. 
            </p>

            <hr size="1" />

            <h2><b>Bibliografía:</b></h2>

            <hr size="1" />

            <ul>
                <li>
                    You, E. (Febrero de 2014). Vuejs. Obtenido de https://es.vuejs.org/v2/guide/components.html
                </li>
            </ul>

            <hr size="1" />

        </b-container>

        <hr size="1" />

    </div>
</template>

<script>
    export default {
    name: "SemCuatroComponent",
    };
</script>