
let otro_pedido = 'N';
let pedido_descripcion = "";
let piel = 0;
let ojos = 0;
let boca = 0;
let nariz = 0;
let total_pedidos = 0;

do {

    do {
        piel = parseInt(prompt ("Indica el color de piel\n1 Morena\n2 Trigeña\n3 Blanca "));
    } while (piel != 1 && piel !=2 && piel != 3);

    do {
        ojos = parseInt(prompt ("Indica el tamaño de los ojos \n1 Chicos\n2 Medianos\n3 Grandes "));
    } while (ojos != 1 && ojos !=2 && ojos != 3);

    do {
        boca = parseInt(prompt ("Indica el tamaño de la boca \n1 Chica\n2 Mediana\n3 Grande "));
    } while (boca != 1 && boca !=2 && boca != 3);

    do {
        nariz = parseInt(prompt ("Indica el tamaño de la nariz \n1 Chica\n2 Mediana\n3 Grande "));
    } while (nariz != 1 && nariz !=2 && nariz != 3);


    pedido_descripcion = armar_pedido(piel, ojos, nariz, boca);
    prompt("Pedido " + total_pedidos + ":\n" + pedido_descripcion + "\nAgregado correctamente.");
    
    otro_pedido = prompt("Deseas agregar otra playera (S/N)").toUpperCase();    
} while (otro_pedido == "S" );


alert("Total de playeras " + total_pedidos + "\nGracias por tu compra.");

function armar_pedido(piel, ojos, nariz, boca) {
    let pedido_armado = "";

    total_pedidos += 1;

    switch (piel) {
        case 1:
            pedido_armado = "Piel morena. ";
            break; // Cortar la comparación entre los demás cases
        
        case 2:
            pedido_armado = "Piel Trigeña. ";
            break;
        
        case 3:
            pedido_armado = "Piel blanca. ";
            break;
    }

    switch (ojos) {
        case 1:
            pedido_armado += "Ojos chicos. ";
            break; // Cortar la comparación entre los demás cases
        
        case 2:
            pedido_armado += "Ojos medianos. ";
            break;
        
        case 3:
            pedido_armado += "Ojos grandes. ";
            break;
    }

    switch (nariz) {
        case 1:
            pedido_armado += "Nariz chica. ";
            break; // Cortar la comparación entre los demás cases
        
        case 2:
            pedido_armado += "Nariz mediana. ";
            break;
        
        case 3:
            pedido_armado += "Nariz grande. ";
            break;
    }

    switch (boca) {
        case 1:
            pedido_armado += "Boca chica. ";
            break; // Cortar la comparación entre los demás cases
        
        case 2:
            pedido_armado += "Boca mediana. ";
            break;
        
        case 3:
            pedido_armado += "Boca grande. ";
            break;
    }

    console.log(pedido_armado);
    return pedido_armado;
}