<script setup lang="ts">
import HeaderPrincipal from '@/components/headerPrincipal.vue'
import FooterPrincipal from '@/components/footerPrincipal.vue'
import Iconos from '@/components/iconos.vue'
import { ref, onMounted } from 'vue'
import { productoServicio } from '@/services/productos/productoServicio';
import { Productos } from '@/utils/interfaces/interfaceProductos';

const ProductoServicio = new productoServicio();

const productoSupermercado = ref<Productos[]>([]);
const filteredProductos = ref<Productos[]>([]);
const loading = ref(true);

const obtenerDatos = async () => {
  try {
    const productos = await ProductoServicio.obtenerProductos();
    console.log("Productos obtenidos desde Firebase:", productos);

    if (!productos || productos.length === 0) {
      console.error("No se encontraron productos en Firebase.");
      return;
    }

    const categoria = 'Alimentos'.toLowerCase();
    productoSupermercado.value = productos.filter((product) => 
      product.categoria.toLowerCase() === categoria
    );
    console.log(productoSupermercado);
    

    if (productoSupermercado.value.length === 0) {
      console.error("No se encontraron productos para la categoría:", categoria);
    }

    filteredProductos.value = [...productoSupermercado.value];
  } catch (error) {
    console.error("Error al obtener productos desde Firebase:", error);
  }
  console.log(productoSupermercado.value);
  
};


onMounted(() => {
  obtenerDatos();
});
</script>

<template>
  <div id="app">
    <div class="page-wrapper">
      <HeaderPrincipal/>
      <div v-if="loading">Cargando productos...</div>
      <div v-else>
        <div class="row g-2">
          <div class="col">
            <div class="p-3">
              <div 
                class="product-card"
                v-for="(product, index) in filteredProductos" 
                :key="index"
                style="width: 18rem"
                :class="{ selected: item.selected }" 
                v-bind:item="item as Productos"
              >
                <article>
                  <div class="image-container">
                    <img :src="product.image" class="card-img-top" :alt="product.name" />
                  </div>
                  <div class="card-body">
                    <div class="card-text">
                      <h1 class="product-name">{{ product.name }}</h1>
                      <h3 class="product-amount">{{ product.amount }}</h3>
                      <h2 class="product-price">Precio: {{ product.price }}</h2>
                    </div>
                    <Iconos/>
                  </div>
                </article>
              </div>
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
