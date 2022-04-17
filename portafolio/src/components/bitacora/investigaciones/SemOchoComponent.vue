<template>
    <div>
        <!-- Titulo del componente -->
        <b-jumbotron  style="background-color: #69EAF0">
            <template #header>
                Semana 8: Introducción a Laravel | Conexión de base de datos con Laravel
            </template>
        </b-jumbotron>

        <!-- Línea divisora -->

        <hr class="my-4">

        <!-- Espacio -->

        <hr size="1" />

        <b-container style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 20px; text-align: justify; background-color: #65B8E6">

            <hr size="1" />
            
            <center><h2><b>¿Qué es Laravel?</b></h2></center>
            
            <hr size="1" />
            
            <p>
                Laravel es un Framework al igual que Vue.js, este posee una sintaxis elegante para el desarrollo web. 
                Un Framework nos proporciona un punto de partida para crear aplicaciones web. Laravel nos proporciona 
                funciones poderosas como la capa de abstracción de bases de datos.
            </p>

            <hr size="1" />

            <p>
                Laravel cuenta con las siguientes características: 
            </p>

            <hr size="1" />

            <!-- Lista -->

            <ul>
                <li>
                    Un sistema de rutas mediante las cuales es sencillo crear y mantener cualquier tipo de URLs 
                    amistosas a los usuarios.
                </li>
                <li>
                    Un ORM potente pero sencillo de usar con el cual podemos tratar los datos de la base de datos.
                </li>
                <li>
                    Muchas configuraciones para el envío de email con diversos proveedores.
                </li>
                <li>
                    Un sistema para el envio de notificaciones a usuarios, usando el email.
                </li>
                <li>
                    Gestión de sesiones.
                </li>
                <li>
                    La posibilidad de acceder a datos en tiempo real y recibir notificaciones cuando se 
                    alteren en la base de datos.
                </li>
            </ul>

            <hr size="1" />

            <p>
                Una de las principales características que han llevado al éxito a Laravel es su capacidad para convertirse 
                en una industria de generación de servicios relacionados con el framework. Laravel usa los siguientes 
                servicios y herramientas para el framework: Forge, es un sistema para la administración de servidores. 
                Vapor, este permite desplegar las aplicaciones de Laravel sin necesidad de poseer un servidor. Envoyer, 
                permite la integración de las aplicaciones Laravel realizando un push al repositorio, con esto se despliega 
                en su nueva versión sin cancelar el servidor, entre otros.
            </p>

            <hr size="1" />

            <p>
                Una gran ventaja de Laravel es la gran cantidad de opciones que ofrece para crear las aplicaciones web, 
                por lo que cualquier desarrollador puede utilizar las que le sean de conveniencia. 
            </p>

            <hr size="1" />

            <p>
                Entre estas opciones están: 
            </p>

            <hr size="1" />

            <ul>
                <li>
                    Servidor interno: esta es la opción más básica que se puede utilizar ejecutando “php artisan serve”.
                </li>
                <li>
                    Laravel Valet: esta función solo está disponible para los usuarios de Mac que les permiten crear 
                    virtual hosts usando comandos de consola.
                </li>
                <li>
                    Homestead: esta opción es la más avanzada que posee este framework, y consiste en virtualización 
                    para obtener un entorno profesional adaptable a las condiciones del servidor.
                </li>
            </ul>

            <hr size="1" />

            <p>
                Laravel utiliza Composer para el manejo de sus dependencias, el framework utiliza las colecciones de 
                paquetes para agregar funciones a la aplicación. Por lo cual es requerido tener instalado Composer 
                para el uso de Laravel.
            </p>

            <hr size="1" />

            <p>
                Para conectar la aplicación con alguna base de datos en necesario modificar el archivo “.env” y modificar 
                el puerto para conectar con el que utilizamos, también hay que agregar el nombre de nuestra base de datos 
                en la parte de database. La base de datos ya tiene que estar creada para poder hacer el migrate.
            </p>

            <hr size="1" />

            <h2><b>Bibliografía:</b></h2>

            <hr size="1" />

            <ul>
                <li>
                    Otwell, T. (2011). Laravel.com. Obtenido de https://laravel.com/docs/9.x/database
                </li>
            </ul>

            <hr size="1" />

        </b-container>

        <hr size="1" />

    </div>
</template>

<script>
    export default {
    name: "SemOchoComponent",
    };
</script>