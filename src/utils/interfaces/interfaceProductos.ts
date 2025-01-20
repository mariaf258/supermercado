export interface Productos {
    id?: string
    image?: string
    name?: string
    amount?: string
    price?: string
    category?: string
    unit?: string
    customUnit?: string
}

export default class ProductosDefault implements Productos {
    id?: "";
    image?: "";
    name?: "";
    amount?: "";
    price?: "";
    category?: "";
    unit?: "";
    customUnit?: "";
}