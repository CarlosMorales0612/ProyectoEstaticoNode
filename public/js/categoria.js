const validarCategoria = () => {
    const expresionNombre = /^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionDescripcion = /^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionEstado = /^[a-zA-Z]+ *[a-zA-Z]*$/;

    const nombre = document.getElementById('Nombre').value;
    const descripcion = document.getElementById('Descripcion').value;
    const estado = document.getElementById('Estado').value;
    let erroresCategoria =' ';

    if(!expresionNombre.test(nombre)){
        erroresCategoria += 'Ingresar solo letras en el Nombre.<br>'; 
    }
    if(!expresionDescripcion.test(descripcion)){
        erroresCategoria += 'Ingresar solo letras en la Descripcion.<br>'; 
    }
    if(!expresionEstado.test(estado)){
        erroresCategoria += 'Ingresar solo letras en el Estado.<br>';
    }

    const alertElement = document.getElementById("erroresCategoria")


    if (erroresCategoria.length > 0){
        alertElement.style.display = "block";
        alertElement.innerHTML = erroresCategoria;
    }else{
        alertElement.style.display = "none";
    }
}

document.querySelector('#btnRegistrarCategoria')
.addEventListener('click' , () => validarCategoria());