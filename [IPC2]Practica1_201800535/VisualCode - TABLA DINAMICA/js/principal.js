//#region VariablesGlobales
var listaUsuario1=[
]
var listaUsuario2=[
]
var listaUsuario3=[
]
var listaUsuario4=[
]
var listaUsuario5=[
]
var notificaciones=[]
var identificadorClave="";
var contadorMascota1=0;
var contadorMascota2=0;
var contadorMascota3=0;
var contadorMascota4=0;
var contadorMascota5=0;
var abandonos=[];

var arrarActual=[];
//#endregion

hiloPrincipal();

function actualizar(listita){
    var cajita=document.getElementById("caja");
    cajita.innerHTML="";//<div class='grid-item'>PONDRÉ UN ALGO</div>
    listita.forEach(element => {
        console.log(element);
        var vi=element.id;
        var vn=element.nombre;
        var vt=element.tipo;
        var vs=element.salud;//--
        var vf=element.felicidad;
        var vh=element.higiene;
        if(vs>0 || vf>0 || vh>0){
            console.log("Entró al if")
            cajita.insertAdjacentHTML('beforeend', "<div id="+element.id+" class='grid-item'>"+verMascota(vi,vn, vt, vs, vf, vh)+"</div>");
        }
    });
}
function decremento(listado){
    for(var j=0;j<listado.length;j++){
        if(listado[j].salud>0){
            --listado[j].salud;
        }
        if(listado[j].felicidad>0){
            --listado[j].felicidad;
        }
        if(listado[j].higiene>0){
            --listado[j].higiene;
        }
        /*--listado[j].salud;
        --listado[j].felicidad;
        --listado[j].higiene;*/
        if(listado[j].salud<=0 && listado[j].felicidad<=0 && listado[j].higiene<=0){
            console.log("ENTRÓ ACÁ");
            abandonos.push({
                usuarioResponsable: identificadorClave,
                nombreMascota: listado[j].nombre
            })
            //listado.splice(j,1);//ELIMINADO MASCOTA 
        }
    }
}
function hiloPrincipal(){
    var hilo1= setInterval("decremento(listaUsuario1)", 4000)
    var hilo2 = setInterval("decremento(listaUsuario2)", 4000);
    var hilo3 = setInterval("decremento(listaUsuario3)", 4000);
    var hilo4 = setInterval("decremento(listaUsuario4)", 4000);
    var hilo5 = setInterval("decremento(listaUsuario5)", 4000);

    var hiloActualizar = setInterval("actualizar(arrarActual)", 4000);
    //var hiloNotificaciones=setInterval("buscarNotificaciones()", 4000);
    //var hiloEstatus=setInterval("revisarEstatus()", 3500);
    //hilo.clearInterval();
}
function carga(pu){
    identificadorClave=pu;
    arrarActual=obtenerArray(pu);//var a=obtenerArray(pu);
    actualizar(arrarActual);//(a)
    buscarNotificaciones();
    revisarEstatus();
}
function revisarEstatus(){
    if(arrarActual.length<=0){
        alert("AUN NO TIENES MASCOTAS, CREA UNA!  :)");
    }
}
function buscarNotificaciones(){
    for(var j=0;j<arrarActual.length;j++){//abandonos.length
        /*console.log(abandonos[j].usuarioResponsable+"/"+identificadorClave);
        if(abandonos[j].usuarioResponsable==identificadorClave){
            console.log("Entró al if");
            alert(identificadorClave+"!, tu mascota: "+arrarActual[j].nombre+" se ha ido! Se más Cuidadoso! :(");
            abandonos.splice(j,1);
        }*/
        var a=arrarActual[j].salud;
        var b=arrarActual[j].felicidad;
        var c=arrarActual[j].higiene;
        if(a<=0 && b<=0 && c<=0){
            alert("Amig@, tu mascota: "+arrarActual[j].nombre+" te ha abandonado! :(");
            /*abandonos.push(
                {
                }
            );*/
        }
    }
}
function validandoCreacion(){
    var texto=document.getElementById("nombreMasc").value;
    if(texto==""){
        alert("DEBE INGRESAR TODA LA INFORMACION");
    }else{
        creandoMascota();
    }
}
function obtenerId(){
    if(identificadorClave=="admin"){
        return contadorMascota1++;
    }else if(identificadorClave=="tamagotchi15"){
        return contadorMascota2++;
    }else if(identificadorClave=="pou2019"){
        return contadorMascota3++;
    }else if(identificadorClave=="usuario4"){
        return contadorMascota4++;
    }else if(identificadorClave=="estudiante1"){
        return contadorMascota5++;
    }else{
        return contadorMascota1++;
    }
}

function creandoMascota(){
    var nombreMascota=document.getElementById('nombreMasc').value;
    var e = document.getElementById("cboxTipo");
    var tipoMascota = e.options[e.selectedIndex].text;
    console.log(tipoMascota);
     
    //var usuarioEscogido=obtenerUsuario();
    //arrarActual=obtenerArray(identificadorClave);//obtenerArray(usuarioEscogido);
    arrarActual.push({
        id:obtenerId(),//contadorMascota++,
        nombre: nombreMascota,
        tipo: tipoMascota,
        salud: 100,
        felicidad: 100,
        higiene: 100
    })
    ingreso();
    document.getElementById("nombreMasc").value = "";
    //actualizar(arrarActual);
}
function obtenerArray(id){
    if(id=="admin"){
        return listaUsuario1;
    }else if(id=="tamagotchi15"){
        return listaUsuario2;
    }else if(id=="pou2019"){
        return listaUsuario3;
    }else if(id=="usuario4"){
        return listaUsuario4;
    }else if(id=="estudiante1"){
        return listaUsuario5;
    }else{
        return listaUsuario1;
    }
}
function verMascota(i,n, t, s, f, h){
    var codigo="";
    var path="";
    var par=i+",\'"+t+"\'";
    //1, "Perro"
    console.log(n+"/"+t+"/"+s+"/"+f+"/"+h);
    if(t=="Perro" && s>60 && f>60&& h>60){
        path="img/PerritoFeliz.png";
    }else if(t=="Perro"){
        path="img/PerritoTriste.png";
    }else if(t=="Gato" && s>60 && f>60&& h>60){
        path="img/GatitoFeliz.png";
    }else if(t=="Gato"){
        path="img/GatitoTriste.png";
    }else if(t=="Loro" && s>60 && f>60 && h>60){
        path="img/LoroFeliz.png";
    }else{
        path="img/LoroTriste.png";
    }
    codigo="<table>"+
    '<tr><p>'+n+'</p></tr>'+

    '<tr><img src="'+path+'" width="130px" height="130px"></tr>'+

    '<tr><p> Salud '+ s+'%</p></tr>'+

    '<tr><input type="submit" onclick="AumentoSalud('+par+')" value="Alimentar"></tr>'+//\"Perro\"

    '<tr><p> Felicidad '+f+'%</p></tr>'+

    '<tr><input type="submit" onclick="AumentoFelicidad('+par+')" value="Jugar"></tr>'+

    '<tr><p> Higiene '+h+'%</p></tr>'+

    '<tr><input type="submit" onclick="AumentoHigiene('+par+')" value="Bañar"></tr>'+

    '</table>'
    return codigo;
}
function AumentoSalud(pos, t){
    
    console.log("POSICION: "+pos)
    var vida=arrarActual[pos].salud;
    if(t=="Perro" && vida>94){
        arrarActual[pos].salud=100;
    }else if(t=="Perro"){
        arrarActual[pos].salud=arrarActual[pos].salud+5;
    }else if(t=="Gato" && vida>93){
        arrarActual[pos].salud=100;
    }else if(t=="Gato"){
        arrarActual[pos].salud=arrarActual[pos].salud+6;
    }else if(t=="Loro" && vida>94){
        arrarActual[pos].salud=100;
    }else if(t=="Loro"){
        arrarActual[pos].salud=arrarActual[pos].salud+5;
    }else{
        Alert("Tu mascota esta muy llena!");
    }
}
function AumentoFelicidad(pos, t){
    var feliz=arrarActual[pos].felicidad;
    if(t=="Perro" && feliz>94){
        arrarActual[pos].felicidad=100;
    }else if(t=="Perro"){
        arrarActual[pos].felicidad=arrarActual[pos].felicidad+5;
    }else if(t=="Gato" && feliz>97){
        arrarActual[pos].felicidad=100;
    }else if(t=="Gato"){
        arrarActual[pos].felicidad=arrarActual[pos].felicidad+2;
    }else if(t=="Loro" && feliz>95){
        arrarActual[pos].felicidad=100;
    }else if(t=="Loro"){
        arrarActual[pos].felicidad=arrarActual[pos].felicidad+4;
    }else{
        Alert("Tu mascota esta muy feliz! <3");
    }
}
function AumentoHigiene(pos, t){
    var hig=arrarActual[pos].higiene;
    if(t=="Perro" && hig>94){
        arrarActual[pos].higiene=100;
    }else if(t=="Perro"){
        arrarActual[pos].higiene=arrarActual[pos].higiene+5;
    }else if(t=="Gato" && hig>98){
        arrarActual[pos].higiene=100;
    }else if(t=="Gato"){
        arrarActual[pos].higiene=arrarActual[pos].higiene+1;
    }else if(t=="Loro" && hig>96){
        arrarActual[pos].higiene=100;
    }else if(t=="Loro"){
        arrarActual[pos].higiene=arrarActual[pos].higiene+3;
    }else{
        Alert("Tu mascota esta muy limpiar! <3");
    }
}



