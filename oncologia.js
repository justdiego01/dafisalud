// LISTAR PRODUCTOS
function listar() {
    Swal.fire({
        title: 'LISTA DE ONCOLOGIA',
        html: '<b>Cargando...</b>',
        didOpen: () => {
            Swal.showLoading()
        }
    });





    $.ajax({
        url: 'http://localhost:3999/api/oncologia',
        type: 'GET',
        success: function (respuesta) {
            Swal.close()
            console.log(respuesta);
            var dataFila = '';
            var tablaOncologia = respuesta.dataOncologia;
            if (tablaOncologia.length > 0) {
                for (const i in tablaOncologia) {
                    var varOncologia = tablaOncologia[i];
                    dataFila += "<tr>";
                    dataFila += "<td>" + varOncologia.idcliente + "</td>";
                    dataFila += "<td>" + varOncologia.nombreyapellido + "</td>";
                    dataFila += "<td>" + varOncologia.dni + "</td>";
                    dataFila += "<td>" + varOncologia.telefono + "</td>";
                    dataFila += "<td>" + varOncologia.direccion + "</td>";
                    dataFila += "<td>" + varOncologia.tratamientos + "</td>";
                    dataFila += "<td>" + varOncologia.plan + "</td>";
                    dataFila += "<td>" + varOncologia.estado + "</td>";
                    dataFila += "<td>" + varOncologia.fecha + "</td>";
                    dataFila += "<td>" +
                        "<button type='button' class='btn btn-warning' data-toggle='modal' data-target='#myModal'  onclick='buscar("
                        + varOncologia.idcliente + ")'>Editar</button>" +
                        "</td>";
                    dataFila += "</tr>";
                }
                document.getElementById('dataOncologia').innerHTML = dataFila;
            }
        }
    });
}

function guardar() {
    if(!MyForm.checkValidity()){
        MyForm.reportValidity();
        Swal.fire('Tienes que llenar todos los campos.','','info')
     }else{Swal.fire({
        title: 'Esta seguro que quieres guardar los cambios ?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: 'http://localhost:3999/api/oncologia/save',
                type: 'POST',
                data: {
                    idcliente: $("#txtIdcliente").val(),
                    nombreyapellido: $("#txtNombreyapellido").val(),
                    dni: $("#txtDni").val(),
                    telefono: $("#txtTelefono").val(),
                    direccion: $("#txtDireccion").val(),
                    tratamientos: $("#cboTratamiento").val(),
                    plan: $("#cboPlan").val(),
                    estado: $("#cboEstado").val(),
                    fecha: $("#txtFecha").val()
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
    });}
}
function limpiarForm() {
    $("#txtIdcliente").val(0);
    $("#cboNombreyapellido").val("");
    $("#txtDni").val("");
    $("#txtTelefono").val("");
    $("#txtDireccion").val("");
    $("#txtTratamiento").val("");
    $("#cboPlan").val("");
    $("#cboEstado").val("");
    $("#txtFecha").val("");
}
function buscar(idcliente) {
    $.ajax({
        url: 'http://localhost:3999/api/oncologia/' + idcliente,
        type: 'GET',
        success: function (respuesta) {
            console.log(respuesta);
            var varOncologia = respuesta.oncologia;
            $("#txtIdcliente").val(varOncologia.idcliente);
            $("#cboNombreyapellido").val(varOncologia.nombreyapellido);
            $("#txtDni").val(varOncologia.dni);
            $("#txtTelefono").val(varOncologia.telefono);
            $("#txtDireccion").val(varOncologia.direccion);
            $("#cboTratamiento").val(varOncologia.tratamientos);
            $("#cboPlan").val(varOncologia.plan);
            $("#cboEstado").val(varOncologia.estado);
            $("#txtFecha").val(varOncologia.fecha);
        }
    });

}