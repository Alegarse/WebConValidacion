function validar() { // Validación de datos
   // datos a validar
   var nombre = document.getElementById('nombre').value;
   var apellidos = document.getElementById('apellidos').value;
   var email = document.getElementById('email').value;
   var fecha = document.getElementById('DPC_edit1_DD/MM/YYYY').value;
   var provincia = document.getElementById('provincia').value;
   var valido = true;
   // Controles de validación
   // Para el Nombre
   if (nombre.length == 0 || parseInt(nombre)) {
      valido = false;
      document.getElementById('nombreHelp').style.visibility = "visible";
   }
   // Para el Apellido
   if (apellidos.length == 0 || parseInt(apellidos)) {
      valido = false;
      document.getElementById('apellidosHelp').style.visibility = "visible";
   }
   // Para el Email
   if (!(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email))) {
      valido = false;
      document.getElementById('emailHelp').style.visibility = "visible";
   }
   // Para la Fecha
   if (fecha == "") {
      valido = false;
      document.getElementById('fechaNacHelp').style.visibility = "visible";
   }
   // Para la Provincia
    if (provincia == 0) {
       valido = false;
       document.getElementById('provinciaHelp').style.visibility = "visible";
    }
   // Para el CheckBox
   if (!aceptar.checked) {
      valido = false;
      document.getElementById('aceptarHelp').style.visibility = "visible";
   }

   return valido;
}

function quitarError(campo) {
   // Cada vez que se cambia un campo, se elimina mensaje de error
   document.getElementById(campo).style.visibility = "hidden";
}

function limpiarResultado() {
   // Cada vez que se pulsa el botón submit, se elimina el resultado anterior
   document.getElementById('resultado').innerHTML = "";
}