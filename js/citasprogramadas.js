const nombresCompletosInput = document.getElementById("nombrecompleto");
const nombreCompletoInput = document.getElementById("nombreCompleto");
const dniInput = document.getElementById("dni");
const telefonoInput = document.getElementById("telefono");
const fechaInput = document.getElementById("fecha");
const horaInput = document.getElementById("hora");
const sedeInput = document.getElementById("sede");
const especialidadInput = document.getElementById("especialidad");
const datosCita = JSON.parse(localStorage.getItem("data"));

if (datosCita) {
  nombresCompletosInput.textContent = datosCita.nombres;
  nombreCompletoInput.value = datosCita.nombres;
  dniInput.value = datosCita.dni;
  telefonoInput.value = datosCita.telefono;
  fechaInput.value = datosCita.fecha;
  horaInput.value = datosCita.hora;
  sedeInput.value = datosCita.sede;
  especialidadInput.value = datosCita.especialidad;
}
