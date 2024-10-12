<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
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
    image: '../../public/img/aceite-de-oliva.png',
    name: 'ACEITE DE OLIVA',
    amount: '1 Litro',
    price: '40.000'
  },
  {
    id: 2,
    image: '../../public/img/arroz.png',
    name: 'ARROZ COSTEÑO',
    amount: '5kg',
    price: '4.000'
  },
  {
    id: 3,
    image: '../../public/img/azucar.png',
    name: 'AZÚCAR MANUELITA',
    amount: '1kg',
    price: '5.800'
  },
  {
    id: 4,
    image: '../../public/img/harina-pan.png',
    name: 'HARINA P.A.N',
    amount: '1kg',
    price: '3.700'
  },
  {
    id: 5,
    image: '../../public/img/Aromatica.png',
    name: 'AROMÁTICA FRESCAMPO',
    amount: '15gr',
    price: '2.000'
  },
  { id: 6, image: '../../public/img/atun.png', name: 'ATÚN TUNY', amount: '140gr', price: '5.000' },
  {
    id: 7,
    image: '../../public/img/cafe.png',
    name: 'CAFE SELLO ROJO',
    amount: '50gr',
    price: '2.000'
  },
  {
    id: 8,
    image: '../../public/img/panela.png',
    name: 'PANELA',
    amount: '1000gr',
    price: '7.000'
  },
  {
    id: 9,
    image: '../../public/img/pasta.png',
    name: 'SPAGHETTI DORIA',
    amount: '250gr',
    price: '5.000'
  },
  {
    id: 10,
    image: '../../public/img/sal.png',
    name: 'SAL',
    amount: '1000gr',
    price: '3.000'
  },
  {
    id: 11,
    image: '../../public/img/salsa-de-tomate.png',
    name: 'SALSA DE TOMATE',
    amount: '500gr',
    price: '22.000'
  },
  {
    id: 12,
    image: '../../public/img/mayonesa.png',
    name: 'MAYONESA MAVESA',
    amount: '500gr',
    price: '25.500'
  },
  {
    id: 13,
    image: '../../public/img/jabon.png',
    name: 'JABÓN DOVE',
    amount: '3 Unidades',
    price: '15.400'
  },
  {
    id: 14,
    image: '../../public/img/listerine.png',
    name: 'LISTERINE',
    amount: '500 ml',
    price: '17.200'
  },
  {
    id: 15,
    image: '../../public/img/cepillo-de-dientes.png',
    name: 'CEPILLO DE DIENTES',
    amount: '1 Unidad',
    price: '4.000'
  },
  {
    id: 16,
    image: '../../public/img/crema-colgate.png',
    name: 'CREMA COLGATE',
    amount: '75 ml',
    price: '6.600'
  },
  {
    id: 17,
    image: '../../public/img/Papel-Higienico.png',
    name: 'PAPEL HIGIENICO',
    amount: '4 Rollos',
    price: '9.600'
  },
  {
    id: 18,
    image: '../../public/img/shampoo.png',
    name: 'SHAMPOO',
    amount: '375 ml',
    price: '25.650'
  },
  {
    id: 19,
    image: '../../public/img/balde.png',
    name: 'BALDE',
    amount: '1 Unidad',
    price: '18.000'
  },
  {
    id: 20,
    image: '../../public/img/fab.png',
    name: 'DETERGENTE FAB',
    amount: '4kg',
    price: '47.400'
  },
  {
    id: 21,
    image: '../../public/img/jabon-de-cocina.png',
    name: 'LAVAPLATOS LIQUIDO',
    amount: '400 ml',
    price: '7.000'
  },
  {
    id: 22,
    image: '../../public/img/escoba.png',
    name: 'ESCOBA',
    amount: '1 Unidad',
    price: '9.200'
  },
  {
    id: 23,
    image: '../../public/img/palo_de_escoba.png',
    name: 'PALO DE ESCOBA',
    amount: '1 Unidad',
    price: '4.000'
  },
  {
    id: 24,
    image: '../../public/img/trapero.png',
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
            src="../../public/img/Supermercado-title.png"
            alt="supermercado xyz"
            class="title-supermercado align-items-center"
          />
        </div>

        <nav class="navbar bg-body-tertiary fixed-top">
          <img
            src="../../public/img/menu.png"
            alt="menu"
            @click="toggleMenuDropdown"
            class="menu"
          />
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <ul v-show="isMenuDropdownVisible" class="dropdown-menu">
                <img
                  src="../../public/img/menu.png"
                  alt="menu"
                  @click="toggleMenuDropdown"
                  class="menu"
                />
                <a class="dropdown-item" href="#">Alimentos</a>
                <hr class="dropdown-divider" />
                <a class="dropdown-item" href="#">Productos de Aseo Personal</a>
                <hr class="dropdown-divider" />
                <a class="dropdown-item" href="#">Productos de Aseo del Hogar</a>
              </ul>
            </ul>
          </div>
          <div class="d-flex align-items-center justify-content-between py-2 px-3">
            <a href="#" target="_blank">
              <img src="../../public/img/bookmark-white.png" alt="bookmark" />
            </a>
            <a href="#" target="_blank">
              <img src="../../public/img/add-cart.png" alt="add-cart" />
            </a>
            <a target="_blank">
              <img src="../../public/img/user.png" alt="userIcon-white" class="userIcon" />
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <ul v-show="isUserDropdownVisible" class="dropdown-menu">
                    <img
                      src="../../public/img/user.png"
                      alt="user"
                      @click="toggleUserDropdown"
                      class="userIcon-white"
                    />
                    <a class="dropdown-item" href="#">Iniciar Sesión</a>
                    <hr class="dropdown-divider" />
                    <a class="dropdown-item" href="#">Cerrar Sesión</a>
                  </ul>
                </ul>
              </div>
            </a>
          </div>
        </nav>
      </div>

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
                    <img src="../../public/img/bookmark-color.png" alt="" />
                    <img src="../../public/img/add-cart-color.png" alt="" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div class="footer-container align-items-center">
          <img
            src="../../public/img/logo-supermercado-xyz.png"
            alt="logo-supermercado-xyz"
            class="logo-supermercado"
          />
          <p>Todo lo que necesitas en un solo lugar</p>
          <span class="separator"></span>
          <div class="footer-right">
            <img src="../../public/img/maps.png" alt="maps" class="maps" />
            <p class="maps">
              Av 13 #3-24 ***** - Cúcuta.<br />
              Norte de Santander, Colombia.
            </p>
            <img src="../../public/img/call.png" alt="call" class="call" />
            <p class="call">
              Celular: ##########<br />
              Telefono: ##########
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
/* #app {
  width: 100%;
  height: 100%;
  display: flex;
} */

/* 
body {
  border-radius: 10px;
  display: none;
} */

header {
  width: 100%;
  height: 20px;
  background-color: #f96616;
}

.image-title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.image-title img {
  width: 50%;
  height: auto;
  align-items: center;
}

.menu {
  width: 30px;
  height: 30px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  /* top: 10px; */
  left: 10px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px 20px; */
  background-color: #f8f8f8;
}

.menu {
  cursor: pointer;
}

.offcanvas-body {
  display: none;
}

.dropdown-menu {
  position: absolute;
  top: 60px;
  left: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.d-flex {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
}

.d-flex a {
  margin-left: 15px;
}

.d-flex img {
  height: 30px;
  margin: -9px;
  margin-right: 20px;
  align-items: end;
  right: 20px;
}

.d-flex .position-relative {
  height: 30px;
  margin: 55px;
}

.userIcon {
  width: 32px;
  height: 32px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 50%;
  /* position: absolute; */
  top: 10px;
  right: 10px;
}

.userIcon-white {
  width: 32px;
  height: 32px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
}

/*///////*/

.dropdown-menu {
  position: absolute;
  top: 0px;
  right: 0;
  background-color: rgba(67, 42, 136, 0.8);
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  padding: 10px;
  z-index: 1;
  min-width: 150px;
  transition: all 0.3s ease;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  width: 100%;
  margin-top: 20px;
}

.dropdown-menu li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: white;
  text-align: center;
  margin-top: 30px;
}

.dropdown-menu li:hover {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0%;
  width: 100%;
}

.dropdown-menu li:last-child {
  margin-bottom: 10px;
}

.dropdown-menu hr {
  margin-bottom: 10px;
}

.dropdown-divider li hr {
  margin-bottom: 10px;
}

.dropdown-item {
  margin: 15px 25px 0px 0px;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
  background-color: rgb(0, 0, 0, 0.1);
}

.dropdown:hover .dropdown-menu {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/*///////*/

.navbar-nav {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}

.py-2 {
  width: 100%;
  height: 40px;
  background-color: #f96616;
  border: none;
  outline: none;
  transition: none;
  align-items: end;
}

.card {
  border-radius: 10px;
  border: 2px solid #f96616;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px;
  margin-left: 20px;
}

.card:hover {
  border: 4px solid rgb(249, 101, 21, 0.8);
}

.p-3 {
  display: grid;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
  grid-template-columns: repeat(4, 1fr);
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
}

.image-container img {
  width: 170px;
  height: auto;
}

.card-body {
  padding: 16px 0px 16px 16px;
  text-align: center;
  border-top: 2px solid #f96616;
  background-color: rgb(249, 102, 22, 0.09);
}

.card-text h1 {
  font-size: 20px;
  margin-bottom: 10px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  color: black;
  margin-right: 10px;
}

.card-text h2 {
  font-size: 1.25rem;
  color: black;
  text-align: left;
}

.card-text h3 {
  font-size: 1rem;
  color: black;
  text-align: left;
}

.options {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.options img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
}

footer {
  width: 100%;
  height: 100%;
  background-color: #f96616;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border-radius: 0px 0px 10px 10px;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin-left: -70px;
}

.footer-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-right div {
  display: flex;
  align-items: center;
}

.footer-right p {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding: 20px; */
  justify-content: space-around;
}

.footer-right img {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding: 20px; */
  justify-content: space-around;
  margin-left: -130px;
}

.separator {
  border-left: 2px solid white;
  height: 170px;
  display: inline-block;
  margin-right: 20px;
}

footer p {
  /* width: 100%; */
  height: 100%;
  left: 20px;
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  display: flex;
  margin-left: -90px;
  font-size: 17px;
}

footer img {
  width: 230px;
  height: 150px;
  /* background-color: #f96616; */
  margin-left: 20px;
  margin-top: 20px;
}

footer .maps {
  width: 35px;
  height: 35px;
}

p.maps {
  width: 300px;
  margin-right: -50px;
  margin-top: -50px;
  text-align: center;
}

footer .call {
  width: 30px;
  height: 30px;
}

p.call {
  width: 300px;
  margin-right: -250px;
  margin-top: -48px;
  text-align: center;
}
</style>
