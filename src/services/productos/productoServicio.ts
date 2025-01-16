import Producto from '@/utils/interfaces/interfaceProductos'
import { getFirestore, getDocs, addDoc, updateDoc, deleteDoc, collection, doc } from 'firebase/firestore';
import app from '@/utils/firebase'

const db = getFirestore(app) 

export class productoServicio {

    async obtenerProductos () : Promise<Producto[] >{
        try {
            const response = await getDocs(collection(db, 'Productos'))
            return response.docs.map((registro) => ({
                id: registro.id,
                ...registro.data()
            }))
        } catch (error) {
            return [];
        }
    }
    
    async crearProducto(producto: Producto){
        try {
            if (!producto || Object.keys(producto).length === 0) {
                throw new Error('Los datos del producto son inválidos.');
            }
            const { id, ...datosId } = producto;
            const response = await addDoc(collection(db, 'Productos'), datosId);
            console.log('Producto creado:', response.id,);
            
            await this.obtenerProductos();
            return response;
        } catch (error) {
            console.log('Error al crear categoria:', error);
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