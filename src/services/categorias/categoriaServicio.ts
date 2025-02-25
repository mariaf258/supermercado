import Categoria from '@/utils/interfaces/interfaceCategoria'
import { getFirestore, getDocs, addDoc, updateDoc, deleteDoc, collection, doc } from 'firebase/firestore';
import app from '@/utils/firebase'

const db = getFirestore(app) 

export class categoriaServicio {

    async obtenerCategorias () : Promise<Categoria[] >{
        try {
            const response = await getDocs(collection(db, 'Categorias'))
            return response.docs.map((registro) => ({
                id: registro.id,
                ...registro.data()
            }))
        } catch (error) {
            return [];
        }
    }
    
    async crearCategoria(categoria: Categoria){
        try {
            if (!categoria || Object.keys(categoria).length === 0) {
                throw new Error('Los datos de la categoria son inválidos.');
            }
            const { id, ...datosId } = categoria;
            const response = await addDoc(collection(db, 'Categorias'), datosId);
            console.log('Categoria creada:', response.id,);
            
            await this.obtenerCategorias();
            return response;
        } catch (error) {
            console.log('Error al crear categoria:', error);
        }
    }

    async actualizarCategoria(id: string, nuevosDatos: object): Promise<boolean> {
            const db = getFirestore();
            const productosSnapshot = await getDocs(collection(db, "productos"));
            
            productosSnapshot.forEach(async (productoDoc) => {
                const producto = productoDoc.data();
                if (!producto.categoria) {
                    console.log(`Actualizando producto ${productoDoc.id}...`);
                await updateDoc(doc(db, "productos", productoDoc.id), {
                  categoria: "General" // O asigna la categoría que prefieras
                });
            }
        });
        
    }

    async eliminarCategoria(id: string): Promise<boolean> {
        try {
            console.log('Intentando elimminar empleado con id:', id);
            const docRef = doc(db, 'Categorias', id);
            const response = await deleteDoc(docRef);

            return true;
        } catch (error) {
            console.log('Error al eliminar el empleado;', error);
            return false;
        }
    }

}
