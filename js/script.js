
let opcion = prompt('Elige una opción: \nA- Agregar playera \nT - Terminar');
let tipoCara, piel, ojos, nariz, tipoCabello, colorCabello, boca = 99;

const tipoCara = [
    {
        id: 'tp01',
        descripcion: "ovalada",
        imagen: './img/tp01.jpg'
    },
    {
        id: 'tp02',
        descripcion: "redonda",
        imagen: './img/tp02.jpg'
    },
    {
        id: 'tp03',
        descripcion: "alargada",
        imagen: './img/tp03.jpg'
    }
];

const piel = [
    {
        id: 'cp01',
        descripcion: "blanca",
        imagen: './img/cp01.jpg'
    },
    {
        id: 'cp02',
        descripcion: "morena",
        imagen: './img/cp02.jpg'
    },
    {
        id: 'cp03',
        descripcion: "media",
        imagen: './img/cp03.jpg'
    }
];

const ojos = [
    {
        id: 'oj01',
        descripcion: "grandes",
        imagen: './img/oj01.jpg'
    },
    {
        id: 'oj02',
        descripcion: "redondos",
        imagen: './img/oj02.jpg'
    },
    {
        id: 'oj03',
        descripcion: "pequeños",
        imagen: './img/oj03.jpg'
    }
];

const nariz = [
    {
        id: 'na01',
        descripcion: "recta",
        imagen: './img/na01.jpg'
    },
    {
        id: 'na02',
        descripcion: "ancha",
        imagen: './img/na02.jpg'
    },
    {
        id: 'na03',
        descripcion: "delgada",
        imagen: './img/na03.jpg'
    }
];

const tipoCabello = [
    {
        id: 'tc01',
        descripcion: "lacio",
        imagen: './img/tc01.jpg'
    },
    {
        id: 'tc02',
        descripcion: "rizado",
        imagen: './img/tc02.jpg'
    },
    {
        id: 'tc03',
        descripcion: "pelón",
        imagen: './img/tc03.jpg'
    }
];

const colorCabello = [
    {
        id: 'cc01',
        descripcion: "negro",
        imagen: './img/cc01.jpg'
    },
    {
        id: 'cc02',
        descripcion: "rubio",
        imagen: './img/cc02.jpg'
    },
    {
        id: 'cc03',
        descripcion: "castaño",
        imagen: './img/cc03.jpg'
    }
];

const boca = [
    {
        id: 'bo01',
        descripcion: "delgada",
        imagen: './img/bo01.jpg'
    },
    {
        id: 'bo02',
        descripcion: "gruesa",
        imagen: './img/bo02.jpg'
    },
    {
        id: 'bo03',
        descripcion: "mediana",
        imagen: './img/bo03.jpg'
    }
];

function confirmar() {
    let descripcion = "Este es el resumen de tu pedido.\nTipo de cara "

    
    switch (tipoCara) {
        case "1":
            descripcion = descripcion + "Ovalada.\n";
            break;
        case "2":
            descripcion = descripcion + "Redonda.\n";
            break;
        case "3":
            descripcion = descripcion + "Alargada.\n";
            break;
    }

    
    descripcion = descripcion + "Color de piel: "
    switch (piel) {
        case "1":
            descripcion = descripcion + "Blanca.\n";
            break;
        case "2":
            descripcion = descripcion + "Morena.\n";
            break;
        case "3":
            descripcion = descripcion + "Media.\n";
            break;
    }
   
    
    descripcion = descripcion + "Tipo de ojos: "
    switch (ojos) {
        case "1":
            descripcion = descripcion + "Grandes.\n";
            break;
        case "2":
            descripcion = descripcion + "Redondos.\n";
            break;
        case "3":
            descripcion = descripcion + "Pequeños.\n";
            break;
    }
   
    
    descripcion = descripcion + "Tipo de nariz: "
    switch (nariz) {
        case "1":
            descripcion = descripcion + "Recta.\n";
            break;
        case "2":
            descripcion = descidescripcionrion + "Ancha.\n";
            break;
        case "3":
            descripcion = descripcion + "Delgada.\n";
            break;
    }
    
    
    descripcion = descripcion + "Cabello: "
    switch (tipoCabello) {
        case "1":
            descripcion = descripcion + "Lacio ";
            break;
        case "2":
            descripcion = descripcion + "Rizado ";
            break;
        case "3":
            descripcion = descripcion + "Pelón ";
            break;
    }
    
    
    descripcion = descripcion + "y "
    switch (colorCabello) {
        case "1":
            descripcion = descripcion + "negro.\n";
            break;
        case "2":
            descripcion = descripcion + "rubio.\n";
            break;
        case "3":
            descripcion = descripcion + "castaño.\n";
            break;
    }

    
    descripcion = descripcion + "Boca:  "
    switch (boca) {
        case "1":
            descripcion = descripcion + "Delgada.\n";
            break;
        case "2":
            descripcion = descripcion + "Gruesa.\n";
            break;
        case "3":
            descripcion = descripcion + "Mediana.\n";
            break;
    }

    descripcion = descripcion + "\nConfirmas (S/N)"    

    let desicion = prompt(descripcion);

    return desicion;


    
}


while (opcion != 't' && opcion != 'T') {


    tipoCara = prompt('Elige el tipo de cara: \n1- Ovalada \n2- Redonda \n3- Alargada \nT - Cancelar');


   
    if ( tipoCara == 'T' || tipoCara == "t" ) {
        alert('Cancelando tu pedido.')
        break;
    }

    piel = prompt('Elige el color de piel: \n1- Blanca \n2- Moreno \n3- Medio \nT - Cancelar');
    if ( piel == "t" || piel == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }
    
    ojos = prompt('Elige el tipo de ojos: \n1- Grandes \n2- Redondos \n3- Pequeños \nT - Cancelar');
    if ( ojos == "t" || ojos == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }
    
    nariz = prompt('Elige el tipo de nariz: \n1- Recta \n2- Ancha \n3- Delgada \nT - Cancelar');
    if ( nariz == "t" || nariz == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }
    
    tipoCabello = prompt('Elige el tipo de cabello: \n1- Lacio \n2- Rizado \n3- Pelón \nT - Cancelar');
    if ( tipoCabello == "t" || tipoCabello == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }

    colorCabello = prompt('Elige el color de cabello: \n1- Negro \n2- Rubio \n3- Castaño \nT - Cancelar');
    if ( colorCabello == "t" || colorCabello == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }

    boca = prompt('Elige el tipo de boca: \n1- Delgada \n2- Gruesa \n3- Mediana \nT - Cancelar');
    if ( boca == "t" || boca == "T" ) {
        alert('Cancelando tu pedido.')
        break;
    }

    

   let confirmado = confirmar();


   /* opcion = prompt('Confirma tu pedido: \n Cara ' + tipoCara + '. Piel ' + piel + '. Ojos ' + ojos + '\nNariz ' + nariz + '. Boca ' + boca + '\nCabello ' + tipoCabello + ' ' + colorCabello + '\nT - Cancelar - Cualquier otra opción para confirmar.')
    */


    if ( confirmado == "s" || confirmado == "S" ){
        alert('Playera agregada, enviada a producion. Espera tu envíio')
    } else {
        alert('Pedido cancelado')    
    }


    
    opcion = prompt('Elige una opción: \nA- Agregar playera \nT - Terminar');
}


alert('Gracias. Hemos terminado');