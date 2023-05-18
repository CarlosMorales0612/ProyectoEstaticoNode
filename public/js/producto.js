const validarProducto = () => {
    const expresionNombre = /^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionCategoria = /^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionStock = /^[0-9]{1,10}$/;
    const expresionCantidad = /^[0-9]{1,10}$/;
    const expresionPrecioVenta = /^[0-9]{1,10}$/;

    const nombre = document.getElementById('Nombre').value;
    const categoria = document.getElementById('Categoria').value;
    const stock = document.getElementById('Stock').value;
    const cantidad = document.getElementById('Cantidad').value;
    const precioventa = document.getElementById('PrecioVenta').value;
    let erroresProducto =' ';

    if(!expresionNombre.test(nombre)){
        erroresProducto += 'Ingresar solo letras en el Nombre.<br>'; 
    }
    if(!expresionCategoria.test(categoria)){
        erroresProducto += 'Ingresar solo letras en el Categoria.<br>'; 
    }
    if(!expresionStock.test(stock)){
        erroresProducto += 'Ingresar solo números en el Stock.<br>';
    }
    if(!expresionCantidad.test(cantidad)){
        erroresProducto += 'Ingresar solo números en el Cantidad.<br>';
    }
    if(!expresionPrecioVenta.test(precioventa)){
        erroresProducto += 'Ingresar solo numeros en el Precio Venta.\n';
    }

    const alertElement = document.getElementById("erroresProductos")


    if (erroresProducto.length > 0){
        alertElement.style.display = "block";
        alertElement.innerHTML = erroresProducto;
    }else{
        alertElement.style.display = "none";
    }
}

document.querySelector('#btnRegistrarProducto')
.addEventListener('click' , () => validarProducto());