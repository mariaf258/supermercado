<script setup lang="ts">
import { ref, onMounted } from 'vue'

const productos = ref([])
const guardarProductos = ref([])


function buttonsVistas() {
    const productos_guardados = localStorage.getItem('productos')
    if (productos_guardados) {
        productos.value = JSON.parse(productos_guardados)
    }

    const useGuardarProductos = localStorage.getItem('guardarProductos')
    if (useGuardarProductos) {
        guardarProductos.value = JSON.parse(useGuardarProductos)
    }
}

onMounted(() => {
    buttonsVistas()
})


// import { defineComponent, PropType } from 'vue';
// import { useProductosGuardadosStore } from '@/stores/productosGuardados';

// export default defineComponent({
//   props: {
//     producto: {
//       type: Object as PropType<{ id: string; name: string; descripcion: string }>,
//       required: true,
//     },
//   },
//   setup(props) {
//     const productosStore = useProductosGuardadosStore();

//     const guardarEnFavoritos = (producto: { id: string; name: string; descripcion: string }) => {
//       productosStore.guardarProducto(producto);
//       alert('Producto guardado');
//     };

//     return { guardarEnFavoritos };
//   },
// });

</script>

<template>
    <div class="options">
        <button @click="productosGuardados" class="icon-button">
            <img src="../../public/bookmark-color.png" alt="bookmark-color" />
        </button>
            
        <button @click="productosAComprar" class="icon-button">
            <img src="../../public/add-cart-color.png" alt="add-cart-color" />
        </button>
    </div>
</template>

<style>
@import '/src/assets/iconos.css'
</style>