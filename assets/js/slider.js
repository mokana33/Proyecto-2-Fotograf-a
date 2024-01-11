
/* DECLARACIÓN DE VARIABLES */
var numFotos=12;
var ordenPrincipal, ordenSiguiente;
var intervalo,temporizador;
var tiempoEspera = 3000;


const flechaIzd = document.getElementById("flechaIzd");
const flechaDch = document.getElementById("flechaDch");
const fotoActiva = document.getElementById("fotoActiva");
/*console.log(fotoActiva) = comprobamos que muestre el dato por el que estoy preguntando*/



/*EVENTOS DE ESCUCHA-eaddEventListener ----cÓDIGO PARA LA ACCIÓN DE LAS FLECHAS*/

/*Escuchamos click en la imagen de flecha de la izquierda*/
flechaIzd.addEventListener("click", function(){

    ordenPrincipal = fotoActiva.getAttribute("orden"); /* devuélveme o cógeme el dato del atributo orden que tenemos en el html*/

    ordenPrincipal = Number(ordenPrincipal);/*combiértelo en número*/

    if(ordenPrincipal === 1){
        ordenSiguiente=numFotos
    }else{
        ordenSiguiente=ordenPrincipal-1
    };

    /* fotoActiva.src="./assets/img/slider"+ordenSiguiente+"_2560.jpg"  es lo mismo que éste, pero la CONTRACOMILLA más ${variable} luego te permite que dentro de la sentencia puedas poner las comillas y comillas simples que quieras*/
    fotoActiva.src=`./assets/img/slider${ordenSiguiente}_2560.jpg` 

    fotoActiva.setAttribute("orden",ordenSiguiente) /* establecemos un nuevo valor al atributo */
    fotoActiva.setAttribute("orden",ordenSiguiente)


    clearInterval(intervalo);

    crearIntervalo();
});




flechaDch.addEventListener("click", function(){

    ordenPrincipal = fotoActiva.getAttribute("orden"); /* devuélveme o cógeme el dato del atributo orden */
    ordenPrincipal = Number(ordenPrincipal);

    if(ordenPrincipal === numFotos){/*numFotos te da el número total de fotos que hay y hace que no cree números mayores que ese, dando fallo porque esas img no existen*/
        ordenSiguiente=1
    }else{
        ordenSiguiente=ordenPrincipal+1
    }

    /* fotoActiva.src="./assets/img/slider"+ordenSiguiente+"_2560.jpg"  es lo mismo que el siguiente, pero la CONTRACOMILLA más ${variable} te permite que luego dentro de la sentencia puedas poner las comillas y comillas simples que quieras*/
    fotoActiva.src=`./assets/img/slider${ordenSiguiente}_2560.jpg` 

    fotoActiva.setAttribute("orden",ordenSiguiente) /* establecemos un nuevo valor al atributo */

});




/*IMÁGEN RANDOM AL CARGAR LA WEB*/

    let numAleatorio

    /*definir que el valor sea un número aleatorio entre los numFotos(12 en éste caso)*/
     numAleatorio=Number(numAleatorio)
    numAleatorio=Math.random()*numFotos 
    numAleatorio=Math.ceil(numAleatorio)
    
    console.log(numAleatorio)

    fotoActiva.src=`./assets/img/slider${numAleatorio}_2560.jpg` 

    fotoActiva.setAttribute("orden", numAleatorio)



/*ZONA DE FUNCIONES (Código a reutilizar)*/

    function funcion_random(){
        numAleatorio=Number(numAleatorio);
        numAleatorio=Math.random()*numFotos;
        numAleatorio=Math.ceil(numAleatorio);    
    
        fotoActiva.src=`./assets/img/slider${numAleatorio}_2560.jpg`;    
        fotoActiva.setAttribute("orden", numAleatorio);
    }

    /*llamada a la funcion*/
    funcion_random()



    /* CAMBIO AUTOMÁTICO DE IMÁGENES CADA x SEGUNDOS */

    function crearIntervalo(){
        window.setInterval(funcion_random,3000);
    }

    crearIntervalo()