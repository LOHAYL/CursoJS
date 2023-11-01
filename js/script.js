
function menu(){

    let bandera = true
    let totalAbonar = 0
    let contador = 0

    do{

        let opcion = parseInt(prompt("Seleccione el producto que desea comprar: \n1)Lima Negra Super ($469)\n2)Lima Block Negra ($543)\n3)Esmalte Semipermanente ($1885)\n4)Removedor de Cuticulas ($2731)\n5)Escofia de Metal Premium ($2867)\n6)Salir\nTotal de productos en el carrito: "+contador+"\nTotal a abonar: $"+totalAbonar))

        switch (opcion){
            case 1: totalAbonar += 469
            contador++
            break
            case 2: totalAbonar += 543
            contador++
            break
            case 3: totalAbonar += 1885
            contador++
            break
            case 4: totalAbonar += 2731
            contador++
            break
            case 5: totalAbonar += 2867
            contador++
            break
            case 6: bandera = false
            break
            
            default : alert("Seleccione una opcion valida")
            break
        }


    }while (bandera)

    
    if(totalAbonar != 0){

        if(confirm("¿Tienes algun codigo de descuento?")){

            let aplicarDescuento = parseInt(descuento(totalAbonar))
            
            alert("Total que debe abonar: $"+aplicarDescuento+"\n\nUsted ahorro: $"+(totalAbonar-aplicarDescuento))
            

        }else alert("Total que debes abonar: $"+totalAbonar)
        
    }
        
}

function descuento(total){

    let codigo = prompt("Ingresa el codigo de descuento: ")

    if(codigo === "VIP2023"){
        total = total - (total*20)/100
        return total

    }else{
        alert("Codigo Incorrecto")
        return total
    }

}


menu()

