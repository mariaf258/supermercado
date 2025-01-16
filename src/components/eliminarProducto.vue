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
    selectedCard.value = null;
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
            <option disabled value="">Seleccione producto</option>
            <option
            class="card-delete"
            v-for="card in cards"
            :key="card.id"
            :value="card"
            @click="openUpdateForm(card)"
            >
            <h4>{{ card.name }} - </h4>
            <p>{{ card.category }}</p>
            </option>
        </select>
        </main>

        <section v-if="selectedProduct" class="section-producto">
        <div class="formulario">
        <form class="form-producto" @submit.prevent="crearProducto()">
            
            <div class="form-row">
                <div class="column">
                    <div class="form-group">
                        <input type="name" v-model="datos.name" placeholder="" />
                        <label class="form-label">Nombre del Producto</label>
                    </div>
                    <div class="form-group">
                        <input type="post" v-model="datos.price" placeholder="" />
                        <label class="form-label">Precio del Producto</label>
                    </div>
                    <div class="form-group">
                        <input type="etiqueta" v-model="datos.amount" placeholder="" />
                        <label class="form-label">Cantidad del Producto</label>
                    </div>
                    <div class="form-group">
                        <input type="etiqueta" v-model="datos.category" placeholder="" />
                        <label class="form-label">Categoria del Producto</label>
                    </div>
                </div>
                
                <div class="column">
                    
                    <div class="image-uploader">
                        <div class="image-preview" v-if="imagePreview">
                            <img :src="imagePreview" alt="Previsualización de la imagen" />
                        </div>
                        <div class="image-placeholder" v-else>
                            <img src="../../public/photo-off.png" alt="Sin imagen seleccionada" />
                        </div>
                        <div class="form-photo">
                        <input type="file" @change="handleFileUpload" />
                        <label class="form-label">Imagen del Producto</label>
                    
                        </div>
                    </div>

                </div>
            </div>    
        </form>

                    <div class="buttons">

                    <button class="btn btn-primary-add" type="submit" @click="crearProducto()"> Eliminar </button>

                    </div>
                </div>
            </section>

            <Footer/>

        </div>
        </div>
    </div>
</template>

<style>
@import '/src/assets/agregarProducto.css'
</style>
