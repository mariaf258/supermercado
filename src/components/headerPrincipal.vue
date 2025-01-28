<script setup lang="ts">
import LogoutButton from '@/components/logoutButton.vue'
import navToggle from '@/components/navToggle.vue'
import { ref, onMounted, defineEmits } from 'vue';
import { filteredProductos } from '@/utils/buscador';
import { cards } from '@/utils/productos';

const emit = defineEmits(['updateFilteredProductos']);
const inputValue = ref('');


const filtrarProductos = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (!target || target.tagName !== 'INPUT') {
        console.error('El evento no proviene de un elemento <input>');
        return;
    }

    const input = target.value.toLowerCase().trim();
    console.log('Texto de búsqueda:', input);

    if (!input) {
        filteredProductos.value = [...cards.value];
    } else {
        filteredProductos.value = cards.value.filter((producto) => {
            const productName = producto.name ? producto.name.toLowerCase() : '';
            return productName.includes(input);
        });
    }

    emit('updateFilteredProductos', filteredProductos.value);
};

onMounted(() => {
    console.log('Productos iniciales:', JSON.parse(JSON.stringify(cards.value)));
    filteredProductos.value = [...cards.value];
});
</script>


<template>
    <div>
        <header></header>
        <div class="image-title align-items-center">
        <img
            src="../../public/Supermercado-title.png"
            alt="supermercado xyz"
            class="title-supermercado align-items-center"
        />
        </div>

        <nav class="navbar bg-body-tertiary fixed-top">
        <navToggle />
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

                    <li v-for="producto in filteredProductos" :key="producto.id">
                    {{ producto.name }} - {{ producto.price }}
                </li>
                </ul>
            </div>
            </div>

            <a href="#" target="_blank">
            <router-link to="/guardados">
                <img src="../../public/bookmark-white.png" alt="bookmark" />
            </router-link>
            </a>
            <a href="#" target="_blank">
            <router-link to="/carrito">
                <img src="../../public/add-cart.png" alt="add-cart" />
            </router-link>
            </a>

            <LogoutButton />
        </div>
        </nav>
    </div>
</template>



<style>
@import '/src/assets/headerPrincipal.css'
</style>