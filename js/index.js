const carrito = [];

const productos = [{nombre:"Microprocesador Intel" , precio: 120000 , codigo: 1, stock: 5},
                {nombre:"Nvidia 2070 super" , precio: 180000, codigo: 2, stock: 3},
                {nombre:"Memoria Ram Viper 8gb" , precio: 35000 , codigo: 3, stock: 12},
                {nombre:"Placa Madre Gigabyte" , precio: 68000 , codigo: 4 , stock: 4},
                {nombre:"Teclado RedDragon" , precio: 25000 , codigo: 5 , stock: 5},
                {nombre:"Mouse Red Dragon" , precio: 18000 , codigo: 6 , stock: 3}];


function buscarProducto(codigo){

    let articulo = productos.find((producto)=> producto.codigo === codigo)
    return articulo;
}

function comprobarStock(stock){
    if(stock === 0){
        alert("Producto sin stock");
        return false;
    } else return true
}

function quitarProducto(){
    if(carrito.length > 0){

        let codigo = parseInt(prompt("Ingrese el codigo del producto que desea quitar: "));
        const idx = carrito.findIndex((articulo) => articulo.codigo === codigo);
        if(idx != -1){
            carrito[idx].stock += 1 ;
            carrito.splice(idx,1);
            console.table(carrito);

        }else alert("No se encontró el codigo del producto");

    }else alert("El carrito esta vacio")
    



}

function comprar(){

    let cod = prompt("Ingrese el codigo del producto que desea comprar: ")

    const articulo = productos.find((producto) => producto.codigo === parseInt(cod));
    let stock = true;

    if( (articulo != undefined) && comprobarStock(articulo.stock)){
        articulo.stock-=1;
        carrito.push(articulo);
        alert(articulo.nombre +" se agregó al carrito\nStock Disponible: "+articulo.stock);

        let respuesta = confirm("Desea realizar otra compra?");

        if(respuesta === true){

            comprar();

        }else{

            console.clear();
            console.table(carrito);
            const carro = new Carrito(carrito);
            console.log("Esto tiene adentro carro: ",carro);
            const totalPagar = carro.subtotalCarrito();

            console.log("El total a pagar es: $", totalPagar);

        }
        
        

    }else if(articulo === undefined){
        alert("Codigo no encontrado")
        comprar();
    }else comprar();
    
}

