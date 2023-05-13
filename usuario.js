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
        url: 'http://localhost:3999/api/usuario',
        type: 'GET',
        success: function (respuesta) {
            Swal.close()
            console.log(respuesta);
            var dataFila = '';
            var tablaUsuario = respuesta.dataUsuario;
            if (tablaUsuario.length > 0) {
                for (const i in tablaUsuario) {
                    var varUsuario = tablaUsuario[i];
                    dataFila += "<tr>";
                    dataFila += "<td>" + varUsuario.idpaciente + "</td>";
                    dataFila += "<td>" + varUsuario.nombreyapellido + "</td>";
                    dataFila += "<td>" + varUsuario.numerodeseguro + "</td>";
                    dataFila += "<td>" + varUsuario.monto + "</td>";
                    dataFila += "<td>" + varUsuario.fecha + "</td>";
                    dataFila += "<td>" + varUsuario.estado + "</td>";
                    dataFila += "<td>" +
                        "<button type='button' class='btn btn-warning' data-toggle='modal' data-target='#myModal'  onclick='buscar("
                        + varUsuario.idpaciente + ")'>Editar</button>" +
                        "</td>";
                    dataFila += "</tr>";
                }
                document.getElementById('dataUsuario').innerHTML = dataFila;
            }
        }
    });
}

function guardar() {
    if(!MyForm.checkValidity()){
        MyForm.reportValidity();
        Swal.fire('Tienes que llenar todos los campos.','','info')
     }
     else{Swal.fire({
        title: 'Esta seguro que quieres guardar los cambios ?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: 'http://localhost:3999/api/usuario/save',
                type: 'POST',
                data: {
                    idpaciente: $("#txtIdpaciente").val(),
                    nombreyapellido: $("#txtNombreyapellido").val(),
                    numerodeseguro: $("#txtNumerodeseguro").val(),
                    monto: $("#txtMonto").val(),
                    fecha: $("#txtFecha").val(),
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
    $("#txtIdpaciente").val(0);
    $("#txtNombreyapellido").val("");
    $("#txtNumerodeseguro").val("");
    $("#txtMonto").val("");
    $("#txtFecha").val("");
    $("#txtEstado").val("");
}
function buscar(idpaciente) {
    $.ajax({
        url: 'http://localhost:3999/api/usuario/' + idpaciente,
        type: 'GET',
        success: function (respuesta) {
            console.log(respuesta);
            var varUsuario = respuesta.paciente;
            $("#txtIdpaciente").val(varUsuario.idpaciente);
            $("#txtNombreyapellido").val(varUsuario.nombreyapellido);
            $("#txtNumerodeseguro").val(varUsuario.numerodeseguro);
            $("#txtMonto").val(varUsuario.monto);
            $("#txtFecha").val(varUsuario.fecha);
            $("#txtEstado").val(varUsuario.estado);
        }
    });

}


