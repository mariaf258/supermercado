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
        <li @click="handleClick('inventario')"><router-link to="/inventario">Inventario de Productos</router-link></li>
      </ul>
    </div>
  </div>


</template>

<style>
@import '/src/assets/navToggle.css';
</style>
