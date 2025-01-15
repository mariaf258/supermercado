<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import navToggle_categorias from '@/components/navToggle/navToggle_categorias.vue'

import { useRouter } from 'vue-router';

const router  = useRouter()
</script>

<template>
  <div id="app">
    <div class="page-wrapper">
      <div class="">

        <Header/>

        <main class="main">
            <navToggle_categorias/>
          <div class="title-1">
            <h2>Productos de Aseo Personal</h2>
          </div>
          <div class="search-container-1">
              <div class="search-box-1">
                
                <input 
                  @input="filtrarProductos" 
                  type="text" 
                  id="searchInput-1" 
                  placeholder="Buscar..." 
                />
                <img src="../../public/search.png" alt="search" class="search-icon-1" />
              </div>
              <div id="results" class="results-1">
                <ul>
                </ul>
              </div>
            </div>
        </main>

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

        <Footer/>

      </div>
    </div>
  </div>
</template>

<style>
@import '/src/assets/subCategorias.css'
</style>
s