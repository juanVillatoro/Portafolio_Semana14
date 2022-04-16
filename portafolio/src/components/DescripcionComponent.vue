<template>
    <div>
        <!-- Titulo del componente -->
        <b-jumbotron  style="background-color: #69EAF0">
            <template #header>
                Descripción de la asignatura
            </template>
        </b-jumbotron>

        <hr size="1" />
        
        <h1>Programación Computacional IV</h1>

        <!-- Línea divisora -->
        <hr class="my-4">

        <!-- Espacio -->
        <hr size="1" />

        <br>
        <!-- Contenido del componente -->
        <b-container style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 20px; text-align: justify" >

            <p>
            Los estudiantes comprenden y aplican los lenguajes y tecnologías para el desarrollo de aplicaciones para computadoras, 
            dispositivos móviles; sin  embargo, aún no conocen la integración de los elementos de  desarrollo de sistemas para la Web 
            que les permita crear soluciones profesionales en entornos distribuidos. Se pretende que, en la asignatura, los estudiantes 
            adquieran las competencias para desarrollar programas orientados a entornos Web. 
            </p>

        </b-container>

        <!-- Espacio entre contenido -->
        <hr size="1" />
        
        <!-- Imagen -->
        <div alt="Final">
        <b-img src="https://utel.edu.mx/blog/wp-content/uploads/2014/02/shutterstock_148972376.jpg"></b-img>
        </div>

        <hr size="1" />
    </div>
</template>

<script>
    export default {
    name: "DescripcionComponent",
    };
</script>