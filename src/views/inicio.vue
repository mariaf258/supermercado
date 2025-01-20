<script setup lang="ts">
import HeaderPrincipal from '@/components/headerPrincipal.vue'
import FooterPrincipal from '@/components/footerPrincipal.vue'
import Iconos from '@/components/iconos.vue'
import { ref, onMounted } from 'vue'
import { productoServicio } from '@/services/productos/productoServicio';
import { Productos } from '@/utils/interfaces/interfaceProductos';
import { filteredProductos } from '@/utils/buscador';

const ProductoServicio = new productoServicio();

// Estado para los productos
const productosSupermercado = ref<Productos[]>([]);
// Estado para los productos filtrados
const filteredProductos = ref<Productos[]>([]);

// Función para obtener los productos desde el servicio
const obtenerDatos = async () => {
  try {
    const productos: Productos[] = await ProductoServicio.obtenerProductos();
    console.log('Productos obtenidos:', productos);

    // Verificar que los productos están siendo obtenidos correctamente
    if (!productos || productos.length === 0) {
      console.error('No se han obtenido productos.');
      return;
    }

    // Aquí puedes realizar un filtrado si lo necesitas
    const categoria = 'Alimentos'; // Modifica según el filtro que necesites
    const productoSuper: Productos[] = productos.filter((product) => product.categoria === categoria);

    // Si no se encuentran productos para esa categoría, muestra un mensaje
    if (productoSuper.length === 0) {
      console.error('No se encontraron productos para la categoría:', categoria);
    }

    // Asignar los productos filtrados
    productosSupermercado.value = productoSuper;
    console.log('Productos filtrados:', productosSupermercado.value);

    // Copiar los productos a filteredProductos para la visualización
    filteredProductos.value = [...productosSupermercado.value];
  } catch (error) {
    console.error('Error al obtener los productos:', error);
  }
};

onMounted(() => {
  obtenerDatos();
});
</script>


<template>
  <div id="app">
    <div class="page-wrapper">
      <HeaderPrincipal/>

      <div class="row g-2">
        <div class="col">
          <div class="p-3">
            <!-- Mostrar las cards de los productos filtrados -->
            <div class="product-card" v-for="product in filteredProductos" :key="product.id" style="width: 18rem">
              <article @click="expandImage(product.image)">
                <div class="image-container">
                  <!-- Imagen del producto -->
                  <img :src="product.image" class="card-img-top" :alt="product.name" />
                </div>
                <div class="card-body">
                  <div class="card-text">
                    <!-- Nombre del producto -->
                    <h1 class="product-name">{{ product.name }}</h1>
                    <!-- Cantidad del producto -->
                    <h3 class="product-amount">{{ product.amount }}</h3>
                    <!-- Precio del producto -->
                    <h2 class="product-price">Precio: {{ product.price }}</h2>
                  </div>
                  <Iconos/> <!-- Componente para los iconos adicionales -->
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <FooterPrincipal/>
    </div>
  </div>
</template>


<style>
@import '/src/assets/inicio.css'
</style>
