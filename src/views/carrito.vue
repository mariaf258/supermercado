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
    const useCarritoCompras = localStorage.getItem('carritoCompras');
    if (useCarritoCompras) {
        try {
            carritoCompras.value = JSON.parse(useCarritoCompras);
        } catch (error) {
            console.error('Error al parsear los datos de localStorage:', error);
        }
    }
});

function eliminarDeCarritoCompras(id: string) {
    console.log('Eliminando producto con id:', id);
    
    carritoCompras.value = carritoCompras.value.filter((producto: any) => producto.id !== id);
    
    localStorage.setItem('carritoCompras', JSON.stringify(carritoCompras.value));

    window.alert('Producto eliminado del carrito.');
    console.log('Productos actualizados:', carritoCompras.value);
}


</script>

<template>
  <div id="app" class="app_carrito">
    <div class="page-wrapper">
      <div class="">
        
        <Header/>

        <main class="main-carrito">
          <div class="button-container">
            <button class="expand-button">
              <img src="../../public/back-white.png" alt="" @click="router.go(-1)" class="button-back"/>
            </button>
          </div>

          <div class="title-cart">
            <h2>Tus compras</h2>
          </div>

          <div v-if="carritoCompras.length === 0" class="empty-message">
          No tienes productos agregados.
        </div>
        <div v-else class="products-container">
          <!-- <pre> {{ carritoCompras }}</pre> -->
          <div 
            class="product-card" 
            v-for="producto in carritoCompras" 
            :key="producto.id"
            style="width: 18rem"
          >
            <div class="image-container">
              <img :src="producto.image" class="card-img-top" :alt="producto.name" />
            </div>
            <div class="card_body">
              <h1 class="product-name">{{ producto.name }}</h1>
              <h3 class="product-amount">{{ producto.amount }} {{ producto.unit }}</h3>
              <h2 class="product-price">Precio: {{ producto.price }}</h2>
              <div class="icono-update">
                <img
                  src="../../../public/trash-color.png"
                  alt="trash"
                  @click="eliminarDeCarritoCompras(producto.id)"
                  style="cursor: pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <button class="vaciar_carrito">
          Vaciar Carrito
        </button>

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
