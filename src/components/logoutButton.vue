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
            class="userIcon-1" 
        />
        <ul v-show="isUserDropdownVisible" class="dropdownMenu">
            <img
                src="../../public/user.png"
                alt="user"
                @click="toggleUserDropdown"
                class="userIcon-2"
            />
            <li class="dropdownItem" @click="logout">Cerrar Sesión</li>
        </ul>
    </div>
</template>

<style>
@import '/src/assets/logoutButton.css'
</style>