// Obtener referencias a los elementos del formulario
const fechaInput = document.getElementById("fechacita");
const citaDiv = document.querySelector(".border.border-dark.mb-2");
const formfecha = document.getElementById("formfecha");

// Escuchar el evento de envío del formulario
formfecha.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener los valores de fecha y hora de la cita seleccionada
  const fechaCita = fechaInput.value;

  // Mostrar la cita seleccionada en el div correspondiente
  citaDiv.textContent = `${fechaCita}`;
});

/* // LISTAR PRODUCTOS
function listar() {
    Swal.fire({
        title: 'Citas',
        html: '<b>Cargando...</b>',
        didOpen: () => {
            Swal.showLoading()
        }
    });

    $.ajax({
        url: 'http://localhost:3999/api/paciente',
        type: 'GET',
        success: function (respuesta) {
            Swal.close()
            console.log(respuesta);
            var dataFila = '';
            var tablaPaciente = respuesta.dataPaciente;
            if (tablaPaciente.length > 0) {
                for (const i in tablaPaciente) {
                    var varPaciente = tablaPaciente[i];
                    dataFila += "<tr>";
                    dataFila += "<td>" + varPaciente.idPaciente + "</td>";
                    dataFila += "<td>" + varPaciente.nombres + "</td>";
                    dataFila += "<td>" + varPaciente.apellidos + "</td>";
                    dataFila += "<td>" + varPaciente.dni + "</td>";
                    dataFila += "<td>" + varPaciente.genero + "</td>";
                    dataFila += "<td>" + varPaciente.edad + "</td>";
                    dataFila += "<td>" + varPaciente.fechnac + "</td>";
                    dataFila += "<td>" + varPaciente.estado + "</td>";
                    dataFila += "<td>" +
                        "<button type='button' class='btn btn-warning' data-toggle='modal' data-target='#myModal'  onclick='buscar("
                        + varPaciente.idPaciente + ")'>Editar</button>" +
                        "</td>";
                    dataFila += "</tr>";
                }
                document.getElementById('dataPaciente').innerHTML = dataFila;
            }
        }
    });
}

function guardar() {
    if(!MyForm.checkValidity()){
        MyForm.reportValidity();
        Swal.fire('Tienes que llenar todos los campos.','','info')
     }
     else{
        Swal.fire({
        title: 'Esta seguro que quieres guardar los cambios ?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: 'http://localhost:3999/api/paciente/save',
                type: 'POST',
                data: {
                    idPaciente: $("#txtIdPaciente").val(),
                    nombres: $("#txtNombres").val(),
                    apellidos: $("#txtApellidos").val(),
                    dni: $("#txtDni").val(),
                    especialidad: $("#txtEspecialidad").val(),
                    cita: $("#txtCita").val(),
                    estado: $("#cboEstado").val()
                },
                success: function (respuesta) {
                    console.log(respuesta);
                    listar();
                }
            });
            Swal.fire('Se guardaron los cambios!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Cambios no guardados', '', 'info')
        }
    });
    }
}


function limpiarForm() {
    $("#txtIdPaciente").val(0);
    $("#t#txtNombres").val("");
    $("#t#txtApellidos").val("");
    $("#txtDni").val("");
    $("#txtEspecialidad").val("");
    $("#txtCita").val("");
    $("#txtEstado").val("");
}

function buscar(idPaciente) {
    $.ajax({
        url: 'http://localhost:3999/api/paciente/' + idPaciente,
        type: 'GET',
        success: function (respuesta) {
            console.log(respuesta);
            var varPaciente = respuesta.paciente;
            $("#txtIdPaciente").val(varPaciente.idPaciente);
            $("#txtNombres").val(varPaciente.nombres);
            $("#txtApellidos").val(varPaciente.apellidos);
            $("#txtDni").val(varPaciente.dni);
            $("#txtEspecialidad").val(varPaciente.especialidad);
            $("#txtCita").val(varPaciente.cita);
            $("#txtEstado").val(varPaciente.estado);
        }
    });
} */
