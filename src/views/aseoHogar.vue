<script setup lang="ts">
import LogoutButton from '@/components/logoutButton.vue'
import navToggle from '@/components/navToggle.vue'
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

const productos = ref(cards.value.filter(producto => producto.id.toString().startsWith('3')));


// const card = ref([
// {
//     id: 19,
//     image: '../../public/balde.png',
//     name: 'BALDE',
//     amount: '1 Unidad',
//     price: '18.000'
//   },
//   {
//     id: 20,
//     image: '../../public/fab.png',
//     name: 'DETERGENTE FAB',
//     amount: '4kg',
//     price: '47.400'
//   },
//   {
//     id: 21,
//     image: '../../public/jabon-de-cocina.png',
//     name: 'LAVAPLATOS LIQUIDO',
//     amount: '400 ml',
//     price: '7.000'
//   },
//   {
//     id: 22,
//     image: '../../public/escoba.png',
//     name: 'ESCOBA',
//     amount: '1 Unidad',
//     price: '9.200'
//   },
//   {
//     id: 23,
//     image: '../../public/palo_de_escoba.png',
//     name: 'PALO DE ESCOBA',
//     amount: '1 Unidad',
//     price: '4.000'
//   },
//   {
//     id: 24,
//     image: '../../public/trapero.png',
//     name: 'TRAPERO',
//     amount: '1 Unidad',
//     price: '12.800'
//   }
// ])
</script>

<template>
  <div id="app">
    <div class="page-wrap">
      <HeaderPrincipal/>

      <p class="title-1">Productos de Aseo del Hogar</p>
      
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
                  <!-- <div class="options">
                    <button @click="productosGuardados" class="icon-button">
                      <img src="../../public/bookmark-color.png" alt="bookmark-color" />
                    </button>
                    
                    <button @click="productosAComprar" class="icon-button">
                      <img src="../../public/add-cart-color.png" alt="add-cart-color" />
                    </button>
                  </div> -->
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
@import '/src/assets/subCategorias.css'
</style>
