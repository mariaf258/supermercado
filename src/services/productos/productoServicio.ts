import Productos from '@/utils/interfaces/interfaceProductos'
import { getFirestore, getDocs, addDoc, updateDoc, deleteDoc, collection, doc } from 'firebase/firestore';
import app from '@/utils/firebase'

const db = getFirestore(app) 

export class categoriasServicio {

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
                throw new Error('Los datos del empleado son inválidos.');
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
        try {
            if (!id || Object.keys(nuevosDatos).length === 0) {
                throw new Error('Id inválido o datos vacios.');
            }
            const docRef = await doc(collection(db, 'Categorias'), id);
            await updateDoc(docRef, nuevosDatos);
            console.log('Categoria actualizada correctamente:', id);
            return true;
        } catch (error) {
            console.log('Error al actualizar categoria:', error);
            return false;
        }
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