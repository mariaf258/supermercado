<script setup lang="ts">
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import ProductoDefault from '@/utils/interfaces/interfaceProductos';
import { productoServicio } from '@/services/productos/productoServicio';
import { alertaCamposProducto } from '@/utils/alertaCampos';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const datos = new ProductoDefault();
const imagePreview = ref('');
const ProductoServicio = new productoServicio();

// Crear producto
const crearProducto = async () => {
    if (!alertaCamposProducto(datos)) {
        return;
    } else {
        alert('Se agregó producto exitosamente.');
    }

    try {
        const respuestaCrear = await ProductoServicio.crearProducto(datos);
        console.log('Producto creado con ID:', respuestaCrear);
        // Opcional: Redirigir a otra página si es necesario
        router.push('/productos');
    } catch (error) {
        console.error('Error al crear producto:', error);
    }
};

// Función para cargar la imagen
function handleFileUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        datos.image = file;
        const imageUrl = URL.createObjectURL(file);
        imagePreview.value = imageUrl;
    }
}
</script>

<template>
    <div id="app">
        <div class="page-wrapper">
        <Header />
        <main class="main">
            <div class="button-container">
            <button class="expand-button" @click="router.go(-1)">
                <img src="../../public/back-white.png" alt="Retroceder" />
            </button>
            </div>
            <div class="title-saved">
            <h2>Agregar Producto</h2>
            </div>
        </main>

        <section class="section-producto">
            <div class="formulario">
            <form class="form-producto" @submit.prevent="crearProducto">
                <div class="form-row">
                <div class="column">
                    <div class="form-group">
                    <input type="text" v-model="datos.name" placeholder="" />
                    <label class="form-label">Nombre del Producto</label>
                    </div>

                    <div class="form-group">
                    <input type="number" v-model="datos.price" placeholder="" />
                    <label class="form-label">Precio del Producto</label>
                    </div>

                    <div class="form-group">
                    <input type="number" v-model="datos.amount" placeholder="" />
                    <label class="form-label">Cantidad del Producto</label>
                    </div>

                    <div class="form-group">
                    <label class="form-label" v-show="!datos.unit" for="unidad">Unidad de Medida</label>
                    <select v-model="datos.unit" id="unidad" class="unit-select">
                        <option value="unidad" disabled>Selecciona una opción</option>
                        <option value="kilo">Kg</option>
                        <option value="gramo">gr</option>
                        <option value="litro">Litro</option>
                        <option value="litro">ml</option>
                        <option value="litro">Unidad/es</option>
                        <option value="otra">Otra</option>
                    </select>
                    </div>

                

                    <div class="form-group">
                    <input type="text" v-model="datos.category" placeholder="" />
                    <label class="form-label">Categoría del Producto</label>
                    </div>
                </div>

                <div class="column">
                    <div class="image-uploader">
                    <div class="image-preview" v-if="imagePreview">
                        <img :src="imagePreview" alt="" />
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
                <div class="buttons">
                <button class="btn-add btn-primary-add" type="submit">Agregar</button>
                </div>
            </form>
            </div>
        </section>

        <Footer />
        </div>
    </div>
</template>



<style>
@import '/src/assets/agregarProducto.css'
</style>
