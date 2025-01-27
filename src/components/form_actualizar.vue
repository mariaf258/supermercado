<script setup lang="ts">
import { ref } from 'vue';
import { productoServicio } from '@/services/productos/productoServicio';
import { Productos } from '@/utils/interfaces/interfaceProductos';

const ProductoServicio = new productoServicio();

const productoSupermercado = ref<Productos[]>([]); 
const filteredProductos = ref<Productos[]>([]); 
const loading = ref(true);
const imagePreview = ref('');
const selectedProduct = ref<Productos | null>(null); 

const obtenerDatos = async () => {
    try {
        const productos = await ProductoServicio.obtenerProductos();
        if (!productos || productos.length === 0) {
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
    if (!categoria) {
        filteredProductos.value = [...productoSupermercado.value];
        return;
    }
    filteredProductos.value = productoSupermercado.value.filter((producto) =>
        producto.category?.toLowerCase() === categoria.toLowerCase()
    );
};

const openUpdateForm = (product: Productos) => {
    selectedProduct.value = { ...product }; 
    if (!product.image) {
        imagePreview.value = ''; 
    } else {
        imagePreview.value = product.image; 
    }
};

function handleFileUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        selectedProduct.value!.image = file;
        imagePreview.value = URL.createObjectURL(file);
    }
}

const actualizarProducto = async () => {
    if (!selectedProduct.value) return;

    try {
        const respuesta = await ProductoServicio.actualizarProducto(selectedProduct.value.id, selectedProduct.value);
        if (respuesta) {
            alert('Producto actualizado correctamente');
            const index = productoSupermercado.value.findIndex(product => product.id === selectedProduct.value?.id);
            if (index !== -1) {
                productoSupermercado.value[index] = { ...selectedProduct.value };
            }
        }
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
    }
};

onMounted(() => {
    obtenerDatos();
});
</script>

<template>
    <div>
        <select class="select_categoria" @change="(event) => filtrarProductosPorCategoria(event.target.value)">
            <option value="">Todas las categorías</option>
            <option value="alimentos">Alimentos</option>
            <option value="productos de aseo personal">Productos de aseo personal</option>
            <option value="productos de aseo del hogar">Productos de aseo del hogar</option>
        </select>

        <section v-if="filteredProductos.length > 0">
            <div class="product-list">
                <h3>Selecciona un producto para actualizar:</h3>
                <div v-for="product in filteredProductos" :key="product.id" class="product-item">
                    <button @click="openUpdateForm(product)">
                        <div class="icono-update">
                            <img src="/public/pencil.png" alt="pencil" />
                        </div>
                        Editar {{ product.name }}
                    </button>
                </div>
            </div>
        </section>

        <section v-if="selectedProduct">
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
                        <pre>{{ selectedProduct }}</pre>
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
                    <button class="btn-update btn-primary-add" type="submit" @click="actualizarProducto">
                        Actualizar
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>


<style>
@import '/src/assets/form_actualizar.css'
</style>