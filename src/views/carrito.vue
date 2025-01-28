<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import BuscadorSubVista from '@/components/buscador/buscador-subVista.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';


const router  = useRouter()

const productos = ref([])
const carritoCompras = ref([])

onMounted(() => {
    const useCarritoCompras = localStorage.getItem('guardarProductos');
    if (useCarritoCompras) {
        try {
          carritoCompras.value = JSON.parse(useCarritoCompras);
            console.log('Productos agregados desde localStorage:', carritoCompras.value);
        } catch (error) {
            console.error('Error al parsear los datos de localStorage:', error);
        }
    } else {
        console.log('No hay productos agregados en localStorage.');
    }
});


function guardarProductoEnFavoritos(producto: any) {
    const productoExistente = carritoCompras.value.find((item: any) => item.id === producto.id);
    if (productoExistente) {
        window.alert('Este producto ya está en tus favoritos.');
        return;
    }

    carritoCompras.value = [...carritoCompras.value, producto];
    localStorage.setItem('guardarProductos', JSON.stringify(carritoCompras.value));

    console.log('Productos guardados en localStorage:', localStorage.getItem('guardarProductos')); 
    window.alert('Producto agregado a carrito de compras.');
}


</script>

<template>
  <div id="app">
    <div class="page-wrapper">
      <div class="">
        
        <Header/>

        <main class="main-carrito">
          <div class="button-container">
            <button class="expand-button">
              <img src="../../public/back-white.png" alt="" @click="router.go(-1)"/>
            </button>
          </div>

          <div class="title-cart">
            <h2>Tus compras</h2>
          </div>

          <div v-if="carritoCompras.length === 0" class="empty-message">
          No tienes productos agregados.
        </div>
        <div v-else class="products-container">
          <div 
            class="product-card" 
            v-for="producto in carritoCompras" 
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

          <BuscadorSubVista/>
        </main>

        <Footer />

      </div>
    </div>
  </div>
</template>

<style>
@import '/src/assets/carrito.css'
</style>
