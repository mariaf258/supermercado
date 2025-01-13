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
          <div class="button-container">
            <button class="expand-button">
              <img src="../../public/add-cart.png" alt="" @click="router.go(-1)"/>
              <span class="tooltip">Sigue comprando</span>
            </button>
          </div>

          <div class="title-cart">
            <h2>Tus compras</h2>
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

        <Footer />

      </div>
    </div>
  </div>
</template>

<style>
@import '/src/assets/carrito.css'
</style>
