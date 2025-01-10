<script setup lang="ts">
import LogoutButton from '@/components/logoutButton.vue'
import navToggle from '@/components/navToggle.vue'

import { ref } from 'vue'

let isMenuDropdownVisible = false
let isUserDropdownVisible = false

function toggleMenuDropdown() {
  isMenuDropdownVisible = !isMenuDropdownVisible
}

function toggleUserDropdown() {
  isUserDropdownVisible = !isUserDropdownVisible
}
</script>

<template>
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
                    @input="filtrarProductos" 
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

</template>

<style>
@import '/src/assets/headerPrincipal.css'
</style>