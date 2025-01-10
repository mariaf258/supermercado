
<script setup lang="ts">
import { ref } from 'vue'

const isMenuVisible = ref(false)

const toggleMenu_categorias = () => {
    isMenuVisible.value = !isMenuVisible.value
}

const handleClick = (item: string) => {
    console.log(`Navegando a: ${item}`)
}
</script>

<template>
    <div class="menuToggle">
        <img
        src="../../public/menu-color.png"
        alt="menu-categorias"
        @click="toggleMenu_categorias"
        class="menu-categorias"
        />
        <div :class="['dropdownMenu-categorias', { show: isMenuVisible }]">
        <img
            src="../../public/menu.png"
            alt="menu-white"
            @click="toggleMenu_categorias"
            class="menu-white"
        />
        <ul class="navbar-nav">
            <li @click="handleClick('inicio')">
                <router-link to="/">Inicio</router-link>
            </li>
            <li @click="handleClick('alimentos')">
                <router-link to="/alimentos">Alimentos</router-link>
            </li>
            <li @click="handleClick('aseoPersonal')">
                <router-link to="/aseoPersonal">Productos de Aseo Personal</router-link>
            </li>
            <li @click="handleClick('aseoHogar')">
                <router-link to="/aseoHogar">Productos de Aseo del Hogar</router-link>
            </li>
            <li @click="handleClick('historialCompras')">
                <router-link to="/historialCompras">Historial de Compras</router-link>
            </li>
        </ul>
        </div>
    </div>
</template>

<style>
@import '/src/assets/navToggle_categorias.css';
</style>
