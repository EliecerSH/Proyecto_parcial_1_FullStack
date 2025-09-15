document.getElementById("loginAdmin").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const mensajeLogin = document.getElementById("mensajeLoginAdmin");

    mensajeLogin.className = "";
    mensajeLogin.textContent = "";


    if (email === "Admin@gmail.com" && password === "123456") {
      mensajeLogin.className = "text-green-600 mt-2 text-center p-1";
      mensajeLogin.textContent = " Inicio de sesión exitoso. Bienvenido, Administrador";

      setTimeout(() => {
        window.location.href = "administrador.html";
      }, 1000);

    } else {
      mensajeLogin.className = "text-red-600 mt-2 text-center p-1";
      mensajeLogin.textContent = " Correo o contraseña incorrectos.";
    }
  });