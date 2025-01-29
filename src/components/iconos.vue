<script setup lang="ts">
import { Productos } from '@/utils/interfaces/interfaceProductos';
import { ref, onMounted } from 'vue'

const guardarProductos = ref<Productos[]>([]) 
const carritoCompras = ref<Productos[]>([]) 

const props = defineProps(["product"])

onMounted(() => {
    const favoritos = localStorage.getItem('guardarProductos');
    if (favoritos) {
        guardarProductos.value = JSON.parse(favoritos);
    }

    const carrito = localStorage.getItem('carritoCompras');
    if (carrito) {
        carritoCompras.value = JSON.parse(carrito);
    }
});

function guardarProductoEnFavoritos() {
    const productoExistente = guardarProductos.value.find((item) => item.id === props.product?.id);
    
    if (productoExistente) {
        alert('Este producto ya está en tus favoritos.');
        return;
    }

    guardarProductos.value.push(props.product);
    localStorage.setItem('guardarProductos', JSON.stringify(guardarProductos.value));

    alert('Producto agregado a favoritos.');
}

function guardarEnCarritoCompras() {
    const productoExistente = carritoCompras.value.find((item) => item.id === props.product?.id);
    
    if (productoExistente) {
        alert('Este producto ya está en tu carrito de compras.');
        return;
    }

    carritoCompras.value.push(props.product);
    localStorage.setItem('carritoCompras', JSON.stringify(carritoCompras.value)); 

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