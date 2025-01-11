<script setup lang="ts">
// import LogoutButton from '@/components/logoutButton.vue'
// import navToggle from '@/components/navToggle.vue'
import HeaderPrincipal from '@/components/headerPrincipal.vue'
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
    id: 1,
    image: '../../public/aceite-de-oliva.png',
    name: 'ACEITE DE OLIVA',
    amount: '1 Litro',
    price: '40.000'
  },
  {
    id: 2,
    image: '../../public/arroz.png',
    name: 'ARROZ COSTEÑO',
    amount: '5kg',
    price: '4.000'
  },
  {
    id: 3,
    image: '../../public/azucar.png',
    name: 'AZÚCAR MANUELITA',
    amount: '1kg',
    price: '5.800'
  },
  {
    id: 4,
    image: '../../public/harina-pan.png',
    name: 'HARINA P.A.N',
    amount: '1kg',
    price: '3.700'
  },
  {
    id: 5,
    image: '../../public/Aromatica.png',
    name: 'AROMÁTICA FRESCAMPO',
    amount: '15gr',
    price: '2.000'
  },
  { id: 6, image: '../../public/atun.png', 
  name: 'ATÚN TUNY', 
  amount: '140gr', 
  price: '5.000' 
  },
  {
    id: 7,
    image: '../../public/cafe.png',
    name: 'CAFE SELLO ROJO',
    amount: '50gr',
    price: '2.000'
  },
  {
    id: 8,
    image: '../../public/panela.png',
    name: 'PANELA',
    amount: '1000gr',
    price: '7.000'
  },
  {
    id: 9,
    image: '../../public/pasta.png',
    name: 'SPAGHETTI DORIA',
    amount: '250gr',
    price: '5.000'
  },
  {
    id: 10,
    image: '../../public/sal.png',
    name: 'SAL',
    amount: '1000gr',
    price: '3.000'
  },
  {
    id: 11,
    image: '../../public/salsa-de-tomate.png',
    name: 'SALSA DE TOMATE',
    amount: '500gr',
    price: '22.000'
  },
  {
    id: 12,
    image: '../../public/mayonesa.png',
    name: 'MAYONESA MAVESA',
    amount: '500gr',
    price: '25.500'
  },
  {
    id: 13,
    image: '../../public/jabon.png',
    name: 'JABÓN DOVE',
    amount: '3 Unidades',
    price: '15.400'
  },
  {
    id: 14,
    image: '../../public/listerine.png',
    name: 'LISTERINE',
    amount: '500 ml',
    price: '17.200'
  },
  {
    id: 15,
    image: '../../public/cepillo-de-dientes.png',
    name: 'CEPILLO DE DIENTES',
    amount: '1 Unidad',
    price: '4.000'
  },
  {
    id: 16,
    image: '../../public/crema-colgate.png',
    name: 'CREMA COLGATE',
    amount: '75 ml',
    price: '6.600'
  },
  {
    id: 17,
    image: '../../public/Papel-Higienico.png',
    name: 'PAPEL HIGIENICO',
    amount: '4 Rollos',
    price: '9.600'
  },
  {
    id: 18,
    image: '../../public/shampoo.png',
    name: 'SHAMPOO',
    amount: '375 ml',
    price: '25.650'
  },
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
      <HeaderPrincipal/>

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
@import '/src/assets/inicio.css'
</style>
