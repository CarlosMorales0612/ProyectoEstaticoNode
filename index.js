const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();



app.use ( express.static('public'));
app.set("views",path.join(__dirname+ "/public/views"));
app.set("view engine","hbs");
hbs.registerPartials(__dirname+ '/public/views/partials');


app.get("/productos",(req,res)=>{
    const productos=[
        {
            id:1,
            nombre:'Crossan ',
            categoria:'Panaderia',
            stock:20,
            cantidad:'4',
            precioVenta:20000,
            estado:'Activo'
        },
        {
            id:2,
            nombre:'Torta',
            categoria:'Reposteria',
            stock:10,
            cantidad:'2',
            precioVenta:30000,
            estado:'Activo'
        },
        {
            id:3,
            nombre:'Quiche',
            categoria:'Comida Sal',
            stock:4,
            cantidad:'1',
            precioVenta:15000,
            estado:'Inactivo'
        }
    ]
    res.render("productos",{
        lista_productos:productos
    });
});


app.get("/pedidos",(req,res)=>{
    const pedidos=[
        {
            id:1,
            nombCliente:'Carlos Morales ',
            producto: 'Pan Chocha',
            cantidad:'4',
            precio:2000,
            fechaEntrega:'15/05/2023'            
        },
        {
            id:2,
            nombCliente:'Santiago Ossa ',
            producto: 'Palito',
            cantidad:'2',
            precio:1400,
            fechaEntrega:'18/05/2023' 
        },
        {
            id:3,
            nombCliente:'Marcela Morales ',
            producto: 'cuca negra',
            cantidad:'4',
            precio:1800,
            fechaEntrega:'14/05/2023' 
        }
    ]
    res.render("pedidos",{
        lista_pedidos:pedidos
    });
});

app.get("/clientes",(req,res)=>{
    const clientes=[
        {
            id:1,
            nombre:'Carlos Morales',
            tipoDocumento:'C.C',
            numDocumento: 1035866482,
            direccion:'Cra50#97-05',
            telefono:3017676524,
            estado: 'activo'                      
        },
        {
            id:2,
            nombre:'Santiago Sosa',
            tipoDocumento:'C.C',
            numDocumento: 1000066482,
            direccion:'zona Rural',
            telefono:301000435,
            estado: 'Inactivo'
        },
        {
            id:3,
            nombre:'Marcela Morales',
            tipoDocumento:'C.C',
            numDocumento: 1000000999,
            direccion:'Calle45D#86-03',
            telefono:301000434,
            estado: 'Activo' 
        }
    ]
    res.render("clientes",{
        lista_clientes:clientes
    });
});

app.get("/categorias",(req,res)=>{
    const categorias=[
        {
            id:1,
            nombre:'Panaderia',
            descripcion:'hacer, mezclar, amasar y hornear diferentes ingredientes para obtener pan de todos los tamaños, formas, texturas y sabores',
            estado: 'Activo',
        },
        {
            id:2,
            nombre:'Cocina',
            descripcion:'Exquisitos platos (generalmente de sal) magnificos para el medio día',
            estado: 'Activo',
        },
        {
            id:3,
            nombre:'Reposteria',
            descripcion:'Preparar y adornar diferentes platos dulces, ofrecen los sabores y el impacto visual',
            stock:4,
        }
    ]
    res.render("categorias",{
        lista_categorias:categorias
    });
});

app.get("/empleados",(req,res)=>{
    const empleados=[
        {
            id:1,
            nombre:'Carlos Morales',
            numdocumento: 1035877546,
            estado: 'Activo',
        },
        {
            id:2,
            nombre:'Diego Lopez',
            numdocumento: 100000456,
            estado: 'Activo',
        },
        {
            id:3,
            nombre:'Marcela Morales',
            numdocumento: 1035000046,
            estado: 'Inactiva',
        }
    ]
    res.render("empleados",{
        lista_empleados:empleados
    });
});

app.get("/detallePedido",(req,res)=>{
    const detallePedidos=[
        {
            id:1,
            nombre:'Carlos Morales',
            numdocumento: 1035877546,
            estado: 'Activo',
        },
        {
            id:2,
            nombre:'Diego Lopez',
            numdocumento: 100000456,
            estado: 'Activo',
        },
        {
            id:3,
            nombre:'Marcela Morales',
            numdocumento: 1035000046,
            estado: 'Inactiva',
        }
    ]
    res.render("detallePedido",{
        lista_detallePedidos:detallePedidos
    });
});


app.get('/crearProducto',(req,res)=>{
    res.render("components/crearProducto");
})

app.get('/crearPedido',(req,res)=>{
    res.render("components/crearPedido");
})

app.get('/crearCliente',(req,res)=>{
    res.render("components/crearCliente");
})

app.get('/crearCategoria',(req,res)=>{
    res.render("components/crearCategoria");
})

app.get('/crearEmpleado',(req,res)=>{
    res.render("components/crearEmpleado");
})

app.get('*',(req,res)=>{
    res.render("error")
})



app.listen(8095, () => {
    console.log('sin errores');
})
