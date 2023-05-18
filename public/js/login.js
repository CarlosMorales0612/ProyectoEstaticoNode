const Usuarios = [{

    "username": "carlos",
    "password": "123"
},
{
    "username" : "santiago",
    "password" : "456"
}
]



verificarLogin = () => {
let usuario = document.getElementById('username').value
let password = document.getElementById('password').value

    return new Promise ((resolve, reject) => {        
    for( let i = 0; i < Usuarios.length; i++){
        if (Usuarios[i].username === usuario && Usuarios[i].password === password){
            window.location.href = "/";
        } else {
         reject ('La contraseña y/o usuario incorrectos ')
     }
}});
   
    };
    
    document.querySelector("#validarLogin").addEventListener("click", () => {
        verificarLogin()
            .then(mensaje =>{
                document.getElementById("mensaje").innerHTML=mensaje;
            })
            .catch(error =>{
                document.getElementById("mensaje").innerHTML=error;
            });
    });