import { createRouter, createWebHistory } from 'vue-router'
import inicio from '@/views/inicio.vue'
import supermercado_login from '@/views/supermercado_login.vue'
import guardadosVacio from '@/components/guardadosVacio.vue'
import guardados from '@/views/guardados.vue'
import carritoVacio from '@/components/carritoVacio.vue'
import carrito from '@/views/carrito.vue'
import alimentos from '@/views/alimentos.vue'
import aseoPersonal from '@/views/aseoPersonal.vue'
import aseoHogar from '@/views/aseoHogar.vue'
import historialCompras from '@/views/historialCompras.vue'
import inventario from '@/views/inventario.vue'
import agregarProducto from '@/components/agregarProducto.vue'
import actualizarProducto from '@/components/actualizarProducto.vue'
import eliminarProducto from '@/components/eliminarProducto.vue'
import form_actualizar from '@/components/form_actualizar.vue'
import papelera from '@/components/papelera.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio
    },    
    {
      path: '/supermercado_login',
      name: 'supermercado_login',
      component: supermercado_login
    },
    {
      path: '/guardadosVacio',
      name: 'guardadosVacio',
      component: guardadosVacio
    },
    {
      path: '/guardados',
      name: 'guardados',
      component: guardados
    },  
    {
      path: '/carritoVacio',
      name: 'carritoVacio',
      component: carritoVacio
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: carrito
    },
    {
      path: '/alimentos',
      name: 'alimentos',
      component: alimentos
    },
    {
      path: '/aseoPersonal',
      name: 'aseoPersonal',
      component: aseoPersonal
    },
    {
      path: '/aseoHogar',
      name: 'aseoHogar',
      component: aseoHogar
    },
    {
      path: '/historialCompras',
      name: 'historialCompras',
      component: historialCompras
    },  
    {
      path: '/inventario',
      name: 'inventario',
      component: inventario
    },  
    {
      path: '/agregarProducto',
      name: 'agregarProducto',
      component: agregarProducto
    },
    {
      path: '/actualizarProducto',
      name: 'actualizarProducto',
      component: actualizarProducto
    },  
    {
      path: '/eliminarProducto',
      name: 'eliminarProducto',
      component: eliminarProducto
    },
    {
      path: '/form_actualizar',
      name: 'form_actualizar',
      component: form_actualizar,
      props: true,
    },
    // {
    //   path: '/papelera',
    //   name: 'papelera',
    //   component: papelera
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})


let conectado = false;

router.beforeEach((to) => {

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (isAuthenticated && to.path === '/supermercado_login') {
    return { path: '/' };
  }

  if (!isAuthenticated && to.path !== '/supermercado_login') {
    return { path: '/supermercado_login' };
  }
});

function iniciarSesion() {
  conectado = true;
  localStorage.setItem('isAuthenticated', 'true');
}

function cerrarSesion() {
  conectado = false;
  localStorage.removeItem('isAuthenticated');
}


export { iniciarSesion, cerrarSesion }

export default router
