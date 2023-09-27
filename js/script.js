
let opcion = prompt('Elige una opción: \nA- Agregar playera \nT - Terminar');

while (opcion != 't' && opcion != 'T') {

    let tipoCara = prompt('Elige una opción: \n01- Ovalada \n02- Redonda \n03- Alargada \nT - Cancelar');
    if ( tipoCara == "t" && tipoCara == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }

    let piel = prompt('Elige una opción: \n01- Blanca \n02- Moreno \n03- Medio \nT - Cancelar');
    if ( piel == "t" && piel == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }
    let ojos = prompt('Elige una opción: \n01- Grandes \n02- Redondos \n03- Pequeños \nT - Cancelar');
    if ( ojos == "t" && ojos == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }
    let nariz = prompt('Elige una opción: \n01- Recta \n02- Ancha \n03- Delgada \nT - Cancelar');
    if ( nariz == "t" && nariz == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }
    let tipoCabello = prompt('Elige una opción: \n01- Lacio \n02- Rizado \n03- Pelón \nT - Cancelar');
    if ( tipoCabello == "t" && tipoCabello == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }
    let colorCabello = prompt('Elige una opción: \n01- Obscuro \n02- Rubio \n03- Castaño \nT - Cancelar');
    if ( colorCabello == "t" && colorCabello == "T" ) {
        alert('Cancelando tu pedido.')
        break;

        tipoCara, piel, ojos, nariz, boca, tipoCabello, colorCabello  = 99

    opcion = prompt('Confirma tu pedido: \n Cara ' + tipoCara + '\nPiel ' + piel + '\Ojos ' + ojos + '\Nariz ' + nariz + '\nBoca ' + boca + '\nCabello ' + tipoCabello + ' ' + colorCabello + '\nT - Cancelar')
    if ( colorCabello == "t" && colorCabello == "T" ){
        alert('Playera agregada, enviada a producion. Espera tu envíio')
    } else {
        alert('Pedido cancelado')    
    }


        
    opcion = prompt('Elige una opción: \nA- Agregar playera \nT - Terminar');
}


alert('Gracias. Hemos terminado');