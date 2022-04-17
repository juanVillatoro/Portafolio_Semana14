<template>
    <div>
        <!-- Titulo del componente -->
        <b-jumbotron  style="background-color: #69EAF0">
            <template #header>
                Semana 3: Eventos – Clases y estilos en tiempo real
            </template>
        </b-jumbotron>

        <!-- Línea divisora -->

        <hr class="my-4">

        <!-- Espacio -->

        <hr size="1" />

        <b-container style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 20px; text-align: justify; background-color: #65B8E6">
            
            <hr size="1" />
            
            <center><h2><b>Eventos</b></h2></center>

            <hr size="1" />
            
            <p>
                Los eventos son el resultado de la interacción del usuario con los componentes de la 
                aplicación creada. Un evento es la acción del usuario mediante el cual se le permiten 
                realizar procesos, como por ejemplo el cambiar un valor en algún formulario o abrir otra 
                pestaña al tocar un botón.
            </p>

            <hr size="1" />

            <p>
                Estos eventos son capturados mediante los manejadores de estos. El proceso de cada evento 
                e realiza mediante funciones del lenguaje que estemos usando, para nuestro caso sería con 
                Javascript, las cuales son llamadas mediante los manejadores de eventos. Las directivas 
                pueden estar ligadas a estos eventos, una que puede ser utilizada para escuchar los eventos 
                del DOM es la directiva v-on. La directiva “v-on” puede ser utilizada para escuchar los 
                eventos del DOM y ejecutar la mayoría de JavaScript cuando estos se activan, aunque también 
                se le pueden agregar los nombres del método deseado para llamarlo, así también podemos usar 
                métodos en una declaración de JavaScript en la misma línea. 
            </p>

            <hr size="1" />

            <p>
                Vue nos brinda distintos modificadores de eventos que formen parte del DOM, los cuales 
                pueden son invocados mediante el suflijo indicado por un punto, algunos ejemplos de estos 
                modificadores son: “.stop”, “.prevent”, “.capture”, “.self”, “.once”, etc.
            </p>

            <hr size="1" />

            <p>
                También existen los modificadores de teclas, que se utilizan para verificar las teclas más 
                usadas, por lo que Vue proporciona alias para estas teclas, algunas de ellas son: “.enter”, 
                “.tab”, “.delete”, “.space”, “.esc”, entre otras. 
            </p>

            <hr size="1" />

            <center><h2><b>Clases y estilos</b></h2></center>

            <hr size="1" />

            <p>
                Con Vue podemos crear clases y estilos reactivos mediante la etiqueta Binding, que puede usarse 
                para Class y Style. Se pueden definir las clases al igual que con el atributo de class, pero en 
                este caso se usan las comillas simples dentro de las dobles, también se pueden aplicar muchos 
                estilos de clases mediante corchetes, comas y comillas simples, tal que así “[‘bg warning’, 
                ‘btn’]”. Para el style se utiliza de la misma forma con comillas simples, pero primero se debe 
                agregar el nombre de la propiedad como CSS seguido del valor que le queramos dar dentro de llaves, 
                como por ejemplo: “{fontSize: ‘10px’}”, si se quiere agregar más propiedad solo se deben dividir 
                por comas, por ejemplo: “{color: value, background-color : ‘white’}”.
            </p>

            <hr size="1" />

            <h2><b>Bibliografía:</b></h2>

            <hr size="1" />

            <ul>
                <li>
                    Vuejs. (s.f.). Obtenido de https://es.vuejs.org/v2/guide/events.html
                </li>
            </ul>

            <hr size="1" />

        </b-container>

        <hr size="1" />

    </div>
</template>

<script>
    export default {
    name: "SemTresComponent",
    };
</script>