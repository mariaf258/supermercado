<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import { productosGuardados } from '@/components/iconos.vue';
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
              <img src="../../public/bookmark-white.png" alt="" @click="router.go(-1)"/>
              <span class="tooltip">Sigue agregando</span>
            </button>
          </div>

          <div class="title">
            <h2>Tus productos guardados</h2>
            <li v-for="producto in productosGuardados" :key="producto.id">
              {{ producto.name }}
            </li>
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
