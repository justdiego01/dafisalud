const nombresCompletosInput = document.getElementById("nombrecompleto")
const nombresInput = document.getElementById("nombres")
const apellidosInput = document.getElementById("apellidos")
const generoInput = document.getElementById("genero")
const dniInput = document.getElementById("dni")
const fechNacimientoInput = document.getElementById("fechnacimiento")

const storedData = JSON.parse(localStorage.getItem("data"));

if (storedData) {
  nombresCompletosInput.textContent = storedData.nombres;
  nombresInput.value = storedData.nombres;
  apellidosInput.value = storedData.apellidos;
  generoInput.value = storedData.genero;
  dniInput.value = storedData.dni;
  fechNacimientoInput.value = storedData.fechnacimiento;
}