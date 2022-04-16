<template>
    <div>
        <!-- Titulo del componente -->
        <b-jumbotron  style="background-color: #69EAF0">
            <template #header>
                Contenidos de la asignatura
            </template>
        </b-jumbotron>

        <hr size="1" />
        
        <h1>Programación Computacional IV</h1>

        <!-- Línea divisora -->

        <hr class="my-4">

        <!-- Espacio -->

        <hr size="1" />

        <!-- Contenido del componente -->
        <b-container style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 20px; text-align: justify">

            <h4>UNIDAD I Desarrollo Frontend con librerías del lado del cliente</h4>

            <b-list-group>
                <b-list-group-item>1.1 Introducción a la librería Vue.js y Bootstrap</b-list-group-item>
                <b-list-group-item>1.2 Rendering Declarativo y Manipulación de DOM</b-list-group-item>
                <b-list-group-item>1.3 Sistema de Componentes</b-list-group-item>
            </b-list-group>

            <!-- Espacio entre contenido -->
            <hr size="1" />

            <h4>UNIDAD II Desarrollo Backend con el Framework del lado del servidor y base de datos</h4>
            <b-list-group>
                <b-list-group-item>2.1 Introducción al desarrollo con PHP</b-list-group-item>
                <b-list-group-item>2.2 Instalación y configuración del servidor Web</b-list-group-item>
                <b-list-group-item>2.3 Introducción a Laravel</b-list-group-item>
                <b-list-group-item>2.4 Conectando a una BD MySQL con Laravel</b-list-group-item>
                <b-list-group-item>2.5 CRUD con Laravel</b-list-group-item>
                <b-list-group-item>2.6 Formularios con Laravel</b-list-group-item>
                <b-list-group-item>2.7 Sistemas de Rutas y controladores</b-list-group-item>
                <b-list-group-item>2.8 Validación de datos (rutas, vistas, formularios y controladores)</b-list-group-item>
                <b-list-group-item>2.9 Blade: sistema de plantillas avanzado</b-list-group-item>
                <b-list-group-item>2.10 Trabajando con Laravel/UI</b-list-group-item>
            </b-list-group>

        </b-container>

        <!-- Espacio entre contenido -->
        <hr size="1" />
        
        <!-- Imagen -->
        <div alt="Final">
        <b-img src="https://www.contramuro.com/wp-content/uploads/2020/08/2551513-1000x500.jpg"></b-img>
        </div>

        <hr size="1" />
    </div>
</template>

<script>
    export default {
    name: "ContenidosComponent",
    };
</script>