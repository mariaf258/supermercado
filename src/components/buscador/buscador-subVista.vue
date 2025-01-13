s<script setup lang="ts">
import { filteredProductos, filtrarProductos } from '@/utils/buscador';
import { cards } from '@/utils/productos';
import { ref, onMounted } from 'vue'
const inputValue = ref('');

const filtrar = (event: Event) => {
    inputValue.value = (event.target as HTMLInputElement).value;
    filtrarProductos(cards.value, inputValue.value);
};

onMounted(() => {
    filteredProductos.value = [...cards.value];
});
</script>

<template>
    <div class="search-container-1">
        <div class="search-box-1">
            
            <input 
            @input="filtrar" 
            type="text" 
            id="searchInput-1" 
            placeholder="Buscar..." 
            />
            <img src="../../.png" alt="search" class="search-icon-1" />
        </div>
        <div id="results" class="results-1">
            <ul>
                <li v-for="producto in filteredProductos" :key="producto.id">
                    {{ producto.name }} - {{ producto.description }}
                </li>
            </ul>
        </div>
    </div>   
</template>

<style>
@import '/src/assets/buscador-subVista.css'
</style>
