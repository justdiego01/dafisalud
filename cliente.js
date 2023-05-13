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
        url: 'http://localhost:3999/api/cliente',
        type: 'GET',
        success: function (respuesta) {
            Swal.close()
            console.log(respuesta);
            var dataFila = '';
            var tablaCliente = respuesta.dataCliente;
            if (tablaCliente.length > 0) {
                for (const i in tablaCliente) {
                    var varCliente = tablaCliente[i];
                    dataFila += "<tr>";
                    dataFila += "<td>" + varCliente.idSeguro + "</td>";
                    dataFila += "<td>" + varCliente.nombres + "</td>";
                    dataFila += "<td>" + varCliente.dni + "</td>";
                    dataFila += "<td>" + varCliente.marca + "</td>";
                    dataFila += "<td>" + varCliente.otraMarca + "</td>";
                    dataFila += "<td>" + varCliente.modelo + "</td>";
                    dataFila += "<td>" + varCliente.estado + "</td>";
                    dataFila += "<td>" +
                        "<button type='button' class='btn btn-warning' data-toggle='modal' data-target='#myModal'  onclick='buscar("
                        + varCliente.idSeguro + ")'>Editar</button>" +
                        "</td>";
                    dataFila += "</tr>";
                }
                document.getElementById('dataCliente').innerHTML = dataFila;
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
                url: 'http://localhost:3999/api/cliente/save',
                type: 'POST',
                data: {
                    idSeguro: $("#txtIdSeguro").val(),
                    nombres: $("#txtNombres").val(),
                    dni: $("#txtDni").val(),
                    marca: $("#txtMarca").val(),
                    otraMarca: $("#txtOtraMarca").val(),
                    modelo: $("#txtModelo").val(),
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
    });}
}
function limpiarForm() {
    $("#txtIdSeguro").val(0);
    $("#t#txtNombres").val("");
    $("#txtDni").val("");
    $("#txtMarca").val("");
    $("#txtOtraMarca").val("");
    $("#txtModelo").val("");
    $("#txtEstado").val("");
}
function buscar(idSeguro) {
    $.ajax({
        url: 'http://localhost:3999/api/cliente/' + idSeguro,
        type: 'GET',
        success: function (respuesta) {
            console.log(respuesta);
            var varCliente = respuesta.cliente;
            $("#txtIdSeguro").val(varCliente.idSeguro);
            $("#txtNombres").val(varCliente.nombres);
            $("#txtDni").val(varCliente.dni);
            $("#txtMarca").val(varCliente.marca);
            $("#txtOtraMarca").val(varCliente.otraMarca);
            $("#txtModelo").val(varCliente.modelo);
            $("#txtEstado").val(varCliente.estado);
        }
    });

}


