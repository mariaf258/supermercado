<script setup lang="ts">
import { ref } from 'vue';
import { card, datosCards } from '@/utils/productos'; // Asegúrate de importar ambos correctamente

// Ref para almacenar los productos
const productos = ref<datosCards[]>(card);

// Referencias para productos guardados y carrito
const productosGuardados = ref<datosCards[]>([]);
const productosCarrito = ref<datosCards[]>([]);

function guardarProducto(producto: datosCards) {
  if (!productosGuardados.value.find((item) => item.id === producto.id)) {
    productosGuardados.value.push(producto);
  }
}

function agregarAlCarrito(producto: datosCards) {
  if (!productosCarrito.value.find((item) => item.id === producto.id)) {
    productosCarrito.value.push(producto);
  }
}
</script>

<template>
    <div class="productos">
        <div v-for="producto in productos" :key="producto.id" class="producto">
            <p>{{ producto.name }}</p>
            <button @click="guardarProducto(producto)">
                <img src="../../public/bookmark-color.png" alt="Guardar" />
            </button>
            <button @click="agregarAlCarrito(producto)">
                <img src="../../public/add-cart-color.png" alt="Carrito" />
            </button>
        </div>
    </div>
</template>

<style>
@import '/src/assets/iconos.css';
</style>
