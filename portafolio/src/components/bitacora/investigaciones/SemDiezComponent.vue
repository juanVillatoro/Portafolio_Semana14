<template>
    <div>
        <!-- Titulo del componente -->
        <b-jumbotron  style="background-color: #69EAF0">
            <template #header>
                Semana 10: Sistema de rutas y controladores.
            </template>
        </b-jumbotron>

        <!-- Línea divisora -->

        <hr class="my-4">

        <!-- Espacio -->

        <hr size="1" />

        <b-container style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 20px; text-align: justify; background-color: #65B8E6">

            <hr size="1" />
            
            <p>
                Lo primero que haremos será ejecutar el comando “php artisan serve” para levantar el servidor 
                y abrimos la ruta que nos brinda, lo cual nos llevará a la ruta “localhost:8000”. 
            </p>

            <hr size="1" />

            <p>
                Para definir las rutas en Laravel se deben usar los archivos que están en la carpeta “routes”, 
                el archivo “api.php” es donde definimos todas las rutas APIs que puede tener nuestra aplicación. 
                El archivo “channels.php” se utiliza para definir canales que transmiten eventos, como el de 
                notificaciones en tiempo real. El archivo “console.php” es donde definimos los comandos de consola 
                para interactuar con el usuario y por último tenemos el archivo “web.php” donde se definen las rutas 
                de nuestra página web para ingresarse en el navegador.
            </p>

            <hr size="1" />

            <p>
                El archivo que usaremos será el “web.php” y creamos las rutas comenzando con “/”. Dependiendo de lo 
                que se desee hacer con esa ruta así se modificará. Luego para crear un controlador que contendrá todas 
                las funciones del crud usamos el comando “php artisan make:controller ControladorNombre”, ya con este 
                archivo creado agregamos las funciones del crud y agregarlas a las rutas que creamos hace poco.
            </p>

            <hr size="1" />

            <h2><b>Bibliografía:</b></h2>

            <hr size="1" />

            <ul>
                <li>
                   Anónimo. (2018). Laravel Tip. Obtenido de https://www.laraveltip.com/que-son-los-routes-en-laravel/#:~:text=Los%20Routes%20en%20Laravel%20son,el%20navegador%2C%20por%20ejemplo).
                </li>
            </ul>

            <hr size="1" />

        </b-container>

        <hr size="1" />

    </div>
</template>

<script>
    export default {
    name: "SemDiezComponent",
    };
</script>