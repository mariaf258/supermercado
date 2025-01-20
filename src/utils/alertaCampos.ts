import ProductosDefault from '@/utils/interfaces/interfaceProductos';

export const alertaCamposProducto = (datos: ProductosDefault): boolean => {
    if (
        !datos.name ||
        !datos.amount ||
        !datos.price ||
        !datos.category 
    ) {
        alert("Campos obligatorios");
        return false;
    }
    return true;
};