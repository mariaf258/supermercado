
import { ref } from 'vue';
import type { datosCards } from '@/utils/productos';

export const filteredProductos = ref<datosCards[]>([]);

export const filtrarProductos = (cards: datosCards[], inputValue: string) => {
    const respuestaInput = inputValue.toLowerCase();

    const respuesta = cards.filter(card =>
        card.name.toLowerCase().includes(respuestaInput)
    );
    
    filteredProductos.value = respuesta;
};
