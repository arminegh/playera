
let opcion = prompt('Elige una opción: \nA- Agregar playera \nT - Terminar');


while (opcion != 't' && opcion != 'T') {


    let tipoCara = prompt('Elige el tipo de cara: \n01- Ovalada \n02- Redonda \n03- Alargada \nT - Cancelar');
   
    if ( tipoCara == 't' || tipoCara == 'T' ) {
        alert('Cancelando tu pedido.')
        break;
    }

    let piel = prompt('Elige el color de piel: \n01- Blanca \n02- Moreno \n03- Medio \nT - Cancelar');
    if ( piel == "t" || piel == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }
    
    let ojos = prompt('Elige el tipo de ojos: \n01- Grandes \n02- Redondos \n03- Pequeños \nT - Cancelar');
    if ( ojos == "t" || ojos == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }
    
    let nariz = prompt('Elige el tipo de nariz: \n01- Recta \n02- Ancha \n03- Delgada \nT - Cancelar');
    if ( nariz == "t" || nariz == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }
    
    let tipoCabello = prompt('Elige el tipo de cabello: \n01- Lacio \n02- Rizado \n03- Pelón \nT - Cancelar');
    if ( tipoCabello == "t" || tipoCabello == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }

    let boca = prompt('Elige el tipo de cabello: \n01- Delgada \n02- Gruesa \n03- Mediana \nT - Cancelar');
    if ( boca == "t" || boca == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }

    let colorCabello = prompt('Elige el color de cabello: \n01- Lacio \n02- Rizado \n03- Pelón \nT - Cancelar');
    if ( colorCabello == "t" || colorCabello == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }


    opcion = prompt('Confirma tu pedido: \n Cara ' + tipoCara + '. Piel ' + piel + '. Ojos ' + ojos + '\nNariz ' + nariz + '. Boca ' + boca + '\nCabello ' + tipoCabello + ' ' + colorCabello + '\nT - Cancelar - Cualquier otra opción para confirmar.')

    if ( colorCabello != "t" && colorCabello != "T" ){
        alert('Playera agregada, enviada a producion. Espera tu envíio')
    } else {
        alert('Pedido cancelado')    
    }


    
    opcion = prompt('Elige una opción: \nA- Agregar playera \nT - Terminar');
}


alert('Gracias. Hemos terminado');