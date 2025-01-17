<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import ProductoDefault from '@/utils/interfaces/interfaceProductos';
import {productoServicio} from '@/services/productos/productoServicio';
import {alertaCamposProducto} from '@/utils/alertaCampos';
import { ref, onMounted } from 'vue';


import { useRouter } from 'vue-router';

const router  = useRouter()
const datos = new ProductoDefault();



const servicioProductos = new productoServicio();

const Product = ref<ProductoDefault[]>([]);
const selectedProduct = ref<ProductoDefault | null>(null);

const filteredProducts = () => {
    const productosFiltrados =  servicioProductos.filtrarProductosPorCategoria(Product.value)
    Product.value = productosFiltrados;

};


onMounted(() => {
    obtenerProductos();

});


const obtenerProductos = async () => {
    const respuestaObtener = await productoServicio.obtenerProductos();
    if (respuestaObtener) {
        Product.value = respuestaObtener;
        console.log(Product.value);
    }
    filteredProducts();
};

// Abre formulario con datos de una card
const openUpdateForm = (Product: ProductoDefault) => {
    console.log(Product);
    
};

// Eliminar 
const eliminarProducto = async (id: string | undefined) => {
    if (!id) {
        alert('No se puede eliminar: id no válido.');
        return;
    }

    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (!confirmacion) return;

    console.log('id a eliminar:', id); 
    const respuestaEliminar = await productoServicio.eliminarProducto(id);

    if (!respuestaEliminar) {
        const index = Product.value.findIndex((Product) => Product.id === id);
        if (index !== -1) {
            Product.value.splice(index, 1);
        }
        alert('Error al eliminar el producto.');
    } else {
        alert('Producto eliminado correctamente.');
    }
};


const cancelUpdate = () => {
    selectedProduct.value = null;
};

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
            <h2>Eliminar Producto</h2>
        </div>

        <select class="form-select" 
            v-model="selectedProduct"
            aria-label="Default select example">
            <option disabled value="Seleccione Categoria">Seleccione Categoria</option>
            <option
            class="card-delete"
            v-for="card in Product"
            :key="card.id"
            :value="card"
            @click="openUpdateForm(card)"
            >
            <h4>{{ card.name }} - </h4>
            <p>{{ card.category }}</p>
            </option>
        </select>

            <div class="search_container_1">
                <div class="search_box_1">
                    <input 
                    @input="filtrar" 
                    type="text" 
                    id="searchInput_1" 
                    placeholder="Buscar..." 
                    />
                        <img src="../../public/search.png" alt="search" class="search_icon_1" />
                </div>
                <div id="results" class="results_1">
                    <ul>
                        <li v-for="producto in filteredProductos" :key="producto.id">
                            {{ producto.name }} - {{ producto.description }}
                        </li>
                    </ul>
                </div>
            </div>
        </main>

        <section v-if="selectedProduct" class="section-delete">
                <div class="formulario">
                
                    <div class="card-body">
                        <div class="card-text">
                            <h1 class="product-name">{{ product.name }}</h1>
                            <h3 class="product-amount">{{ product.amount }}</h3>
                            <h2 class="product-price">Precio: {{ product.price }}</h2>
                        </div>
                        <img src="../../public/trash-color.png" alt="">
                    </div>
                </div>
            </section>

            <Footer/>

        </div>
        </div>
    </div>
</template>

<style>
@import '/src/assets/eliminarProducto.css'
</style>
