<template>
    <div>
        <!-- Titulo del componente -->
        <b-jumbotron  style="background-color: #69EAF0">
            <template #header>
                Semana 5: Comunicación entre componentes
            </template>
        </b-jumbotron>

        <!-- Línea divisora -->

        <hr class="my-4">

        <!-- Espacio -->

        <hr size="1" />

        <b-container style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 20px; text-align: justify; background-color: #65B8E6">

            <hr size="1" />
            
            <p>
                Vue.js tiene la capacidad de enviar datos entre componentes padres hacia algún componente 
                hijo haciendo uso de las propiedades “props” y también permite que el componente hijo pueda 
                enviar datos hacia el componente padre haciendo uso de los eventos “$emit”. 
            </p>

            <hr size="1" />

            <p>
                Los datos pueden ser enviados mediante el bus de eventos, este bus se trata sobre una instancia 
                de Vue, esta puede usarse para emitir y detectar los eventos, también puede tener cualquier 
                propiedad de cualquier otra instancia, lo cual la hace muy útil.
            </p>

            <hr size="1" />

            <p>
                El envío de datos entre componentes resulta muy útil a la hora de realizar alguna página web 
                que requiera el uso de diferentes pestañas y que los cambios que realice el usuario se guarden, 
                un ejemplo de página web en el que se puede utilizar la comunicación entre componentes es una 
                página de compra y venta de productos. En resumen, la comunicación directa padre-hijo, esta está 
                basada en las estrictas relaciones que tienen los padres hacia sus hijos o hijos hacia padres.
            </p>

            <hr size="1" />

            <h2><b>Bibliografía:</b></h2>

            <hr size="1" />

            <ul>
                <li>
                    Ta'eed, C. (Enero de 2006). Envatotuts+. Obtenido de https://code.tutsplus.com/es/tutorials/design-patterns-for-communication-between-vuejs-component--cms-32354
                </li>
            </ul>

            <hr size="1" />

        </b-container>

        <hr size="1" />

    </div>
</template>

<script>
    export default {
    name: "SemCincoComponent",
    };
</script>