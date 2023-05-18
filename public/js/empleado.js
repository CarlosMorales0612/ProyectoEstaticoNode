const validarEmpleado = () => {
    const expresionNombre = /^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionNumDocumento = /^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionEstado = /^[a-zA-Z]+ *[a-zA-Z]*$/;

    const nombre = document.getElementById('Nombre').value;
    const numdocumento = document.getElementById('NumDocumento').value;
    const estado = document.getElementById('Estado').value;
    let erroresEmpleado =' ';

    if(!expresionNombre.test(nombre)){
        erroresEmpleado += 'Ingresar solo letras en el Nombre.<br>'; 
    }
    if(!expresionNumDocumento.test(numdocumento)){
        erroresEmpleado += 'Ingresar solo números en el Numero Documento.<br>'; 
    }
    if(!expresionEstado.test(estado)){
        erroresEmpleado += 'Ingresar solo letras en el Estado.<br>';
    }

    const alertElement = document.getElementById("erroresEmpleado")


    if (erroresEmpleado.length > 0){
        alertElement.style.display = "block";
        alertElement.innerHTML = erroresEmpleado;
    }else{
        alertElement.style.display = "none";
    }
}

document.querySelector('#btnRegistrarEmpleado')
.addEventListener('click' , () => validarEmpleado());