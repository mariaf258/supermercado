<script setup lang="ts">
// import LogoutButton from '@/components/logoutButton.vue'
// import navToggle from '@/components/navToggle.vue'
import HeaderPrincipal from '@/components/headerPrincipal.vue'
import FooterPrincipal from '@/components/footerPrincipal.vue'
import Iconos from '@/components/iconos.vue'
import { cards } from '@/utils/productos';
import { ref } from 'vue'



let isMenuDropdownVisible = false
let isUserDropdownVisible = false

function toggleMenuDropdown() {
  isMenuDropdownVisible = !isMenuDropdownVisible
}

function toggleUserDropdown() {
  isUserDropdownVisible = !isUserDropdownVisible
}

const productos = ref(cards);

</script>

<template>
  <div id="app">
    <div class="page-wrapper">
      <HeaderPrincipal/>

      <div class="row g-2">
        <div class="col">
          <div class="p-3">
            <div class="product-card" v-for="product in productos" :key="product.id" style="width: 18rem">
              <article @click="expandImage(item.image)">
                <div class="image-container">
                  <img :src="product.image" class="card-img-top" :alt="product.name" />
                </div>
                <div class="card-body">
                  <div class="card-text">
                    <h1 class="product-name">{{ product.name }}</h1>
                    <h3 class="product-amount">{{ product.amount }}</h3>
                    <h2 class="product-price">Precio: {{ product.price }}</h2>
                  </div>
                  <Iconos/>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <FooterPrincipal/>
    </div>
  </div>
</template>

<style>
@import '/src/assets/inicio.css'
</style>
