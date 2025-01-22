import Producto from '@/utils/interfaces/interfaceProductos'
import { getFirestore, getDocs, addDoc, updateDoc, deleteDoc, collection, doc } from 'firebase/firestore';
import app from '@/utils/firebase'
import ProductoDefault from '@/utils/interfaces/interfaceProductos';

const db = getFirestore(app) 

export class productoServicio {

    async obtenerProductos() {
        const db = getFirestore();
        const productosSnapshot = await getDocs(collection(db, "productos"));
        return productosSnapshot.docs.map((doc) => {
            const data = doc.data();
            console.log("Producto mapeado:", data); 
            return { id: doc.id, ...data };
        });
    }
    
    
    async crearProducto(producto: ProductoDefault) {
        try {
            const docRef = await addDoc(collection(db, 'productos'), {
                name: producto.name,
                price: producto.price,
                amount: producto.amount,
                category: producto.category,
                image: producto.image ? producto.image.name : '', 
                unit: producto.unit, 
                customUnit: producto.unit === 'otra' ? producto.customUnit : '', 
            });
            return docRef.id; 
            } catch (error) {
            console.error('Error al agregar el producto:', error);
            throw error;
            }
    }

    async actualizarProducto(id: string, nuevosDatos: object): Promise<boolean> {
        try {
            if (!id || Object.keys(nuevosDatos).length === 0) {
                throw new Error('Id inválido o datos vacios.');
            }
            const docRef = await doc(collection(db, 'Productos'), id);
            await updateDoc(docRef, nuevosDatos);
            console.log('Producto actualizado correctamente:', id);
            return true;
        } catch (error) {
            console.log('Error al actualizar producto:', error);
            return false;
        }
    }

    async eliminarProducto(id: string): Promise<boolean> {
        try {
            console.log('Intentando eliminar producto con id:', id);
            const docRef = doc(db, 'Productos', id);
            const response = await deleteDoc(docRef);

            return true;
        } catch (error) {
            console.log('Error al eliminar el producto;', error);
            return false;
        }
    }

    filtrarProductosPorCategoria (Product: ProductoDefault[] ){
        const cadenaRegex = localStorage.getItem("modulo")|| '' ;
    
        const productosPorCategoria =  Product.filter((Product) => Product.etiqueta?.includes(cadenaRegex))
        .sort((a, b) => { 
            const numA = parseInt(a.id.split('-')[2], 10);
            const numB = parseInt(b.id.split('-')[2], 10);
            return numA - numB;
        });

        return productosPorCategoria;
    }
}