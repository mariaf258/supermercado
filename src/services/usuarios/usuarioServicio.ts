import Usuario from '@/utils/interfaces/interfaceUsuarios'
import { getFirestore, getDocs, addDoc, updateDoc, deleteDoc, collection, doc } from 'firebase/firestore';
import app from '@/utils/firebase'

const db = getFirestore(app) 

export class usuarioServicio {

    async obtenerUsuario () : Promise<Usuario[] >{
        try {
            const response = await getDocs(collection(db, 'Usuarios'))
            return response.docs.map((registro) => ({
                id: registro.id,
                ...registro.data()
            }))
        } catch (error) {
            return [];
        }
    }
    
    async crearUsuario(usuario: Usuario){
        try {
            if (!usuario || Object.keys(usuario).length === 0) {
                throw new Error('Los datos del usuario son inválidos.');
            }
            const { id, ...datosId } = usuario;
            const response = await addDoc(collection(db, 'Usuarios'), datosId);
            console.log('Usuario creado:', response.id,);
            
            await this.obtenerUsuario();
            return response;
        } catch (error) {
            console.log('Error al crear el usuario:', error);
        }
    }

    async actualizarUsuario(id: string, nuevosDatos: object): Promise<boolean> {
        try {
            if (!id || Object.keys(nuevosDatos).length === 0) {
                throw new Error('Id inválido o datos vacios.');
            }
            const docRef = await doc(collection(db, 'Usuarios'), id);
            await updateDoc(docRef, nuevosDatos);
            console.log('Usuario actualizado correctamente:', id);
            return true;
        } catch (error) {
            console.log('Error al actualizar el usuario:', error);
            return false;
        }
    }

    async eliminarUsuario(id: string): Promise<boolean> {
        try {
            console.log('Intentando elimminar usuario con id:', id);
            const docRef = doc(db, 'Usuarios', id);
            const response = await deleteDoc(docRef);

            return true;
        } catch (error) {
            console.log('Error al eliminar el usuario;', error);
            return false;
        }
    }

}
