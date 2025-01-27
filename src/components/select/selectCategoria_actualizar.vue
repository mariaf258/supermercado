<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { productoServicio } from '@/services/productos/productoServicio';
import { Productos } from '@/utils/interfaces/interfaceProductos';

const ProductoServicio = new productoServicio();

const productoSupermercado = ref<Productos[]>([]);
const filteredProductos = ref<Productos[]>([]);
const loading = ref(true);

const obtenerDatos = async () => {
    try {
        const productos = await ProductoServicio.obtenerProductos();
        if (!productos || productos.length === 0) {
        console.error("No se encontraron productos en Firebase.");
        loading.value = false;
        return;
        }
        productoSupermercado.value = productos;
        filteredProductos.value = [...productos];
    } catch (error) {
        console.error("Error al obtener productos desde Firebase:", error);
    } finally {
        loading.value = false;
    }
};

const filtrarProductosPorCategoria = (categoria: string) => {
    if (!categoria) {
        filteredProductos.value = [...productoSupermercado.value];
        return;
    }
    filteredProductos.value = productoSupermercado.value.filter((producto) =>
        producto.category?.toLowerCase() === categoria.toLowerCase()
    );
};

const actualizarProducto = (id: string) => {
    console.log(`Actualizar producto con ID: ${id}`);
};

onMounted(() => {
    obtenerDatos();
});

watch(filteredProductos, (newValue) => {
    console.log("Productos filtrados:", newValue);
});
</script>

<template>
    <div>
        <select class="select_categoria" @change="(event) => filtrarProductosPorCategoria(event.target.value)">
        <option value="">Todas las categorías</option>
        <option value="alimentos">Alimentos</option>
        <option value="productos de aseo personal">Productos de aseo personal</option>
        <option value="productos de aseo del hogar">Productos de aseo del hogar</option>
        </select>

        <div class="p-3-select">
        <div
            class="product-card"
            v-for="product in filteredProductos"
            :key="product.id"
            style="width: 18rem"
        >
            <article v-if="product.image && product.name && product.price">
            <div class="image-container">
                <img :src="product.image" class="card-img-top" :alt="product.name" />
            </div>
            <div class="card-body-1">
                <h1 class="product-name">{{ product.name }}</h1>
                <h3 class="product-amount">{{ product.amount }} {{ product.unit }}</h3>
                <h2 class="product-price">Precio: {{ product.price }}</h2>

                <div class="icono-update">
                <router-link to="/form_actualizar" @click="actualizarProducto(product.id)">
                    <img src="/public/pencil.png" alt="pencil" />
                </router-link>
                </div>
            </div>
            </article>
        </div>
        </div>
    </div>
</template>


<style>
@import '/src/assets/select_categoria.css'
</style>