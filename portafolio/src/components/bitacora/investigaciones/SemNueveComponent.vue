<template>
    <div>
        <!-- Titulo del componente -->
        <b-jumbotron  style="background-color: #69EAF0">
            <template #header>
                Semana 9: CRUD con Laravel
            </template>
        </b-jumbotron>

        <!-- Línea divisora -->

        <hr class="my-4">

        <!-- Espacio -->

        <hr size="1" />

        <b-container style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 20px; text-align: justify; background-color: #65B8E6">

            <hr size="1" />
            
            <center><h2><b>¿Cómo crear un CRUD?</b></h2></center>
            
            <hr size="1" />
            
            <p>
                Tenemos que crear la tabla que utilizaremos haciendo uso del comando 
                “php artisan make:migration nombre –table=nombre --create” luego de ello modificamos 
                los campos para agregar los que nosotros queramos, luego de esto debemos ejecutar el 
                comando “php artisan migrate” para guardar los cambios en la base de datos que previamente 
                creamos y agregamos en el archivo “.env”.
            </p>

            <hr size="1" />

            <p>
                 Luego debemos irnos a la carpeta “routes” y agregar la ruta principal que utilizaremos. 
                 Las rutas deben corresponder cada una para crear, recuperar, actualizar y eliminar.
            </p>

            <hr size="1" />

            <p>
                Luego de esto debemos crear el controlador con el comando 
                “php artisan make:controller –resource –model=Nombre”, luego, en el archivo que se creó 
                debemos modificarlo según las funciones del crud que queramos utilizar. Luego de esto 
                revisamos las carpetas que se crearon, una es “Nombre” y otra llamada “Layouts”, en la 
                carpeta “Nombre” creamos cuatro archivos, créate, edit, index y show, cada uno con su 
                respectivo código dependiendo de las funciones que usaremos. Luego de todo esto, ejecutamos 
                la aplicación con el comando “php artisan serve” y vemos si funciona el crud completo.
            </p>

            <hr size="1" />

            <h2><b>Bibliografía:</b></h2>

            <hr size="1" />

            <ul>
                <li>
                   Hansson, D. H. (2016). DEV. Obtenido de https://dev.to/kingsconsult/laravel-8-crud-bi9
                </li>
            </ul>

            <hr size="1" />

        </b-container>

        <hr size="1" />

    </div>
</template>

<script>
    export default {
    name: "SemNueveComponent",
    };
</script>