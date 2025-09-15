document.getElementById("loginUsuario").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const mensajeLogin = document.getElementById("mesajeLogin");

    mensajeLogin.className = "";
    mensajeLogin.textContent = "";


    const usuarioGuardado = localStorage.getItem("usuarioRegistrado");

    if (!usuarioGuardado) {
      mensajeLogin.className = "text-red-600 mt-2 text-center p-1";
      mensajeLogin.textContent = " No hay usuarios registrados. Por favor, regístrate primero.";
      return;
    }

    const usuario = JSON.parse(usuarioGuardado);


    if (email === usuario.email && password === usuario.password) {
      mensajeLogin.className = "text-green-600 mt-2 text-center p-1";
      mensajeLogin.textContent = " Inicio de sesión exitoso. Bienvenido, " + usuario.nombre + "!";

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);

    } else {
      mensajeLogin.className = "text-red-600 mt-2 text-center p-1";
      mensajeLogin.textContent = " Correo o contraseña incorrectos.";
    }
  });