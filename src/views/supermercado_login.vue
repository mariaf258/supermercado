<script lang="ts">
import { defineComponent } from 'vue'
import { cerrarSesion, iniciarSesion } from '@/router'
function togglePassword() {
  const passwordField = document.getElementById('password')
  if (passwordField.type === 'password') {
    passwordField.type = 'text'
  } else {
    passwordField.type = 'password'
  }
}

const validCredentials: Record<string, string> = {
  'usuario1@gmail.com': '123',
};

export default defineComponent({
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      rememberCredentials: false,
      showPassword: false,
    };
  },

  mounted() {
    if (localStorage.getItem('rememberCredentials') === 'true') {
      this.username = localStorage.getItem('savedUsername') || '';
      this.password = localStorage.getItem('savedPassword') || '';
      this.rememberCredentials = true;
    }
  },
  methods: {
    login() {
      // const { username, password, rememberCredentials } = this;
      const username = this.username;
      const password = this.password;

      console.log('Username:', username);
      console.log('Password:', password);

      if (validCredentials[username] === password) {
        if (this.rememberCredentials) {
          localStorage.setItem('savedUsername', this.username);
          localStorage.setItem('savedPassword', this.password);
          localStorage.setItem('rememberCredentials', 'true');
        } else {
          localStorage.removeItem('savedUsername');
          localStorage.removeItem('savedPassword');
          localStorage.removeItem('rememberCredentials');
        }
        iniciarSesion();
        this.$router.replace('/');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    },

  },
});
</script>

<template>
  <div id="app">
    <div class="page-wrapper">
      <div class="">
        <header class="header-login">
          <img src="../../public/Supermercado-title-color.png" alt="" />
          <h1>Tu compra es <b>100% segura</b></h1>
          <img src="../../public/security.png" alt="" />
        </header>

        <main class="main">
          <div class="center">
            <form action="" @submit.prevent="login()">
              <img src="../../public/user-color.png" alt="" />
              <div class="title">INICIAR SESIÓN</div>
              <span class="inputs">
                <span class="inputf">
                  <input
                    type="email"
                    v-model="username"
                    class="input"
                    placeholder="Correo Electrónico"
                  />
                  <span class="label">Correo Electrónico</span>
                </span>
                <span class="inputf">
                  <!-- <input
                    type="password"
                    class="input"
                    placeholder="Contraseña"
                  /> -->
                  <input
                  :type="showPassword ? 'text' : 'password'" 
                  v-model="password" 
                  class="input"
                  placeholder="contraseña" 
                  />
                  <span class="label">Contraseña</span>
                  <span
                    class="toggle-password"
                    @click="showPassword = !showPassword"
                  >
                    <i
                      :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
                    ></i>
                  </span>
                </span>
              </span>
              <button type="submit" class="btn">
                <span>INICIAR SESIÓN</span>
                <div class="dots">
                  <div class="dot" style="--delay: 0s"></div>
                  <div class="dot" style="--delay: 0.25s"></div>
                  <div class="dot" style="--delay: 0.5s"></div>
                </div>
              </button>
              <div class="text">
                ¿Nuevo usuario? Crear una cuenta <a href="#">Registrarse</a>
              </div>
            </form>
          </div>
        </main>

        <footer>
          <!-- <img src="../../public/img/logo-supermercado-xyz.png" alt="" /> -->
        </footer>
      </div>
    </div>
  </div>
</template>

<style>
@import '/src/assets/supermercado_login.css'
</style>