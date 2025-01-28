<script setup lang="ts">
import HeaderPrincipal from '@/components/headerPrincipal.vue'
import FooterPrincipal from '@/components/footerPrincipal.vue'
import Iconos from '@/components/iconos.vue'
import { ref, onMounted, watch } from 'vue'
import { productoServicio } from '@/services/productos/productoServicio';
import { Productos } from '@/utils/interfaces/interfaceProductos';
import NavToggle_inventario from '@/components/navToggle/navToggle_inventario.vue';


let isMenuDropdownVisible = false;
let isUserDropdownVisible = false;

function toggleMenuDropdown() {
  isMenuDropdownVisible = !isMenuDropdownVisible;
}

function toggleUserDropdown() {
  isUserDropdownVisible = !isUserDropdownVisible;
}

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
  console.log("Filtrando productos con categoría:", categoria);

  if (!categoria) {
    filteredProductos.value = [...productoSupermercado.value]; 
    return;
  }

  filteredProductos.value = productoSupermercado.value.filter((producto) =>
    producto.category?.toLowerCase() === categoria.toLowerCase()
  );

  console.log("Resultados del filtro por categoría:", filteredProductos.value);
};

onMounted(() => {
  obtenerDatos();
});

const updateFilteredProductos = (productosFiltrados: Productos[]) => {
  filteredProductos.value = productosFiltrados;
};

watch(filteredProductos, (newValue) => {
  console.log("Nuevo valor de productos filtrados:", [...newValue]); 
});



</script>
<template>
    <div id="app">
        <div class="page-wrap">
        
            <HeaderPrincipal @updateFilteredProductos="updateFilteredProductos"/>

            <p class="title-1">Inventario de Productos</p>

        
            <NavToggle_inventario/>
            
            <div class="row g-2">


                <div class="col">
                <select @change="(event) => filtrarProductosPorCategoria(event.target.value)">
                    <option value="">Todas las categorías</option>
                    <option value="alimentos">Alimentos</option>
                    <option value="productos de aseo personal">Productos de aseo personal</option>
                    <option value="productos de aseo del hogar">Productos de aseo del hogar</option>
                </select>
                
                    <div class="p-3">
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
                    <div class="card-body">
                        <h1 class="product-name">{{ product.name }}</h1>
                        <h3 class="product-amount">{{ product.amount }} {{ product.unit }}</h3>
                        <h2 class="product-price">Precio: {{ product.price }}</h2>
                    <Iconos/>
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
@import '/src/assets/inventario.css'
</style>
