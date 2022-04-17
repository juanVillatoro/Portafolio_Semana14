<template>
    <div>
        <!-- Titulo del componente -->
        <b-jumbotron  style="background-color: #69EAF0">
            <template #header>
                Semana 2: Rendering y Directivas
            </template>
        </b-jumbotron>

        <!-- Línea divisora -->

        <hr class="my-4">

        <!-- Espacio -->

        <hr size="1" />

        <b-container style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 20px; text-align: justify; background-color: #65B8E6">
            
            <hr size="1" />
            
            <center><h2><b>DOM</b></h2></center>

            <hr size="1" />
            
            <p>
                En esta semana aprendimos a utilizar el DOM (Document Object Model – 
                Modelo de Objeto de Documento) con Vue, el DOM es una interfaz de programación 
                para los archivos de tipo HTML y XML. El DOM es el encargado de modelizar tanto 
                la ventana del navegador como el historial del documento o la página web, así 
                como todos los documentos que se pueden tener dentro de la página. 
            </p>

            <hr size="1" />

            <p>
                VueJS nos ofrece una opción para poder interactuar con el DOM, que sería el rendering, 
                en esta opción se tiene Vista HTML, Estado de Datos JS y la introducción e interacción 
                del usuario con la vista. La vista es la que se encarga de decirle al estado que se 
                encuentran cambios para lo cual el estado responde a esto enviando una nueva vista. 
                El estado también es el encargado de decirle a las vistas como y cuando deben copilarse 
                y cual es el resultado que deben tener mediante la función Render.
            </p>

            <hr size="1" />

            <p>
                El render es el encargado de mostrar los datos dinámicamente cuando existe la posibilidad 
                de mostrarlo, en este caso, cuando el servidor de la aplicación está levantado. 
            </p>

            <center><h2><b>Directivas</b></h2></center>

            <p>
                Las directivas de Vue son atributos que son colocados en las etiquetas HTML, y son creadas 
                a partir v-, entre algunas directivas se encuentran v-for, v-on, entre muchas otras. Las 
                directivas nos permiten realizar acciones de forma dinámica, como bucles, estructuras 
                condiciones, etc. Que no se permiten realiza en HTML en sí, pero Vue nos da la opción de 
                implementarlas por medio de las etiquetas.
            </p>

            <hr size="1" />

            <p>
                Las directivas están formadas por distintas partes, entre ellas están: 
            </p>

            <hr size="1" />

            <ul>
                <li>
                    Directiva: el nombre de la directiva.
                </li>
                <hr size="1" />
                <li>
                    Argumento: en algunas directivas indica un parámetro.
                </li>
                <hr size="1" />
                <li>
                    Modificador: modifica el comportamiento de la directiva.
                </li>
                <hr size="1" />
                <li>
                    Valor: en algunas directivas es requerido establecer un valor y se escribe como el valor de un atributo HTML.
                </li>
            </ul>

            <hr size="1" />

            <p>
                Las directivas se dividen por clases, entre ellas están:
            </p>

            <ul>
                <li>
                    Directivas básicas: v-pre, v-once, etc.
                </li>
                <li>
                    Directivas condicionales: v-show, v-if, v-else, etc.
                </li>
                <li>
                    Directivas de bucles: v-for.
                </li>
                <li>
                    Directivas avanzadas: v-bind, v-on, etc.
                </li>
                <li>
                    Directivas personalizadas: el, vm, arg, etc. Vue nos permite registrar directivas personalizadas, 
                    estas proporcionan un mecanismo para asignar cambios de datos al comportamiento arbitrario del DOM.
                </li>
            </ul>

            <hr size="1" />

            <p>
                La directiva for es muy útil, ya que nos permite crear bucles en archivos HTML, lo cual nos permite 
                crear listas en este con un array sin necesidad de escribir todos los datos de forma ordenada, esto 
                se logra agregando v-for con el elemento y un índice numérico dentro de un div.
            </p>

            <hr size="1" />


            <h2><b>Bibliografía:</b></h2>

            <hr size="1" />

            <ul>
                <li>
                    Álvarez, M. A. (s.f.). desarrolloweb. Obtenido de https://desarrolloweb.com/articulos/que-es-el-dom.html
                </li>
            </ul>

            <hr size="1" />

        </b-container>

        <hr size="1" />

    </div>
</template>

<script>
    export default {
    name: "SemDosComponent",
    };
</script>