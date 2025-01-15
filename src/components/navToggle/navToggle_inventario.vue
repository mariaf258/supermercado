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
    <div class="menuToggle_fill">
        <img
        src="../../../public/add-fill.png"
        alt="menu"
        @click="toggleMenuDropdown"
        class="menu_fill"
        />

        <div :class="['dropdown-menu-fill', { 'show': isMenuDropdownVisible }]">
            <img
            src="../../../public/add-fill.png"
            alt="menu"
            @click="toggleMenuDropdown"
            class="menu_fill_2"
            />
            <ul class="navbar-nav-fill">
                <li @click="handleClick('agregarProducto')"><router-link to="/agregarProducto">Agregar Producto</router-link></li>
                <li @click="handleClick('actualizarProducto')"><router-link to="/actualizarProducto">Actualizar Producto</router-link></li>
                <li @click="handleClick('eliminarProducto')"><router-link to="/eliminarProducto">Eliminar Producto</router-link></li>
            </ul>
        </div>
    </div>

</template>

<style>
@import '/src/assets/navToggle_inventario.css';
</style>
