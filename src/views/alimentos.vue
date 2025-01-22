<script setup lang="ts">
import HeaderPrincipal from '@/components/headerPrincipal.vue'
import FooterPrincipal from '@/components/footerPrincipal.vue'
import Iconos from '@/components/iconos.vue'
// import { cards } from '@/utils/productos';
import { ref, onMounted, watch } from 'vue'
import { productoServicio } from '@/services/productos/productoServicio';
import { Productos } from '@/utils/interfaces/interfaceProductos';


// let isMenuDropdownVisible = false;
// let isUserDropdownVisible = false;

// function toggleMenuDropdown() {
//   isMenuDropdownVisible = !isMenuDropdownVisible;
// }

// function toggleUserDropdown() {
//   isUserDropdownVisible = !isUserDropdownVisible;
// }

const ProductoServicio = new productoServicio();

const productoSupermercado = ref<Productos[]>([]); // Todos los productos
const filteredProductos = ref<Productos[]>([]); // Productos filtrados
const loading = ref(true);

const obtenerDatos = async () => {
  try {
    const productos = await ProductoServicio.obtenerProductos();
    console.log("Productos obtenidos desde Firebase:", productos);
    console.log("Producto:", productos);
    console.log("Categoría:", productos.category);

    if (!productos || productos.length === 0) {
      console.error("No se encontraron productos en Firebase.");
      loading.value = false;
      return;
    }

    productoSupermercado.value = productos; // Asigna todos los productos obtenidos
    filteredProductos.value = [...productos]; // Inicialmente, todos los productos
  } catch (error) {
    console.error("Error al obtener productos desde Firebase:", error);
  } finally {
    loading.value = false;
  }
};

// Función para filtrar productos por categoría
const filtrarProductosPorCategoria = (categoria: string) => {
  console.log("Filtrando productos con categoría:", categoria);

  if (!categoria) {
    filteredProductos.value = [...productoSupermercado.value]; // Si no hay categoría, muestra todos
    return;
  }

  filteredProductos.value = productoSupermercado.value.filter((producto) =>
    producto.category?.toLowerCase() === categoria.toLowerCase()
  );

  console.log("Resultados del filtro por categoría:", filteredProductos.value);
};

// Ejecutar la obtención de datos al montar el componente
onMounted(() => {
  obtenerDatos();
});

// Escucha cambios en `filteredProductos`
watch(filteredProductos, (newValue) => {
  console.log("Nuevo valor de productos filtrados:", [...newValue]); // Convierte el Proxy a un array normal
});





</script>

<template>
  <div id="app">
    <div class="page-wrap">
      
      <HeaderPrincipal/>

    <p class="title-1">S</p>
      
      <div class="row g-2">
        <div class="col">
          <div class="p-3">
            <select @change="(event) => filtrarProductosPorCategoria(event.target.value)">
              <option value="">Todas las categorías</option>
              <option value="alimentos">Alimentos</option>
              <option value="productos de aseo personal">Productos de aseo personal</option>
              <option value="productos de aseo del hogar">Productos de aseo del hogar</option>
            </select>
            <div 
                class="product-card"
                v-for="product in filteredProductos" 
                :key="product.id"
                style="width: 18rem"
              >
              <!-- <pre>{{ filteredProductos }}</pre> -->
              <article v-if="product.image && product.name && product.price">
                <div class="image-container">
                  <img :src="product.image" class="card-img-top" :alt="product.name" />
                </div>
                <div class="card-body">
                  <h1 class="product-name">{{ product.name }}</h1>
                  <h3 class="product-amount">{{ product.amount }} {{ product.unit }}</h3>
                  <h2 class="product-price">Precio: {{ product.price }}</h2>
                </div>
                  <Iconos/>
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
@import '/src/assets/subCategorias.css'
</style>
