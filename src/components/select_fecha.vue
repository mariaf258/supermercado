<script setup lang="ts">
import { defineComponent, ref } from "vue";

const buscarCompra = () => {
        if (fechaSeleccionada.value) {
            console.log(`Buscando compras para la fecha: ${fechaSeleccionada.value}`);
            // Aquí iría la llamada a la API o la lógica para buscar en la base de datos.
        } else {
            alert("Por favor, selecciona una fecha.");
        }
};

    return { fechaSeleccionada, buscarCompra };

</script>

<template>
    <div class="fecha">
        <h1>Buscar Compra por Fecha</h1>
        <input type="date" v-model="fechaSeleccionada" />
        <button @click="buscarCompra">Buscar Compra</button>
    </div>
</template>

<style>
@import '/src/assets/select_fecha.css'
</style>