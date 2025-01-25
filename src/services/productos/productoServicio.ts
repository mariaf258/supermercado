import Producto from '@/utils/interfaces/interfaceProductos'
import { getFirestore, getDocs, addDoc, updateDoc, deleteDoc, collection, doc } from 'firebase/firestore';
import app from '@/utils/firebase'
import ProductoDefault from '@/utils/interfaces/interfaceProductos';

const db = getFirestore(app) 

export class productoServicio {

    async obtenerProductos() {
        try {
            const productosRef = collection(db, 'productos');
            const snapshot = await getDocs(productosRef);
            const productos = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            return productos;
        } catch (error) {
            console.error('Error al obtener productos:', error);
            throw error;
        }
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
                throw new Error('Id inválido o datos vacíos.');
            }
            const docRef = doc(db, 'productos', id); 
            await updateDoc(docRef, nuevosDatos);
            console.log('Producto actualizado correctamente:', id);
            return true;
        } catch (error) {
            console.error('Error al actualizar producto:', error);
            return false;
        }
    }
    

    async eliminarProducto(id: string): Promise<boolean> {
        try {
            const docRef = doc(db, 'productos', id); 
            await deleteDoc(docRef); 
            console.log(`Producto con ID ${id} eliminado correctamente.`);
            return true;
        } catch (error) {
            console.error('Error al eliminar producto:', error);
            return false;
        }
    }
    

    filtrarProductosPorId(Product: ProductoDefault[]): ProductoDefault[] {
        const cadenaRegex = localStorage.getItem('modulo') || '';
    
        const productosPorCategoria = Product.filter((product) =>
            product.category?.includes(cadenaRegex)
        ).sort((a, b) => {
            const numA = parseInt(a.id.split('-')[2], 10);
            const numB = parseInt(b.id.split('-')[2], 10);
            return numA - numB;
        });
    
        return productosPorCategoria;
    }
    
}