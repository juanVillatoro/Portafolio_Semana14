<template>
    <div>
        <br>
        <tareas-component/>
    </div>
</template>

<script>
import TareasComponent from '@/components/bitacora/TareasComponent.vue'

export default {
    name: 'TareasView',
    components: { TareasComponent }
}
</script>