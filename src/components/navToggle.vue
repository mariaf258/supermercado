<!-- <script setup lang="ts">
import { ref } from 'vue'

const activeView = ref('inicio')
const isMenuDropdownVisible = ref(false)

const toggleMenuDropdown = () => {
  isMenuDropdownVisible.value = !isMenuDropdownVisible.value
}

const handleClick = (item) => {
  if (item === 'inicio') {
    activeView.value = 'inicio'
  } else if (item === 'alimentos') {
    activeView.value = 'alimentos'
  } else if (item === 'productos de Aseo Personal') {
    activeView.value = 'productos de Aseo Personal'
  } else if (item === 'productos de Aseo del Hogar') {
    activeView.value = 'productos de Aseo del Hogar'
  }
}

</script>

<template>
          <img
            src="../../public/menu.png"
            alt="menu"
            @click="toggleMenuDropdown"
            class="menu"
          />
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <ul v-show="isMenuDropdownVisible" class="dropdown-menu">
                <img
                  src="../../public/menu.png"
                  alt="menu"
                  @click="toggleMenuDropdown"
                  class="menu"
                />
                <li @click="handleClick('inicio')">Inicio</li>
                <hr />
                <li @click="handleClick('alimentos')">Alimentos</li>
                <hr />
                <li @click="handleClick('AseoPersonal')">Productos de Aseo Personal</li>
                <hr />
                <li @click="handleClick('AseoHogar')">Productos de Aseo del Hogar</li>
              </ul>
            </ul>
          </div>
</template>

<style>
@import '/src/assets/navToggle.css'
</style> -->

<script setup lang="ts">
import { ref } from 'vue'

const isMenuDropdownVisible = ref(false)

const toggleMenuDropdown = () => {
  isMenuDropdownVisible.value = !isMenuDropdownVisible.value
}

const handleClick = (item: string) => {
  console.log(`Navegando a: ${item}`)
}
</script>

<template>
  <div class="menuToggle">
    <img
      src="../../public/menu.png"
      alt="menu"
      @click="toggleMenuDropdown"
      class="menu"
    />
    <div :class="['dropdown-menu', { 'show': isMenuDropdownVisible }]">
      <ul class="navbar-nav">
        <li @click="handleClick('inicio')"><router-link to="/">Inicio</router-link></li>
        <li @click="handleClick('alimentos')"><router-link to="/alimentos">Alimentos</router-link></li>
        <li @click="handleClick('aseoPersonal')"><router-link to="/aseoPersonal">Productos de Aseo Personal</router-link></li>
        <li @click="handleClick('aseoHogar')"><router-link to="/aseoHogar">Productos de Aseo del Hogar</router-link></li>
        <li @click="handleClick('historialCompras')"><router-link to="/historialCompras">Historial de Compras</router-link></li>
      </ul>
    </div>
  </div>


</template>

<style>
@import '/src/assets/navToggle.css';
</style>
