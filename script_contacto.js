document.getElementById("formularioContacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const comentario = document.getElementById("contenido").value.trim();
  const mensajeResultado = document.getElementById("mensajeResultado");

  mensajeResultado.className = "";
  mensajeResultado.innerHTML = ""; 

  if (!nombre) {
    mostrarError("El nombre es requerido");
    return;
  }
  if (nombre.length > 100) {
    mostrarError("El nombre no puede superar los 100 caracteres");
    return;
  }

  if (!email) {
    mostrarError("El correo es requerido");
    return;
  }
  if (email.length > 100) {
    mostrarError("El correo no puede superar los 100 caracteres");
    return;
  }

  const patronCorreo = /^[\w._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
  if (!patronCorreo.test(email)) {
    mostrarError("El correo debe ser de @duoc.cl, @profesor.duoc.cl o @gmail.com");
    return;
  }

  if (!comentario) {
    mostrarError("El comentario es requerido");
    return;
  }
  if (comentario.length > 500) {
    mostrarError("El comentario no puede superar los 500 caracteres");
    return;
  }

  mensajeResultado.className = "text-green-600 font-semibold text-center p-1 ";
  mensajeResultado.innerHTML = "Formulario enviado correctamente";  
});

function mostrarError(texto) {
  const mensajeResultado = document.getElementById("mensajeResultado");
  mensajeResultado.className = "text-red-600 font-semibold text-center p-1";
  mensajeResultado.innerHTML = texto;
}
