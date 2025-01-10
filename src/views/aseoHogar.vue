<script setup lang="ts">
import LogoutButton from '@/components/logoutButton.vue'
import navToggle from '@/components/navToggle.vue'
import FooterPrincipal from '@/components/footerPrincipal.vue'
import { ref } from 'vue'

let isMenuDropdownVisible = false
let isUserDropdownVisible = false

function toggleMenuDropdown() {
  isMenuDropdownVisible = !isMenuDropdownVisible
}

function toggleUserDropdown() {
  isUserDropdownVisible = !isUserDropdownVisible
}

const card = ref([
{
    id: 19,
    image: '../../public/balde.png',
    name: 'BALDE',
    amount: '1 Unidad',
    price: '18.000'
  },
  {
    id: 20,
    image: '../../public/fab.png',
    name: 'DETERGENTE FAB',
    amount: '4kg',
    price: '47.400'
  },
  {
    id: 21,
    image: '../../public/jabon-de-cocina.png',
    name: 'LAVAPLATOS LIQUIDO',
    amount: '400 ml',
    price: '7.000'
  },
  {
    id: 22,
    image: '../../public/escoba.png',
    name: 'ESCOBA',
    amount: '1 Unidad',
    price: '9.200'
  },
  {
    id: 23,
    image: '../../public/palo_de_escoba.png',
    name: 'PALO DE ESCOBA',
    amount: '1 Unidad',
    price: '4.000'
  },
  {
    id: 24,
    image: '../../public/trapero.png',
    name: 'TRAPERO',
    amount: '1 Unidad',
    price: '12.800'
  }
])
</script>

<template>
  <div id="app">
    <div class="page-wrapper">
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

      <p>Productos de Aseo del Hogar</p>
      
      <div class="row g-2">
        <div class="col">
          <div class="p-3">
            <div class="card" v-for="item in card" :key="item.id" style="width: 18rem">
              <article @click="expandImage(item.image)">
                <div class="image-container">
                  <img :src="item.image" class="card-img-top" :alt="item.name" />
                </div>
                <div class="card-body">
                  <div class="card-text">
                    <h1>{{ item.name }}</h1>
                    <h3>{{ item.amount }}</h3>
                    <h2>Precio: {{ item.price }}</h2>
                  </div>
                  <div class="options">
                    <img src="../../public/bookmark-color.png" alt="" />
                    <img src="../../public/add-cart-color.png" alt="" />
                  </div>
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
