<template>
    <div>
        <!-- Titulo del componente -->
        <b-jumbotron  style="background-color: #69EAF0">
            <template #header>
                Semana 12: REST API con Laravel
            </template>
        </b-jumbotron>

        <!-- Línea divisora -->

        <hr class="my-4">

        <!-- Espacio -->

        <hr size="1" />

        <b-container style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 20px; text-align: justify; background-color: #65B8E6">

            <hr size="1" />
            
            <p>
                API de REST es una interfaz de programación de aplicaciones (API Web) que es ajustable a los límites de
                la arquitectura y que permite la interacción con los servicios web de RESTful. REST significa transferencia 
                de estado representacional y es un estilo arquitectónico para la comunicación de red las aplicaciones basada 
                en un protocolo sin estado para la interacción, generalmente los protocolos son HTTP. 
            </p>

            <hr size="1" />

            <p>
                Las API permiten interactuar con una computadora o un sistema para lograr obtener datos o ejecutar una función 
                de modo que el sistema comprenda la solicitud hecha y así cumplirla.
            </p>

            <hr size="1" />

            <p>
                Los verbos HTTP representan acciones que pueden utilizarse en las API RESTful, y marcan puntos finales 
                sobre los recursos en los que se actúan. Estos verbos son: “GET”, “POST”, “PUT” y “DELETE”. Estos son 
                utilizados para crear los crud utilizando las API y una base de datos, ambas tienen que estar conectadas 
                a la aplicación para que estas funcionen sin errores. Los usuarios pueden enviar las búsquedas a la base 
                de datos usando estos verbos y así esperar una respuesta.
            </p>

            <hr size="1" />

            <h2><b>Bibliografía:</b></h2>

            <hr size="1" />

            <ul>
                <li>
                  Young. (1995). Red Hat. Obtenido de https://www.redhat.com/es/topics/api/what-is-a-rest-api
                </li>
            </ul>

            <hr size="1" />

        </b-container>

        <hr size="1" />

    </div>
</template>

<script>
    export default {
    name: "SemDoceComponent",
    };
</script>