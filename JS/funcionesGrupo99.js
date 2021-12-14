document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
   
 });

 function validarFormulario(evento) {
   evento.preventDefault();
   var usuario = document.getElementById('user').value;
   var correo = document.getElementById('correo').value;
   var fechaNac = document.getElementById('fechaNacimiento').value;
   var nac = document.getElementById('Nacionalidad').value;
   var provincia = document.getElementById('Provincia').value;
   
   if(usuario.length ===0) {
     alert('Ingresa tu Nombre y Apellido');
     return;
   }
   if(correo.length === 0) {
    alert('Ingresa tu email');
      return;
    } 
     if (!emailRegex.test(campo.value)){
     alert('Ingresa un email valido');
       return;
     } 
      
   if(fechaNac.length === 0) {
     alert('Ingresa tu fecha de nacimiento');
     return;
   }
   if(nac.length === 0) {
     alert('Ingresa tu nacionalidad');
     return;
   }
   if(provincia.length === 0) {
    alert('Ingresa tu provincia');
    return;
  }
    var clave = document.getElementById('clave').value;
    if (clave.length < 6) {
     alert('La clave no es válida');
     return;
  }
    var clave2 = document.getElementById('clave2').value;
     if (clave2.length < 6) {
     alert('La clave no es válida');
     return;
  }

  this.submit();{
    alert('Se ha registrado con exito');
  }
 }
  

//Validacion de email registro y login

document.getElementById('correo').addEventListener('input', function() {
  
  campo = event.target;
  valido = document.getElementById('emailOK');

      
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  evento.preventDefault();
  if (emailRegex.test(campo.value)) {
   
     } else {
    alert('ingrese un email valido');
     }  
  }); 


 // Funcion calcular edad

 function calculateAge(fechaNac){
   birthDate = new Date(fechaNac.value);
   otherDate = new Date();
   var years = otherDate.getFullYear() - birthDate.getFullYear();

   if(otherDate.getMonth() <birthDate.getMonth() || otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate() ) {
    years--;
  }

  return years.toString();

 }

 function agregarEdad(fechaNac, campo){
    let edadCampo = document.getElementById(campo);
    console.log(edadCampo);
    edadCampo.innerText = calculateAge(fechaNac);

 }

 //eventos DOM

 function cambiarBoton(){
  let bot=document.getElementById("enviar");
  bot.style.backgroundColor="red";
}
function cambiarBoton2(){
  let bot=document.getElementById("enviar");
  bot.style.backgroundColor="blue";
}


 // Boton enviar de la pagina Acerca de nosotros

  function enviar2(){
   var fecha = new Date();
   var dia = fecha.getDate();
   var mes = fecha.getUTCMonth() + 1;
   var year = fecha.getFullYear();
   alert("Se envio con exito su consulta en la fecha " + dia +"/"+mes+"/"+year);
   
 }


