<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import ProductoDefault from '@/utils/interfaces/InterfaceProductos';

import { useRouter } from 'vue-router';

const router  = useRouter()

const datos = new ProductoDefault();


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
            <form class="form-producto justify-content-center" @submit.prevent="crearProducto()">
            <!-- <button class="btn btn-primary-volver" type="submit"> Volver </button> -->

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
                    <input type="etiqueta" v-model="datos.amount" placeholder="" />
                    <label class="form-label">Categoria del Producto</label>
                </div>
                    
                <div class="form-photo">
                    <input type="descripcion" v-model="datos.category" placeholder="" />
                    <label class="form-label">Imagen del Producto</label>
                </div>
                    
                </form>

                    <div class="buttons">

                    <button class="btn btn-primary-add" type="submit" @click="crearProducto"> Agregar </button>

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
