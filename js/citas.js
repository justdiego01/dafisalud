const nombresCompletosInput = document.getElementById("nombrecompleto");
const nombresInput = document.getElementById("nombres");
const apellidosInput = document.getElementById("apellidos");
const generoInput = document.getElementById("genero");
const dniInput = document.getElementById("dni");
const fechNacimientoInput = document.getElementById("fechnacimiento");
const telefonoInput = document.getElementById("telefono");
const emailInput = document.getElementById("email");
const btnGuardar = document.getElementById("btnGuardar");
const datosLocalStorage = JSON.parse(localStorage.getItem("data"));


if (datosLocalStorage) {
  nombresCompletosInput.textContent = datosLocalStorage.nombres;
  nombresInput.textContent = datosLocalStorage.nombres;
  apellidosInput.textContent = datosLocalStorage.apellidos;
  generoInput.textContent = datosLocalStorage.genero;
  dniInput.textContent = datosLocalStorage.dni;
  fechNacimientoInput.textContent = datosLocalStorage.fechnacimiento;
  telefonoInput.textContent = datosLocalStorage.telefono;
  emailInput.textContent = datosLocalStorage.email;
}


function limpiarInputs() {
  const sedeSelect = document.getElementById("sedes");
  const especialidadSelect = document.getElementById("lang");
  const fechaInput = document.getElementById("fechacita");
  const horaInput = document.getElementById("horacita");

  sedeSelect.value = "";
  especialidadSelect.value = "";
  fechaInput.value = "";
  horaInput.value = "";
}


function guardarDatos(e) {
  e.preventDefault();

  const sedeSelect = document.getElementById("sedes");
  const especialidadSelect = document.getElementById("lang");
  const fechaInput = document.getElementById("fechacita");
  const horaInput = document.getElementById("horacita");

  if (
    especialidadSelect.value &&
    sedeSelect.value &&
    fechaInput.value &&
    horaInput.value
  ) {
    data = {
      ...datosLocalStorage,
      especialidad: especialidadSelect.value,
      sede: sedeSelect.value,
      fecha: fechaInput.value,
      hora: horaInput.value,
    };
    localStorage.setItem("data", JSON.stringify(data));
    limpiarInputs()
    swal.fire("¡Éxito!", "Los datos se han guardado exitosamente.", "success");
  } else {
    swal.fire("Error", "Por favor, complete todos los campos requeridos.", "error");
  }
}

btnGuardar.addEventListener("click", guardarDatos);

function changeForm() {
  var sedesSelect = document.getElementById("sedes");
  var especialidadForm = document.getElementById("especialidadForm");

  if (sedesSelect.value === "San Miguel") {
    especialidadForm.innerHTML = `
    <label for="lang" class="font-weight-bold">Especialidad</label><br>
    <select name="Especialidad" id="lang" class="border border-dark">
      <option value="CIRUGÍA GENERAL" class="border border-dark">CIRUGÍA GENERAL</option>
      <option value="DENSITOMETRÍA" class="border border-dark">DENSITOMETRÍA</option>
      <option value="DERMATOLOGÍA" class="border border-dark">DERMATOLOGÍA</option>
      <option value="ECOGRAFÍA" class="border border-dark">ECOGRAFÍA</option>
      <option value="GASTROENTEROLOGÍA" class="border border-dark">GASTROENTEROLOGÍA</option>
      <option value="GERIATRÍA" class="border border-dark">GERIATRÍA</option>
      <option value="GINECOLOGÍA" class="border border-dark">GINECOLOGÍA</option>
      <option value="LABORATORIO" class="border border-dark">LABORATORIO</option>
      <option value="MEDICINA ESTÉTICA" class="border border-dark">MEDICINA ESTÉTICA</option>
      <option value="MEDICINA GENERAL " class="border border-dark">MEDICINA GENERAL </option>
    </select>`;
  } else if (sedesSelect.value === "Lince") {
    especialidadForm.innerHTML = `
      <label for="lang" class="font-weight-bold">Especialidad</label><br>
      <select name="Especialidad" id="lang" class="border border-dark">
        <option value="DENSITOMETRÍA" class="border border-dark">DENSITOMETRÍA</option>
        <option value="GASTROENTEROLOGÍA" class="border border-dark">GASTROENTEROLOGÍA</option>
        <option value="LABORATORIO" class="border border-dark">LABORATORIO</option>
      </select>`;
  } else if (sedesSelect.value === "La Molina") {
    especialidadForm.innerHTML = `
          <label for="lang" class="font-weight-bold">Especialidad</label><br>    
          <select name="Especialidad" id="lang" class="border border-dark">
            <option value="LABORATORIO" class="border border-dark">LABORATORIO</option>
            <option value="NEUROLOGÍA" class="border border-dark">NEUROLOGÍA</option>
            <option value="NUTRICIÓN" class="border border-dark">NUTRICIÓN</option>
          </select>`;
  } else if (sedesSelect.value === "Surco") {
    especialidadForm.innerHTML = `
      <label for="lang" class="font-weight-bold">Especialidad</label><br>    
      <select name="Especialidad" id="lang" class="border border-dark">
        <option value="PSICOLOGÍA" class="border border-dark">PSICOLOGÍA</option>
        <option value="CARDIOLOGÍA" class="border border-dark">CARDIOLOGÍA</option>
        <option value="REUMATOLOGÍA" class="border border-dark">REUMATOLOGÍA</option>
      </select>`;
  } else {
    especialidadForm.innerHTML = `
      <label for="lang" class="font-weight-bold">Especialidad</label><br>
      <select name="Especialidad" id="lang" class="border border-dark">
      </select>`;
  }
}
