const userValid = 'pepe123';
const passValid = '123h';

let prueba = 1;

function validarCredenciales(){
    if ( document.getElementById("user").value == userValid &&  
    document.getElementById("password").value == passValid){
        alert("Bienvenido");
        document.getElementById("misCuentas").style.display = "block";
    }else{
        alert("Error en credenciales");
    }
}
