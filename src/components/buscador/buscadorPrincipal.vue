<script setup lang="ts">
import { filteredProductos, filtrarProductos } from '@/utils/buscador';
import { cards } from '@/utils/productos';
import { ref, onMounted } from 'vue'
const inputValue = ref('');
const cards = ref([]);
const filteredProductos = ref([]);

const filtrarProductos = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (!target || target.tagName !== 'INPUT') {
        console.error('El evento no proviene de un elemento <input>');
        return;
    }

    const input = target.value.toLowerCase();
    console.log('Buscando productos con:', input);

    if (!input) {
        filteredProductos.value = [...cards.value];
        return;
    }

    filteredProductos.value = cards.value.filter((producto) =>
        (producto.name?.toLowerCase().includes(input)) ||
        (producto.categoria?.toLowerCase().includes(input))
    );

    console.log('Resultado del filtro:', filteredProductos.value);
};

const productoServicio = new ProductoServicio();

const filtrar = (event: Event) => {
    inputValue.value = (event.target as HTMLInputElement).value;
    filtrarProductos(cards.value, inputValue.value);
};

onMounted(() => {
    filteredProductos.value = [...cards.value];
});


const obtenerDatos = async () => {
    const producto: Productos[] = await productoServicio.obtenerProductos()
    console.log(producto);
    console.log(filtrarProductos.value.length);

}

console.log('Datos de cards:', cards.value);

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
                    {{ producto.name }}
                </li>
            </ul>
        </div>
    </div>   
</template>

<style>
@import '/src/assets/buscador-subVista.css'
</style>