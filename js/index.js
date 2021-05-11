var fondo = document.getElementById("fondo");
let circulo1 = document.getElementById("circulo1");
let circulo2 = document.getElementById("circulo2");
let circulo3 = document.getElementById("circulo3");

function cambiarFondo(x) {
    if (x == 1) {
        fondo.style.backgroundImage = "url(img/fondoPresentacion.jpg)";
        circulo1.classList.add("circulitos2-seleccionado");
        circulo2.classList.remove("circulitos2-seleccionado");
        circulo3.classList.remove("circulitos2-seleccionado");
        
    }else if(x == 2 ){
        fondo.style.backgroundImage = "url(img/fondoPresentacion2.jpg)";
        circulo2.classList.add("circulitos2-seleccionado");
        circulo1.classList.remove("circulitos2-seleccionado");
        circulo3.classList.remove("circulitos2-seleccionado");
    }else{
        fondo.style.backgroundImage = "url(img/fondoPresentacion4.jpg)";
        circulo3.classList.add("circulitos2-seleccionado");
        circulo1.classList.remove("circulitos2-seleccionado");
        circulo2.classList.remove("circulitos2-seleccionado");
    }
}


// MENU FIJO
let menuchico = document.getElementById('menufijo');
let menu = document.getElementById('menu');
let aaa = document.getElementById('imgg');
let logo = document.getElementById('logofijo');

window.addEventListener('scroll', function(){
if((window.pageYOffset) > 35){
    menu.classList.add('nav3');                                    
    aaa.classList.add('mg');                                    
    logo.classList.add('logo-fijo');      
    logo.style.display = "block";                              
}
else{
    menu.classList.remove('nav3');                                    
    aaa.classList.remove('mg');                                    
    logo.style.display = "none";                              
}

})   