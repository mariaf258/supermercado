<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import BuscadorSubVista from '@/components/buscador/buscador-subVista.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router  = useRouter()

const productos = ref([])
const guardarProductos = ref([])

onMounted(() => {
    const useGuardarProductos = localStorage.getItem('guardarProductos');
    if (useGuardarProductos) {
        try {
            guardarProductos.value = JSON.parse(useGuardarProductos);
            console.log('Productos guardados cargados desde localStorage:', guardarProductos.value);
        } catch (error) {
            console.error('Error al parsear los datos de localStorage:', error);
        }
    } else {
        console.log('No hay productos guardados en localStorage.');
    }
});


// Guardar un producto en favoritos
function guardarProductoEnFavoritos(producto: any) {
    const productoExistente = guardarProductos.value.find((item: any) => item.id === producto.id);
    if (productoExistente) {
        window.alert('Este producto ya está en tus favoritos.');
        return;
    }

    guardarProductos.value = [...guardarProductos.value, producto];
    localStorage.setItem('guardarProductos', JSON.stringify(guardarProductos.value));

    console.log('Productos guardados en localStorage:', localStorage.getItem('guardarProductos')); 
    window.alert('Producto agregado a favoritos.');
}


</script>

<template>
  <div id="app">
    <div class="page-wrapper">
      <Header />

      <main class="main">
        <!-- Botón para regresar -->
        <div class="button-container">
          <button class="expand-button" @click="router.go(-1)">
            <img src="../../public/back-white.png" alt="Regresar" />
          </button>
        </div>

        <!-- Título -->
        <div class="title-saved">
          <h2>Tus productos guardados</h2>
        </div>

        <!-- Lista de productos guardados -->
        <div v-if="guardarProductos.length === 0" class="empty-message">
          No tienes productos guardados.
        </div>
        <div v-else class="products-container">
          <div 
            class="product-card" 
            v-for="producto in guardarProductos" 
            :key="producto.id"
            style="width: 18rem"
          >
            <div class="image-container">
              <img :src="producto.image" class="card-img-top" :alt="producto.name" />
            </div>
            <div class="card-body">
              <h1 class="product-name">{{ producto.name }}</h1>
              <h3 class="product-amount">{{ producto.amount }} {{ producto.unit }}</h3>
              <h2 class="product-price">Precio: {{ producto.price }}</h2>
            </div>
          </div>
        </div>

        <BuscadorSubVista />
      </main>

      <Footer />
    </div>
  </div>
</template>

<style>
@import '/src/assets/guardados.css'
</style>
