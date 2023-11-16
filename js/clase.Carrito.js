class Carrito{
    constructor(carritoDeCompras){
        this.carritoCliente = carritoDeCompras;
    }

    subtotalCarrito(){
        if(this.carritoCliente.length > 0){
            return this.carritoCliente.reduce((acumulador,articulo) => acumulador + articulo.precio,0);
        }
    }
}