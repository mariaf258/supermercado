<script setup lang="ts">
import { ref } from 'vue';

const filteredProductos = ref([]);
const filtrarProductos = (productos: any[], query: string) => {
    if (!query) {
        filteredProductos.value = [...productos];
        return;
    }

    const input = query.toLowerCase();
    filteredProductos.value = productos.filter((producto) =>
        producto.name?.toLowerCase().includes(input) ||
        producto.categoria?.toLowerCase().includes(input)
    );
};

</script>

<template>
    <div class="search-container-1">
        <div class="search-box-1">
            
            <input 
            @input="filtrarProductos" 
            type="text" 
            id="searchInput-1" 
            placeholder="Buscar..." 
            />
            <img src="../../.png" alt="search" class="search-icon-1" />
        </div>
        <div id="results" class="results-1">
            <ul>
                <li v-for="producto in filteredProductos" :key="producto.id">
                    {{ producto.name }}
                </li>
            </ul>
        </div>
    </div>   
</template>

<style>
@import '/src/assets/buscador-subVista.css'
</style>