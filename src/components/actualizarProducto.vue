<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

import { useRouter } from 'vue-router';

const router  = useRouter()


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


            <Footer/>

        </div>
        </div>
    </div>
</template>

<style>
@import '/src/assets/guardados.css'
</style>
