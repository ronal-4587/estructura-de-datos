
// ---- 1. Botón "Mostrar alerta" ----
// Selecciono el botón por su id y le agrego un evento clic
document.getElementById("btnAlerta").addEventListener("click", function () {
  alert("Hola");
});


// ---- 2. Abrir modal de contacto ----
// Bootstrap 5 tiene su propia clase Modal que puedo usar con JS
document.getElementById("btnAbrirModal").addEventListener("click", function (e) {
  e.preventDefault(); // evito que recargue la página

  var modal = new bootstrap.Modal(document.getElementById("modalContacto"));
  modal.show();
});


// ---- 3. Validación básica del formulario de inicio de sesión ----
document.getElementById("btnIniciarSesion").addEventListener("click", function () {

  // Obtengo los valores que escribió el usuario
  var email    = document.getElementById("inputEmail").value.trim();
  var password = document.getElementById("inputPassword").value.trim();

  // Referencias a los mensajes de alerta
  var mensajeError = document.getElementById("mensajeError");
  var mensajeExito = document.getElementById("mensajeExito");

  // Oculto ambos mensajes antes de validar
  mensajeError.classList.add("d-none");
  mensajeExito.classList.add("d-none");

  // Validación sencilla: campos no vacíos y contraseña de al menos 6 caracteres
  if (email === "" || password === "" || password.length < 6) {
    // Muestro el mensaje de error
    mensajeError.classList.remove("d-none");
  } else {
    // Todo está bien — muestro mensaje de éxito
    mensajeExito.classList.remove("d-none");

    // Limpio los campos después de 2 segundos
    setTimeout(function () {
      document.getElementById("inputEmail").value    = "";
      document.getElementById("inputPassword").value = "";
      mensajeExito.classList.add("d-none");
    }, 2000);
  }
});