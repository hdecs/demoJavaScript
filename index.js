const userValid = 'pepe123';
const passValid = '123h';

const data = [
    {
        "count": [
            {
                "name": "Ahorros",
                "numberCount": "102-2030203020",
                "currency": "01",
                "total": "3500.00",
                "transaction": [
                    {
                        "operation": "1301",
                        "description": "Restaurante - La cocina peruana",
                        "importe": "-26.00"
                    },
                    {
                        "operation": "1302",
                        "description": "Speaker Sony",
                        "importe": "-74.00"
                    },
                    {
                        "operation": "1303",
                        "description": "La casa de tu telefono",
                        "importe": "-209.00"
                    }
                ]
            },
            {
                "name": "CTS",
                "numberCount": "394-2036203033",
                "currency": "01",
                "total": "9400.47"
            }
        ],
        "benefits": [
            {
                "title": "Tienes un credito aprobado en tu TC de 25.000",
                "description": "Es un beneficio que te permite, ante cualquier eventualidad, retirar efectivo de tu Tarjeta de Crédito. El monto que puedes retirar es un porcentaje que se aprueba de la línea de crédito de tu Tarjeta, este porcentaje varía por cliente y se asigna de acuerdo a tu evaluación crediticia. Este porcentaje se informará al momento de la entrega de tu Tarjeta de Crédito.",
                "url": "http://wwww.google.com.pe",
                "src": "https://megalopolismx.com/images/noticias/201803/otorga-bancomext-linea-de-credito-a-serfimex-para-impulso-a-pymex-y-turismo.jpg"
            },
            {
                "title": "Apertura tu fondo mutuo",
                "description": "Es una alternativa moderna y sencilla donde puedes invertir tu dinero con múltiples beneficios. Está formado por aportes voluntarios de clientes (personas y empresas) que son invertidos en el Mercado de Capitales buscando una rentabilidad mayor que los productos tradicionales de ahorro.",
                "url": "http://wwww.google.com.pe",
                "src": "https://www.newsweekpakistan.com/daisnews/wp-content/uploads/2014/01/pakistan-economy-growth.jpg"
            }
        ]
    }];


function validarCredenciales() {
    if (document.getElementById("user").value == userValid &&
        document.getElementById("password").value == passValid) {
        alert("Bienvenido");
        document.getElementById("mensajeCredenciales").style.display = "none";
        document.getElementById("misCuentas").style.display = "block";
        //document.getElementById("misMovimientos").style.display = "block";
        document.getElementById("misBeneficios").style.display = "block";
    } else {
        document.getElementById("mensajeCredenciales").style.display = "block";
    }
}

function obtenerMovimiento(field) {
    let cuentas = data[0].count;
    
    let table = document.getElementById("tableBody");

    cuentas.forEach(cuenta => {
       if ( cuenta.numberCount == field ){
            let transaccion = cuenta.transaction;
            transaccion.forEach(movimiento => {
                table.innerHTML += "<tr><td>"+movimiento.operation+
                "</td><td>"+movimiento.description+
                "</td><td>"+movimiento.importe+"</td></tr>";
            }); 
            document.getElementById("misMovimientos").style.display = "block";
       }
    })
}

