<script setup lang="ts">
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

const productos = ref(cards.value.filter(producto => producto.id.toString().startsWith('1')));

// const card = ref([
//   {
//     id: 1,
//     image: '../../public/aceite-de-oliva.png',
//     name: 'ACEITE DE OLIVA',
//     amount: '1 Litro',
//     price: '40.000'
//   },
//   {
//     id: 2,
//     image: '../../public/arroz.png',
//     name: 'ARROZ COSTEÑO',
//     amount: '5kg',
//     price: '4.000'
//   },
//   {
//     id: 3,
//     image: '../../public/azucar.png',
//     name: 'AZÚCAR MANUELITA',
//     amount: '1kg',
//     price: '5.800'
//   },
//   {
//     id: 4,
//     image: '../../public/harina-pan.png',
//     name: 'HARINA P.A.N',
//     amount: '1kg',
//     price: '3.700'
//   },
//   {
//     id: 5,
//     image: '../../public/Aromatica.png',
//     name: 'AROMÁTICA FRESCAMPO',
//     amount: '15gr',
//     price: '2.000'
//   },
//   { id: 6, image: '../../public/atun.png', 
//   name: 'ATÚN TUNY', 
//   amount: '140gr', 
//   price: '5.000' 
//   },
//   {
//     id: 7,
//     image: '../../public/cafe.png',
//     name: 'CAFE SELLO ROJO',
//     amount: '50gr',
//     price: '2.000'
//   },
//   {
//     id: 8,
//     image: '../../public/panela.png',
//     name: 'PANELA',
//     amount: '1000gr',
//     price: '7.000'
//   },
//   {
//     id: 9,
//     image: '../../public/pasta.png',
//     name: 'SPAGHETTI DORIA',
//     amount: '250gr',
//     price: '5.000'
//   },
//   {
//     id: 10,
//     image: '../../public/sal.png',
//     name: 'SAL',
//     amount: '1000gr',
//     price: '3.000'
//   },
//   {
//     id: 11,
//     image: '../../public/salsa-de-tomate.png',
//     name: 'SALSA DE TOMATE',
//     amount: '500gr',
//     price: '22.000'
//   },
//   {
//     id: 12,
//     image: '../../public/mayonesa.png',
//     name: 'MAYONESA MAVESA',
//     amount: '500gr',
//     price: '25.500'
//   }
// ])
</script>

<template>
  <div id="app">
    <div class="page-wrap">
      
      <HeaderPrincipal/>

    <p class="title-1">Alimentos</p>
      
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
@import '/src/assets/subCategorias.css'
</style>
