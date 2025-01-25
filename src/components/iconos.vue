<script setup lang="ts">
import { Productos } from '@/utils/interfaces/interfaceProductos';
import { ref, onMounted } from 'vue'

const productos = ref([])
const guardarProductos = ref<Productos[]>([])


function buttonsVistas() {
    try {
        const productos_guardados = localStorage.getItem('guardarProductos');
        if (productos_guardados) {
            guardarProductos.value = JSON.parse(productos_guardados);
            console.log('Productos guardados cargados:', guardarProductos.value); 
        }
    } catch (error) {
        console.error('Error al cargar datos desde localStorage:', error);
    }
}


onMounted(() => {
    const useGuardarProductos = localStorage.getItem('guardarProductos');
    if (useGuardarProductos) {
        guardarProductos.value = JSON.parse(useGuardarProductos);
    }
});

function guardarProductoEnFavoritos(producto: any) {
    const productoExistente = guardarProductos.value.find((item: any) => item.id === producto.id);
    if (productoExistente) {
        alert('Este producto ya está en tus favoritos.');
        return;
    }

    guardarProductos.value.push(producto);

    localStorage.setItem('guardarProductos', JSON.stringify(guardarProductos.value));

    console.log('Productos guardados en localStorage:', localStorage.getItem('guardarProductos')); 
    alert('Producto agregado a favoritos.');
}



</script>

<template>
    <div class="options">
        <button @click="guardarProductoEnFavoritos" class="icon-button">
            <img src="../../public/bookmark-color.png" alt="bookmark-color" />
        </button>
            
        <button @click="productosAComprar" class="icon-button">
            <img src="../../public/add-cart-color.png" alt="add-cart-color" />
        </button>
    </div>
</template>

<style>
@import '/src/assets/iconos.css'
</style>