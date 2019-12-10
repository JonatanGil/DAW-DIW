errores = new Array();
errores[0] = "Nombre invalido";
errores[1] = "Apellido invalido";
errores[2] = "e-mail invalido";
errores[3] = "DNI no valido";
errores[4] = "contrasela invalida";
errores[5] = "Contraseña no igual";
errores[6] = "IP invalida";
errores[7] = "telefono incorrecto";

var contraReal;
var todoOk = false;


function enviar() {

  console.log("entra en enviar");

  nombreCorrecto(document.getElementById("nombre").value);
  apellidoCorrecto(document.getElementById("apellidos").value);
  correoCorrecto(document.getElementById("correo").value);
  DNICorrecto(document.getElementById("DNI").value);
  telefonoCorrecto(document.getElementById("telefono").value);
  pwdCorrecto(document.getElementById("pwd").value);
  pwdRepeatCorrecto(document.getElementById("pwd2").value);
  ipValidar(document.getElementById("IP").value);

  todoOK();

  if(todoOK){
    enviarInfo();
  /*  alert("entra en fecht");
    fetch('PHP/login')
    .then(Response => Response.text())
    .then(Response => console.log(Response)= new DOMParser(Response.parseFromHTML(document.querySelectorAll("*")))
      ).catch (err => console.log("ERROR: " + err));*/
  }

  todoOK=false;

}

function enviarInfo() {
  var formulario = new FormData(document.getElementById("fomularioChachi"));

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
    }
  }



  xhr.open("POST","http://localhost/EjerciciosPHP/FormularioAJAX/PHP/registro.php");
  xhr.send(formulario);
}

function telefonoCorrecto(telefono) {

  var expresionRegular = /^([0-9]+){9}$/;

  if (expresionRegular.test(telefono) == true) {
    errores[7] = "Correcto";
  } else {
    errores[7] = "telefono incorrecto";
  }


}

function nombreCorrecto(nombre) {
  var expresionRegular = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

  if (expresionRegular.test(nombre) == true) {
    errores[0] = "Correcto";
    console.log("nombre correcto:" + nombre);
  } else {
    errores[0] = "El nombre es incorrecto";
  }
}


function apellidoCorrecto(apellido) {

  var expresionRegular = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

  if (expresionRegular.test(apellido) == true) { errores[1] = "Correcto"; } else {
    errores[1] = "El apellido es incorrecto";
  }
}

function correoCorrecto(correo) {

  var expresionRegular = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
  if (expresionRegular.test(correo) == true) {
    /*alert("La dirección de email " + correo + " es correcta.");*/

    errores[2] = "Correcto";
  } else {
    errores[2] = "La dirección de email es incorrecta";
  }
}

function pwdCorrecto(pwd) {

  var regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&]){8,50}/;

  if (regexp_password.test(pwd)) {
    errores[4] = "Correcto";
    contraReal = pwd;
  } else {
    errores[4] = "Contraseña invalida";
  }

}

function pwdRepeatCorrecto(pwd2) {

  var regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&]){8,50}/;

  if (contraReal == pwd2) {
    /*5 PARA SI LA PWD ES IGUAL A LA INTRODUCIDA Y ES CORRECTA 5 DEL ARRAY*/
    errores[5] = "Correcto";
  } else {
    errores[5] = "Contraseña no igual";
  }
}



function ipValidar(ip) {

  var patronIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  if (patronIp.test(ip) == true) {

    // Ip correcta
    errores[6] = "Correcto";
    //element.style.color = "#000";
  } else {
    // Ip incorrecta
    errores[6] = "IP invalida";
    //element.style.color = "#f00";

  }


}
function DNICorrecto(dni) {

  var numero;
  var letr;
  var letra;
  var expresion_regular_dni;

  /*cosa copiada de ethernet*/
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
  /*si no cumple 8 digitos y una letra todo junto error*/
  if (expresion_regular_dni.test(dni) == true) {
    /*Obtienes los numeros menos el ultimo que es la letra*/
    numero = dni.substring(0, dni.length - 1);

    /*Obtienes la letra el ultimo digito*/
    letr = dni[dni.length - 1];

    /*divides el dni por 23 para saber que letra toca*/
    numero = numero % 23;

    letra = 'TRWAGMYFPDXBNJZSQVHLCKET';

    /*obtienes la letra para validar con el dni enconcreto*/
    letra = letra[numero];

    /*pasamos la letra a uper por si acaso lo a puesto en minuscula*/
    if (letra != letr.toUpperCase()) {
      errores[3] = "Dni erroneo, la letra del DNI no coincide";
    } else {
      errores[3] = "Correcto";
    }

  } else {
    errores[3] = "Dni erroneo, formato no válido";
  }
}


function todoOK() {


  for (let i = 0; i < 7; i++) {

    if (errores[i] == "Correcto") {
      todoOk = true;
    } else {
      todoOk = false; break;
    }

  }

  if (!todoOk) {
    alert("Nombre:" + errores[0] + "\n" +
      "Apellidos:" + errores[1] + "\n" +
      "e-mail:" + errores[2] + "\n" +
      "DNI:" + errores[3] + "\n" +
      "Password:" + errores[4] + "\n" +
      "Password es igual?:" + errores[5] + "\n" +
      "IP del equipo:" + errores[6] + "\n" +
      "Telefono:" + errores[7] + "\n");
  } else {
    alert("TODO OK");
  }

  console.log("entra en todo ok");

}
