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
        <!-- <header>
          <img src="../../public/img/Supermercado-title-color.png" alt="" />
          <h1>Tu compra es <b>100% segura</b></h1>
          <img src="../../public/img/security.png" alt="" />
        </header> -->

        <Header/>

        <main class="main">
          <img src="../../public/Ellipse.png" alt="" class="Ellipse" />
          <img src="../../public/shopping-cart.png" alt="" class="shopping-cart" />
          <h2>Tu carrito está vacío</h2>
          <div class="button">
            <a
              @click="router.go(-1)"
              class="shopping hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
            >
              Sigue comprando
            </a>
          </div>
        </main>

        <!-- <hr class="separator-h" /> -->

        <!-- <footer>
          <div class="footer-container align-items-center">
            <img
              src="../../public/img/Logo_Supermercado.png"
              alt="logo-supermercado-xyz"
              class="logo-supermercado"
            />
            <p>Todo lo que necesitas en un solo lugar</p>
            <hr class="separator-v" />
            <div class="footer-right">
              <img src="../../public/img/map-color.png" alt="maps" class="maps" />
              <p class="maps">
                Av 13 #3-24 ***** - Cúcuta.<br />
                Norte de Santander, Colombia.
              </p>
              <img src="../../public/img/call-color.png" alt="call" class="call" />
              <p class="call">
                Celular: ##########<br />
                Telefono: ##########
              </p>
            </div>
          </div>
        </footer> -->

        <Footer/>

      </div>
    </div>
  </div>
</template>

<style>
@import '/src/assets/carritoVacio.css'
</style>
