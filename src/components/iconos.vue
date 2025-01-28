<script setup lang="ts">
import { Productos } from '@/utils/interfaces/interfaceProductos';
import { ref, onMounted } from 'vue'

const productos = ref([])
const guardarProductos = ref<Productos[]>([])

const props = defineProps(["product"])
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

function guardarProductoEnFavoritos() {

    const productoExistente = guardarProductos.value.find((item: any) => item.id === props.product?.id);
    
    console.log(props.product);

    if (productoExistente) {
        alert('Este producto ya está en tus favoritos.');
        return;
    }
    guardarProductos.value.push(props.product);

    localStorage.setItem('guardarProductos', JSON.stringify(guardarProductos.value));

    console.log('Productos guardados en localStorage:', localStorage.getItem('guardarProductos')); 
    alert('Producto agregado a favoritos.');
}

function guardarEnCarritoCompras() {
    const productoExistente = guardarProductos.value.find((item: any) => item.id === props.product?.id);
    
    console.log(props.product);
    
    
    if (productoExistente) {
        alert('Este producto ya está en tu carrito de compras.');
        return;
    }

    guardarProductos.value.push(props.product);

    localStorage.setItem('guardarProductos', JSON.stringify(guardarProductos.value));

    console.log('Productos guardados en localStorage:', localStorage.getItem('guardarProductos')); 
    alert('Producto agregado a tu carrito de compras.');
}



</script>

<template>
    <div class="options">
        <button @click="guardarProductoEnFavoritos" class="icon-button">
            <img src="../../public/bookmark-color.png" alt="bookmark-color" />
        </button>
            
        <button @click="guardarEnCarritoCompras" class="icon-button">
            <img src="../../public/add-cart-color.png" alt="add-cart-color" />
        </button>
    </div>
</template>

<style>
@import '/src/assets/iconos.css'
</style>