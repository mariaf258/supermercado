<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import ProductoDefault from '@/utils/interfaces/interfaceProductos';
import { productoServicio } from '@/services/productos/productoServicio';
import { alertaCamposProducto } from '@/utils/alertaCampos';

import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const ProductoServicio = new productoServicio();

const selectedProduct = reactive<ProductoDefault>({
    id: '', 
    name: '',
    price: 0,
    amount: 0,
    category: '',
    image: null,
    unit: '',
    customUnit: '',

});

const imagePreview = ref('');

const Product = ref<ProductoDefault[]>([]);

const categorias = ref([
    { id_categoria: '1', name: 'Alimentos' },
    { id_categoria: '2', name: 'Productos de aseo personal' },
    { id_categoria: '3', name: 'Productos de aseo del hogar' },
]);

// Obtener productos al montar el componente
const obtenerProductos = async () => {
    try {
        Product.value = await productoServicio.obtenerProductos();
    } catch (error) {
        console.log('Error al obtener productos:', error);
    }
};

// Crear producto
const crearProducto = async () => {
    try {
        if (!alertaCamposProducto(selectedProduct)) {
        return;
        }
        alert('Se agregó producto exitosamente.');
        const respuestaCrear = await ProductoServicio.crearProducto(selectedProduct);
        console.log(respuestaCrear);
    } catch (error) {
        console.error('Error al crear el producto:', error);
    }
};

// Actualizar producto
const actualizarProducto = async (id: string, productoActualizado: ProductoDefault) => {
    try {
        const respuestaActualizar = await productoServicio.actualizarProducto(id, productoActualizado);
        console.log(respuestaActualizar);
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
    }
};

// Eliminar producto
const eliminarProducto = async (id: string) => {
    try {
        const respuestaEliminar = await productoServicio.eliminarProducto(id);
        console.log(respuestaEliminar);
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
    }
};

// Manejo de carga de imágenes
function handleFileUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        selectedProduct.image = file; 
        imagePreview.value = URL.createObjectURL(file);
    }
}


const openUpdateForm = (product: ProductoDefault) => {
    Object.assign(selectedProduct, product); 
    if (!product.image) {
        imagePreview.value = ''; 
    } else {
        imagePreview.value = URL.createObjectURL(product.image); 
    }
};

onMounted(() => {
    obtenerProductos();
});
</script>


<template>
    <div id="app">
        <div class="page-wrapper">
            <div class="">

            <Header />
            <main class="main">
                <div class="button-container">
                    <button class="expand-button" @click="router.go(-1)">
                        <img src="../../public/back-white.png" alt="Retroceder" />
                    </button>
                </div>
                <div class="title-saved">
                    <h2>Actualizar Producto</h2>
                </div>
            </main>

            <!-- <select v-model="selectedProduct.category" class="form-select" aria-label="Seleccionar categoría">
                <option disabled value="">Seleccione una categoría</option>
                <option v-for="categoria in categorias" :key="categoria.id_categoria" :value="categoria.name">
                    {{ categoria.name }}
                </option>
            </select> -->

            <select class="form-select" 
                v-model="selectedCard"
                aria-label="Default select example">
                <option disabled value="">Seleccione empleado</option>
                <option
                class="card-delete"
                
                v-for="card in cards"
                :key="card.id"
                :value="card"
                @click="openUpdateForm(card)"
                >
                <h4>{{ card.name }} - </h4>
                <p>{{ card.descripcion }}</p>
                </option>
            </select>

            <section class="section-producto">
                <div class="formulario">
                    <form class="form-producto" @submit.prevent="crearProducto()">
                        <div class="form-row">
                            <div class="column">
                                <div class="form-group">
                                    <input type="name" v-model="selectedProduct.name" placeholder="" />
                                    <label class="form-label">Nombre del Producto</label>
                                </div>

                                <div class="form-group">
                                    <input type="post" v-model="selectedProduct.price" placeholder="" />
                                    <label class="form-label">Precio del Producto</label>
                                </div>

                                <div class="form-group">
                                    <input type="etiqueta" v-model="selectedProduct.amount" placeholder="" />
                                    <label class="form-label">Cantidad del Producto</label>
                                </div>

                                <div class="form-group">
                                    <!-- Cambié 'datos.unit' por 'selectedProduct.unit' -->
                                    <label class="form-label" v-show="!selectedProduct.unit" for="unidad">Unidad de Medida</label>
                                    <select v-model="selectedProduct.unit" id="unidad" class="unit-select">
                                        <option value="unidad" disabled>Selecciona una opción</option>
                                        <option value="kilo">Kg</option>
                                        <option value="gramo">gr</option>
                                        <option value="litro">Litro</option>
                                        <option value="ml">ml</option>
                                        <option value="unidad">Unidad/es</option>
                                        <option value="otra">Otra</option>
                                    </select>
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
                        <button class="btn-update btn-primary-add" type="submit" @click="actualizarProducto(selectedProduct.id, selectedProduct)">
                            Actualizar
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
            </div>
        </div>
    </div>
</template>



<style>
@import '/src/assets/agregarProducto.css'
</style>
