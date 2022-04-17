<template>
    <div>
        <!-- Titulo del componente -->
        <b-jumbotron  style="background-color: #69EAF0">
            <template #header>
                Semana 7: Introducción al desarrollo con PHP
            </template>
        </b-jumbotron>

        <!-- Línea divisora -->

        <hr class="my-4">

        <!-- Espacio -->

        <hr size="1" />

        <b-container style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 20px; text-align: justify; background-color: #65B8E6">

            <hr size="1" />
            
            <p>
                PHP es un lenguaje de programación con código abierto, con esta expresión se conoce al software 
                o lenguaje de programación que puede ser usado libremente sin necesidad de comisiones, una 
                característica de estos software es que se puede acceder al código fuente. PHP es muy recomendado 
                para el desarrollo de páginas web y puede ser utilizado en archivos HTML.
            </p>

            <hr size="1" />

            <p>
                PHP funciona por medio de una ruta para permitir localizar la página web que estemos desarrollando, 
                este enlace debe ser abierto desde el navegador de nuestra preferencia, funciona por medio de un 
                servidor web, que es la maquina donde se almacena la página web, el servidor de PHP interpreta la 
                página donde utilizamos PHP y envía al navegador del usuario un documento compilado con HTML. 
                Algo bueno que tiene PHP es que es muy fácil de usar para los principiantes en la programación, 
                pero también contiene características muy avanzadas para los profesionales.
            </p>

            <hr size="1" />

            <p>
                PHP permite la ejecución de scripts con el servidor aunque también pueden ser ejecutados mediante la 
                línea de comandos.
            </p>

            <hr size="1" />

            <p>
                Su principal ventaja es su curva de aprendizaje, ya que es muy rápida en comparación a otros lenguajes 
                de programación. Para poder ejecutar PHP se necesita de un servidor y una conexión hacia un cliente, 
                ya que el cliente hace las peticiones al servidor y este ejecuta esa información y se la devuelve al 
                cliente.
            </p>

            <hr size="1" />

            <p>
                Para ejecutar ficheros PHP se necesita de las etiquetas: “<? phP Se utiliza para indicar el inicio de 
                la etiqueta, indica el final de la etiqueta ?>”. Las variables se representan mediante un signo de dólar 
                luego le sigue el nombre de la variable, como por ejemplo “$num = 14”.
            </p>

            <hr size="1" />

            <p>
                Con PHP no es obligatorio indicar el tipo de variable, pero siempre mantiene los tipos que serían: integer, 
                float, srtring y boolean. También los operadores aritméticos son: “-, +, *, /, %, **”, entre otra cantidad 
                de distintos operadores.
            </p>

            <hr size="1" />

            <h2><b>Bibliografía:</b></h2>

            <hr size="1" />

            <ul>
                <li>
                    Lerdorf, R. (2001). Php.net. Obtenido de https://www.php.net/manual/es/intro-whatis.php
                </li>
            </ul>

            <hr size="1" />

        </b-container>

        <hr size="1" />

    </div>
</template>

<script>
    export default {
    name: "SemSieteComponent",
    };
</script>