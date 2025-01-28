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
          <img src="../../public/Ellipse.png" alt="" class="Ellipse" />
          <img src="../../public/bookmark.png" alt="" class="shopping-cart" />
          <h2>No tienes productos guardados</h2>
          <div class="button">
            <a
              @click="router.go(-1)"
              class="add hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
            >
              Sigue guardando
            </a>
          </div>
        </main>

        <Footer/>

      </div>
    </div>
  </div>
</template>

<style>
@import '/src/assets/guardadosVacio.css'
</style>
