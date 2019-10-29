var objUser = [
    {
        username: "admin",
        password: "admin", 
        id:1
    },
    {
        username: "tamagotchi15",
        password: "1234",
        id:2
    },
    {
        username: "pou2019",
        password: "2019",
        id:3
    },
    {
        username: "usuario4",
        password: "usuario4",
        id:4
    },
    {
        username: "estudiante1",
        password: "Ipc2_",
        id:5
    }
]
function justLogin(){
    document.getElementById("formLogin").style.display="block";
    document.getElementById("formPrincipal").style.display="none";
    document.getElementById("formCreacion").style.display="none";
    //identificadorClave="";
}

function ingreso(){
    document.getElementById("formLogin").style.display="none";
    document.getElementById("formPrincipal").style.display="block";
    document.getElementById("formCreacion").style.display="none";
}

function justCreativity(){
    document.getElementById("formLogin").style.display="none";
    document.getElementById("formPrincipal").style.display="none";
    document.getElementById("formCreacion").style.display="block";
}

function inicioSesion(){
   var usuario = '';
   var contra= '';
   usuario=document.getElementById('user').value;
   contra=document.getElementById('pass').value;
   var puedeAcceder=validacion(usuario, contra);
   if(puedeAcceder==true){
    ingreso();
    carga(usuario);
    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
    //window.location.assign("principal.html?usuario="+usuario);
   }else{
       alert("INCORRECTO");
   }
}

function validacion(username, password) {
    var acceso = false;
    for (i = 0; i < objUser.length; i++) {
        console.log(i);
        console.log(objUser[i].username+"--"+objUser[i].password);
        if (username == objUser[i].username && password == objUser[i].password) {
            acceso=true;
        }
    }
    return acceso;
}

function creacion(){

}