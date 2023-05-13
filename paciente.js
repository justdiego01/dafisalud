// LISTAR PRODUCTOS
function listar() {
    Swal.fire({
        title: 'LISTA DE PRODUCTOS',
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
                    dataFila += "<td>" + varPaciente.dni + "</td>";
                    dataFila += "<td>" + varPaciente.direccion + "</td>";
                    dataFila += "<td>" + varPaciente.especialidad + "</td>";
                    dataFila += "<td>" + varPaciente.cita + "</td>";
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
                    dni: $("#txtDni").val(),
                    direccion: $("#txtDireccion").val(),
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
    $("#txtDni").val("");
    $("#txtDireccion").val("");
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
            $("#txtDni").val(varPaciente.dni);
            $("#txtDireccion").val(varPaciente.direccion);
            $("#txtEspecialidad").val(varPaciente.especialidad);
            $("#txtCita").val(varPaciente.cita);
            $("#txtEstado").val(varPaciente.estado);
        }
    });

}


