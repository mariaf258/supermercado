<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import ProductoDefault from '@/utils/interfaces/interfaceProductos';
import {productoServicio} from '@/services/productos/productoServicio';
import {alertaCamposProducto} from '@/utils/alertaCampos';

import { useRouter } from 'vue-router';

const router  = useRouter()
const datos = new ProductoDefault();

const ProductoServicio = new productoServicio();

const crearProducto =async()=> {
    if (!alertaCamposProducto(datos)) {
        return;
    } else {
        alert('Se agrego producto exitosamente.');
    }
    const respuestaCrear = await productoServicio.crearProducto(datos)
}

const obtenerProductos =async()=> {
    const respuestaCrear = await productoServicio.obtenerProductos()
}

const actualizarProducto =async(id: string, productoActualizado: ProductoDefault)=> {
    const respuestaCrear = await productoServicio.actualizarProducto(id, productoActualizado)
}

const eliminarProducto =async(id: string)=> {
    const respuestaCrear = await productoServicio.eliminarProducto(id)
}

function handleFileUpload(event: Event, datos: { image: File | null }, setPreview: (url: string) => void) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        datos.image = file; 
        const imageUrl = URL.createObjectURL(file); 
        setPreview(imageUrl); 
    }
}

// function onFileChange(event: Event, setPreview: (url: string) => void) {
//     const file = (event.target as HTMLInputElement).files?.[0];
//     if (file) {
//         const previewUrl = URL.createObjectURL(file); // Genera la URL de previsualización
//         setPreview(previewUrl); // Llama a la función para actualizar el estado
//     }
// }

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
            <h2>Agregar Producto</h2>
        </div>
        </main>
        <section class="section-producto">
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

                    <button class="btn btn-primary-add" type="submit" @click="crearProducto()"> Agregar </button>

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
