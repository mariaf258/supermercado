<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { cerrarSesion } from '../router/index'

const isUserDropdownVisible = ref(false)
const router = useRouter();

const toggleUserDropdown = () => {
    isUserDropdownVisible.value = !isUserDropdownVisible.value
}

const logout = () => {
    console.log('Cerrando sesión...')
    localStorage.removeItem('savedUsername')
    localStorage.removeItem('savedPassword')
    localStorage.removeItem('rememberCredentials')
    cerrarSesion()
    router.replace('/supermercado_login')
}
</script>

<template>
    <div class="user">
        <img 
            src="../../public/user.png" 
            alt="userIcon-white" 
            @click="toggleUserDropdown"
            class="userIcon" 
        />
        <ul v-show="isUserDropdownVisible" class="dropdown-menu">
            <a class="dropdown-item" @click="logout">Cerrar Sesión</a>
        </ul>
    </div>
</template>

<style>
@import '/src/assets/logoutButton.css'
</style>