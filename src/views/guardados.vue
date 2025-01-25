<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import BuscadorSubVista from '@/components/buscador/buscador-subVista.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router  = useRouter()

const productos = ref([])
const guardarProductos = ref([])



function buttonsVistas() {
    try {
        const productos_guardados = localStorage.getItem('productos');
        if (productos_guardados) {
            productos.value = JSON.parse(productos_guardados);
            console.log('Productos cargados desde localStorage:', productos.value);
        }

        const useGuardarProductos = localStorage.getItem('guardarProductos');
        if (useGuardarProductos) {
            guardarProductos.value = JSON.parse(useGuardarProductos);
            console.log('Productos guardados cargados desde localStorage:', guardarProductos.value);
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


console.log('Productos guardados en guardarProductos:', guardarProductos.value);



</script>

<template>
  <div id="app">
    <div class="page-wrapper">
      <div class="">
        
        <Header/>

        <main class="main">
          <div class="button-container">
            <button class="expand-button">
              <img src="../../public/back-white.png" alt="" @click="router.go(-1)"/>
            </button>
          </div>

          <div class="title-saved">
            <h2>Tus productos guardados</h2>
          </div>
          
              <div 
                class="product-card"
                v-for="product in filteredProductos" 
                :key="product.id"
                style="width: 18rem"
              >
              </div>

              <div v-if="guardarProductos.length === 0">No tienes productos guardados.</div>
                <ul v-else>
                  <li v-for="producto in guardarProductos" :key="producto.id">
                    <h1 class="product-name">{{ producto.name }}</h1>
                    <h3 class="product-amount">{{ producto.amount }} {{ producto.unit }}</h3>
                    <h2 class="product-price">Precio: {{ producto.price }}</h2>
                  </li>
                </ul>



          <BuscadorSubVista/>
        </main>


        <Footer/>

      </div>
    </div>
  </div>
</template>

<style>
@import '/src/assets/guardados.css'
</style>
