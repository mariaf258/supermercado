
import { defineStore } from 'pinia';

export const useProductosGuardadosStore = defineStore('productosGuardados', {
    state: () => ({
        productosGuardados: [] as Array<{ id: string; name: string; [key: string]: any }>,
    }),
    actions: {
        guardarProducto(producto: { id: string; name: string; [key: string]: any }) {
        this.productosGuardados.push(producto);
        },
    },
});
