import { ref } from 'vue';
import type { datosCards } from '@/utils/productos';

export const filteredProductos = ref<datosCards[]>([]);

export const filtrarProductos = (cards: datosCards[], inputValue: string) => {
    const searchQuery = inputValue.toLowerCase();

    filteredProductos.value = cards.filter((card) =>
        card.name.toLowerCase().includes(searchQuery)
    );
};

