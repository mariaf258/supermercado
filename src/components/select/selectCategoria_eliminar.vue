<script setup lang="ts">
import Iconos from '@/components/iconos.vue';
import { ref, onMounted, watch } from 'vue';
import { productoServicio } from '@/services/productos/productoServicio';
import ProductosDefault, { Productos } from '@/utils/interfaces/interfaceProductos';

const ProductoServicio = new productoServicio();

const productoSupermercado = ref<Productos[]>([]);
const filteredProductos = ref<Productos[]>([]);
const loading = ref(true);

const obtenerDatos = async () => {
  try {
    const productos = await ProductoServicio.obtenerProductos();
    if (!productos || productos.length === 0) {
      console.error('No se encontraron productos en Firebase.');
      loading.value = false;
      return;
    }

    productoSupermercado.value = productos;
    filteredProductos.value = [...productos];
  } catch (error) {
    console.error('Error al obtener productos desde Firebase:', error);
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

onMounted(() => {
  obtenerDatos();
});

const eliminarProducto = async (id: string | undefined) => {
  if (!id) {
    alert('No se puede eliminar el producto: id no válido.');
    return;
  }

  try {
    const respuestaEliminar = await ProductoServicio.eliminarProducto(id);
    if (respuestaEliminar) {
      // Eliminar el producto de la lista local
      productoSupermercado.value = productoSupermercado.value.filter(
        (producto) => producto.id !== id
      );
      filteredProductos.value = filteredProductos.value.filter(
        (producto) => producto.id !== id
      );
      alert('Producto eliminado correctamente.');
    } else {
      alert('Error al eliminar el producto.');
    }
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    alert('Ocurrió un error al intentar eliminar el producto.');
  }
};
</script>

<template>
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
            <img
              src="../../../public/trash-color.png"
              alt="trash"
              @click="eliminarProducto(product.id)"
              style="cursor: pointer"
            />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>


<style>
@import '/src/assets/select_categoria.css'
</style>