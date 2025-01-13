<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import { useRouter } from 'vue-router';
import BuscadorSubVista from '@/components/buscador/buscador-subVista.vue'

const router  = useRouter()

</script>

<template>
  <div id="app">
    <div class="page-wrapper">
      <div class="">
        <!-- <header>
          <img src="../../public/img/Supermercado-title-color.png" alt="" />
          <h1>Tu compra es <b>100% segura</b></h1>
          <img src="../../public/img/security.png" alt="" />
        </header> -->
        <Header/>

        <main class="main">
          <div class="button-container">
            <button class="expand-button">
              <img src="../../public/back-white.png" alt="" @click="router.go(-1)"/>
              <!-- <span class="tooltip">Sigue comprando</span> -->
            </button>
          </div>

          <div class="title-cart">
            <h2>Tus compras</h2>
          </div>

          <BuscadorSubVista/>
        </main>

        <Footer />

      </div>
    </div>
  </div>
</template>

<style>
@import '/src/assets/carrito.css'
</style>
