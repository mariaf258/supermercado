<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import BuscadorSubVista from '@/components/buscador/buscador-subVista.vue'
import Select_categoria from '@/components/select_categoria.vue'
import ProductoDefault from '@/utils/interfaces/interfaceProductos';
import { productoServicio } from '@/services/productos/productoServicio';
import { alertaCamposProducto } from '@/utils/alertaCampos';
import { filteredProductos, filtrarProductos } from '@/utils/buscador';
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { cards } from '@/utils/productos';

const inputValue = ref('');

const filtrar = (event: Event) => {
    inputValue.value = (event.target as HTMLInputElement).value;
    filtrarProductos(cards.value, inputValue.value);
};

onMounted(() => {
    filteredProductos.value = [...cards.value];
});

const router = useRouter();
const ProductoServicio = new productoServicio();

const selectedProduct = reactive<ProductoDefault>({
    id: '', 
    name: '',
    price: '',
    amount: '',
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

            <Header/>
            <main class="main">
                <div class="button-container">
                    <button class="expand-button" @click="router.go(-1)">
                        <img src="../../public/back-white.png" alt="Retroceder" />
                    </button>
                </div>
                <div class="title-update">
                    <h2>Actualizar Producto</h2>
                </div>
                
                <div class="search-container-2">
                <div class="search-box-2">
                    
                    <input 
                    @input="filtrar" 
                    type="text" 
                    id="searchInput-2" 
                    placeholder="Buscar..." 
                    />
                    <img src="../../../public/search.png" alt="search" class="search-icon-2" />
                </div>
                <div id="results" class="results-2">
                    <ul>
                        <li v-for="producto in filteredProductos" :key="producto.id">
                            {{ producto.name }} - {{ producto.description }}
                        </li>
                    </ul>
                </div>
            </div>   
            </main>

            <Select_categoria/>

            
            
            <Footer />
            </div>
        </div>
    </div>
</template>



<style>
@import '/src/assets/actualizarProducto.css'
</style>
