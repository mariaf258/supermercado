<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import Select_categoria from '@/components/select/selectCategoria_actualizar.vue'
import ProductoDefault from '@/utils/interfaces/interfaceProductos';
import { productoServicio } from '@/services/productos/productoServicio';
import { alertaCamposProducto } from '@/utils/alertaCampos';

import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const ProductoServicio = new productoServicio();

const selectedProduct = ref<ProductoDefault>({
    id: '',
    name: '',
    price: '',
    category: '',
    unit: '',
    image: '',
    customUnit: ''
});

const imagePreview = ref('');
const Product = ref<ProductoDefault[]>([]);
const categorias = ref([
    { id_categoria: '1', name: 'Alimentos' },
    { id_categoria: '2', name: 'Productos de aseo personal' },
    { id_categoria: '3', name: 'Productos de aseo del hogar' },
]);

const filteredProductos = ref<ProductoDefault[]>([]);

const obtenerProductos = async () => {
    try {
        const respuestaObtener = await ProductoServicio.obtenerProductos();
        if (respuestaObtener) {
            Product.value = respuestaObtener;
        }
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
};

const filtrarProductoPorId = () => {
    const productosFiltrados = ProductoServicio.filtrarProductoPorId(Product.value);
    filteredProductos.value = productosFiltrados;
};

const crearProducto = async () => {
    try {
        if (!alertaCamposProducto(selectedProduct.value)) {
            return;
        }
        alert('Se agregó producto exitosamente.');
        const respuestaCrear = await ProductoServicio.crearProducto(selectedProduct.value);
        console.log(respuestaCrear);
    } catch (error) {
        console.error('Error al crear el producto:', error);
    }
};

const actualizarProducto = async () => {
    if (!selectedProduct.value) {
        console.error('No hay producto seleccionado para actualizar.');
        return;
    }

    try {
        const nuevosDatos = { ...selectedProduct.value };
        const respuestaActualizar = await ProductoServicio.actualizarProducto(
            selectedProduct.value.id,
            nuevosDatos
        );

        if (respuestaActualizar) {
            alert('Producto actualizado correctamente.');
            const index = Product.value.findIndex(
                (product) => product.id === selectedProduct.value.id
            );
            if (index !== -1) {
                Product.value[index] = { ...selectedProduct.value };
            }
        } else {
            console.error('Error al actualizar el producto en Firebase.');
        }
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
    }
};

const eliminarProducto = async (id: string) => {
    try {
        const respuestaEliminar = await ProductoServicio.eliminarProducto(id);
        console.log(respuestaEliminar);
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
    }
};

function handleFileUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        selectedProduct.value.image = file;
        imagePreview.value = URL.createObjectURL(file);
    }
}

const openUpdateForm = (product: ProductoDefault) => {
    selectedProduct.value = { ...product };
    if (product.image) {
        imagePreview.value = URL.createObjectURL(product.image);
    } else {
        imagePreview.value = '';
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
                        <button class="expand-button2" @click="router.go(-1)">
                            <img src="../../public/back-white.png" alt="Retroceder" />
                        </button>
                    </div>
                    <div class="title-form-update">
                        <h2>Actualizar Producto</h2>
                    </div>
                </main>

                <section v-if="Product.length > 0" class="product-selection">
                    <label class="form-label2">Selecciona un producto para actualizar:</label>
                    <div class="select-container">
                        <select v-model="selectedProduct" @change="handleProductSelection" class="selct_product">
                            <option value="" disabled selected>Selecciona un producto</option>
                            <option v-for="product in Product" :key="product.id" :value="product">
                                {{ product.name }}
                            </option>
                        </select>
                    </div>
                </section>


                <section v-if="selectedProduct" class="section-producto">
                    <div class="formulario">
                        <form class="form-producto2" @submit.prevent="actualizarProducto">
                            <div class="form-row">
                                <div class="column">
                                    <div class="form-group">
                                        <input type="text" v-model="selectedProduct.name" placeholder="" />
                                        <label class="form-label2">Nombre del Producto</label>
                                    </div>

                                    <div class="form-group">
                                        <input type="number" v-model="selectedProduct.price" placeholder="" />
                                        <label class="form-label2">Precio del Producto</label>
                                    </div>

                                    <div class="form-group">
                                        <input type="number" v-model="selectedProduct.amount" placeholder="" />
                                        <label class="form-label2">Cantidad del Producto</label>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label2" v-show="!selectedProduct.unit" for="unidad">Unidad de Medida</label>
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
                                <!-- <pre>{{ selectedProduct }}</pre> -->
                                <div class="column">
                                    <div class="image-uploader2">
                                        <div class="image-preview2" v-if="imagePreview">
                                            <img :src="imagePreview" alt="Previsualización de la imagen" />
                                        </div>
                                        <div class="image-placeholder2" v-else>
                                            <img src="../../public/photo-off.png" alt="Sin imagen seleccionada" />
                                        </div>
                                        <div class="form-photo2">
                                            <input type="file" @change="handleFileUpload" />
                                            <label class="form-label2">Imagen del Producto</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div class="buttons-update">
                            <button class="btns-update btn-primary-add" type="submit" @click="actualizarProducto">
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
@import '/src/assets/actualizarProducto.css'
</style>
