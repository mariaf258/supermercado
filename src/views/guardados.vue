<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import BuscadorSubVista from '@/components/buscador/buscador-subVista.vue'

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
              <!-- <span class="tooltip">Sigue agregando</span> -->
            </button>
          </div>

          <div class="title-saved">
            <h2>Tus productos guardados</h2>
            <!-- <li v-for="producto in productosGuardados" :key="producto.id">
              {{ producto.name }}
            </li> -->
          </div>

          <BuscadorSubVista/>
        </main>


        <Footer/>

      </div>
    </div>
  </div>
</template>

<style>
@import '/src/assests/guardados.css'
</style>
