<script setup lang="ts">
import LogoutButton from '@/components/logoutButton.vue'
import navToggle from '@/components/navToggle.vue'
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

const productos = ref(cards.value.filter(producto => producto.id.toString().startsWith('2')));


// const card = ref([
//   {
//     id: 13,
//     image: '../../public/jabon.png',
//     name: 'JABÓN DOVE',
//     amount: '3 Unidades',
//     price: '15.400'
//   },
//   {
//     id: 14,
//     image: '../../public/listerine.png',
//     name: 'LISTERINE',
//     amount: '500 ml',
//     price: '17.200'
//   },
//   {
//     id: 15,
//     image: '../../public/cepillo-de-dientes.png',
//     name: 'CEPILLO DE DIENTES',
//     amount: '1 Unidad',
//     price: '4.000'
//   },
//   {
//     id: 16,
//     image: '../../public/crema-colgate.png',
//     name: 'CREMA COLGATE',
//     amount: '75 ml',
//     price: '6.600'
//   },
//   {
//     id: 17,
//     image: '../../public/Papel-Higienico.png',
//     name: 'PAPEL HIGIENICO',
//     amount: '4 Rollos',
//     price: '9.600'
//   },
//   {
//     id: 18,
//     image: '../../public/shampoo.png',
//     name: 'SHAMPOO',
//     amount: '375 ml',
//     price: '25.650'
//   }
// ])
</script>

<template>
  <div id="app">
    <div class="page-wrap">
      <div class="">
        <header></header>
        <div class="image-title align-items-center">
          <img
            src="../../public/Supermercado-title.png"
            alt="supermercado xyz"
            class="title-supermercado align-items-center"
          />
        </div>

        <nav class="navbar bg-body-tertiary fixed-top">
          <navToggle/>
          <div class="d-flex align-items-center justify-content-between py-2 px-3">
            <div class="search-container">
              <div class="search-box">
                
                <input 
                  @input="filtrarModulos" 
                  type="text" 
                  id="searchInput" 
                  placeholder="Buscar..." 
                />
                <img src="../../public/search.png" alt="search" class="search-icon" />
              </div>
              <div id="results" class="results">
                <ul>
                </ul>
              </div>
            </div>

            <a href="#" target="_blank">
              <router-link to="/guardadosVacio">
                <img src="../../public/bookmark-white.png" alt="bookmark" />
              </router-link>
            </a>
            <a href="#" target="_blank">
              <router-link to="/carritoVacio">
                <img src="../../public/add-cart.png" alt="add-cart" />
              </router-link>
            </a>
            <LogoutButton/>
          </div>
        </nav>
      </div>

      <p class="title-1">Productos de Aseo Personal</p>
      
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
@import '/src/assets/footerPrincipal.css'
</style>
