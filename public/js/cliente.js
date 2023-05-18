const validarCliente = () => {
    const expresionNombre = /^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionTipoDocumento = /^[0-9]{1,10}$/;
    const expresionDocumento = /^[0-9]{1,10}$/;
    const expresionDireccion = /^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionTelefono = /^[0-9]{1,10}$/;

    const nombre = document.getElementById('Nombre').value;
    const tipoDocumento = document.getElementById('TipoDocumento').value;
    const documento = document.getElementById('Documento').value;
    const direccion = document.getElementById('Direccion').value;
    const telefono = document.getElementById('Telefono').value;
    let erroresCliente =' ';

    if(!expresionNombre.test(nombre)){
        erroresCliente += 'Ingresar solo letras en el Nombre.<br>'; 
    }
    if(!expresionTipoDocumento.test(tipoDocumento)){
        erroresCliente += 'Ingresar solo CC/TI/ETX en tipo de documento.<br>'; 
    }
    if(!expresionDocumento.test(documento)){
        erroresCliente += 'Ingresar solo números en el Documento.<br>';
    }
    if(!expresionDireccion.test(direccion)){
        erroresCliente += 'Ingresar la Direccion con letras y numero.<br>';
    }
    if(!expresionTelefono.test(telefono)){
        erroresCliente += 'Ingresar solo numeros en el Precio Venta.\n';
    }

    const alertElement = document.getElementById("erroresCliente")


    if (erroresCliente.length > 0){
        alertElement.style.display = "block";
        alertElement.innerHTML = erroresCliente;
    }else{
        alertElement.style.display = "none";
    }
}

document.querySelector('#btnRegistrarCliente')
.addEventListener('click' , () => validarCliente());