<template>
    <div>
        <!-- Titulo del componente -->
        <b-jumbotron  style="background-color: #69EAF0">
            <template #header>
                Semana 11: Validación de datos
            </template>
        </b-jumbotron>

        <!-- Línea divisora -->

        <hr class="my-4">

        <!-- Espacio -->

        <hr size="1" />

        <b-container style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 20px; text-align: justify; background-color: #65B8E6">

            <hr size="1" />

            <center><h2><b>Validación en Laravel</b></h2></center>

            <hr size="1" />
            
            <p>
                Existen diferentes formas para validar datos en una aplicación para poder mejorar la seguridad de 
                nuestro sistema y así evitar ataques cibernéticos, algunos de los tipos de validación son: Validación 
                del lado del cliente, validación a nivel de base de datos y validación de formularios. 
            </p>

            <hr size="1" />

            <center><h2><b>Validación del lado del cliente</b></h2></center>

            <hr size="1" />

            <p>
                Se puede agregar un atributo en algún formulario llamado “required” y se utiliza para forzar al usuario 
                a rellenar lo que se le pide en el formulario en cuestión, se trata de un atributo booleano y puede 
                aplicarse a cualquier tipo de input, ya sea text, email, password, etc. 
            </p>

            <hr size="1" />

            <center><h2><b>Validación con el atributo pattern</b></h2></center>

            <hr size="1" />

            <p>
                El atributo pattern es otro atributo que podemos agregar en los input que seleccionemos, y se trata de 
                un modelo establecido por nosotros que debe de seguirse, podemos validar longitud, formato, tipo de dato, 
                entre otros. Un ejemplo sería “^503\d{8}$”, que dice que primero debe ir el numero 503 seguido de 8 números 
                más.
            </p>

            <hr size="1" />

            <hr size="1" />

            <center><h2><b>Validación del lado del servidor</b></h2></center>

            <hr size="1" />

            <p>
                Para este caso, así como en el anterior punto se utilizan expresiones regulares para validar las rutas que 
                visitamos en la barra de búsqueda de nuestra aplicación, si no se cumple la condición arroja una página de 
                error 404.
            </p>

            <hr size="1" />

            <h2><b>Bibliografía:</b></h2>

            <hr size="1" />

            <ul>
                <li>
                  Otwell, T. (2014). LaravelCode. Obtenido de https://www.laravelcode.com/post/laravel-livewire-crud-tutorial
                </li>
            </ul>

            <hr size="1" />

        </b-container>

        <hr size="1" />

    </div>
</template>

<script>
    export default {
    name: "SemOnceComponent",
    };
</script>