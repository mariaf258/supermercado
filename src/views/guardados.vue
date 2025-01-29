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
            // console.log('Productos guardados cargados desde localStorage:', guardarProductos.value);
        } catch (error) {
            console.error('Error al parsear los datos de localStorage:', error);
        }
    } else {
        console.log('No hay productos guardados en localStorage.');
    }
});


function eliminarProductoDeFavoritos(id: string) {
    console.log('Eliminando producto con id:', id);
    guardarProductos.value = guardarProductos.value.filter((producto: any) => producto.id !== id);
    localStorage.setItem('guardarProductos', JSON.stringify(guardarProductos.value));
    window.alert('Producto eliminado de favoritos.');
    console.log('Productos actualizados:', guardarProductos.value);
}


</script>

<template>
  <div id="app">
    <div class="page-wrapper">
      <Header />

      <main class="main-saved">
        <div class="button_conta">
          <button class="expand_btn" @click="router.go(-1)">
            <img src="../../public/back-white.png" alt="Regresar" />
          </button>
        </div>

        <div class="title-saved">
          <h2>Tus productos guardados</h2>
        </div>

        <div v-if="guardarProductos.length === 0" class="empty-message">
            No tienes productos guardados.
        </div>
        <div v-else class="products-container">
          <!-- <pre> {{ guardarProductos }}</pre> -->
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
              <div class="icono-update">
                <img
                  src="../../../public/trash-color.png"
                  alt="trash"
                  @click="eliminarProductoDeFavoritos(producto.id)"
                  style="cursor: pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <button class="vaciar_guardados">
          Vaciar Productos
        </button>

        <BuscadorSubVista />
      </main>

      <Footer />
    </div>
  </div>
</template>

<style>
@import '/src/assets/guardados.css'
</style>
