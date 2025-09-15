document.getElementById("RegistroUsuario").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const region = document.getElementById("region").value;
    const comuna = document.getElementById("comuna").value;
    const mensajeResultado = document.getElementById("mensajeResultadoLogin");

    mensajeResultado.className = "";
    mensajeResultado.innerHTML = "";

    if (!nombre || !email || !password || !confirmPassword || !region || !comuna) {
      mensajeResultado.className = "text-red-600 mt-2 text-center p-1";
      mensajeResultado.textContent = " Todos los campos obligatorios deben estar completos.";
      return;
    }

    const regexEmail = /^[\w._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
    if (!regexEmail.test(email)) {
      mensajeResultado.className = "text-red-600 mt-2 text-center p-1";
      mensajeResultado.textContent = " El correo debe ser de @duoc.cl, @profesor.duoc.cl o @gmail.com";
      return;
    }

    if (password.length < 6) {
      mensajeResultado.className = "text-red-600 mt-2 text-center p-1";
      mensajeResultado.textContent = " La contraseña debe tener al menos 6 caracteres.";
      return;
    }

    if (password !== confirmPassword) {
      mensajeResultado.className = "text-red-600 mt-2 text-center p-1";
      mensajeResultado.textContent = " Las contraseñas no coinciden.";
      return;
    }

    const usuario = {
      nombre: nombre,
      email: email,
      password: password, 
      telefono: telefono,
      region: region,
      comuna: comuna
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

    mensajeResultado.className = "text-green-600 mt-2 text-center p-1";
    mensajeResultado.textContent = " Registro exitoso. Ya puedes iniciar sesión.";

    document.getElementById("RegistroUsuario").reset();
});


