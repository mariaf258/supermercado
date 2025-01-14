export interface Usuarios {
    id_usuario?: string
    name?: string
    email?: string
    password?: string
}

export default class UsuariosDefault implements Usuarios {
    id_usuario?: "";
    name?: "";
    email?: "";
    password?: "";
}
