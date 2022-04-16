<template>
    <div>
        <!-- Titulo del componente -->
        <b-jumbotron  style="background-color: #69EAF0">
            <template #header>
                Portafolio desarrollado en sitio web
            </template>
        </b-jumbotron>
    
        <hr class="my-4">

        <br>
        <!-- Contenido del componente -->
        <b-container style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 20px; text-align: justify" >

            <p>
            Para esta actividad se solicitó que el estudiante realizara una página web a mano donde incluyera 
            todo lo que ha realizado a lo largo del ciclo, para esto debe de crear una app con el framework 
            que desee y desarrollarla con los conocimientos que ha ido obteniendo a lo largo del tiempo. 
            </p>

            <!-- Espacio entre contenido -->
            <hr size="1" />

            <p>
            En mi caso decidí usar Vue.js porque considero que tiene una estructura más simple y sencilla de utilizar. 
            Entonces luego de crear la aplicación se deben agregar todos los contenidos que se solicitan, entre ellos 
            tenemos la descripción de la asignatura, Carta de presentación, bitácora estudiantil, entre muchos otros 
            apartados más. Cada contenido debe tener su propio apartado para que la página web tenga una buena 
            distribución y se vea ordenada.
            </p>

        </b-container>

        <hr size="1" />

        <!-- Imagen -->
        <div alt="Final">
        <b-img src="https://disenowebakus.net/imagenes/articulos/elementos-sitio-web.jpg"></b-img>
        </div>

    </div>
</template>

<script>
    export default {
    name: "IntroduccionComponent",
    };
</script>