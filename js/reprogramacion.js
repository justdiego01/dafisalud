const nombresInput = document.getElementById("nombres")
const apellidosInput = document.getElementById("apellidos")
const generoInput = document.getElementById("genero")
const dniInput = document.getElementById("dni")
const fechNacimientoInput = document.getElementById("fechnacimiento")

const storedData = localStorage.getItem("data");

if (storedData) {
  const data = JSON.parse(storedData);
  
  nombresInput.value = data.nombres;
  apellidosInput.value = data.apellidos;
  generoInput.value = data.genero;
  dniInput.value = data.dni;
  fechNacimientoInput.value = data.fechnacimiento;
}