
/* DECLARACIÓN DE VARIABLES */
var numFotos=12;
var ordenPrincipal, ordenSiguiente;
var intervalo,temporizador;
var tiempoEspera = 5000;


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


    /*cuando pulsamos en la flecha, quitamos el temporizador actual y creamos uno nuevo de otros 5seg */
    crearIntervalo(tiempoEspera);
});


        /*CLICK FLECHA DCHA */

flechaDch.addEventListener("click", function(){

    ordenPrincipal = fotoActiva.getAttribute("orden"); /* devuélveme o cógeme el dato del atributo orden */
    ordenPrincipal = Number(ordenPrincipal);

    if(ordenPrincipal === numFotos){/*numFotos te da el número total de fotos que hay y hace que no cree números mayores que ese, dando fallo porque esas img no existen*/
        ordenSiguiente=1;
    }else{
        ordenSiguiente=ordenPrincipal+1
    }

    /* fotoActiva.src="./assets/img/slider"+ordenSiguiente+"_2560.jpg"  es lo mismo que el siguiente, pero la CONTRACOMILLA más ${variable} te permite que luego dentro de la sentencia puedas poner las comillas y comillas simples que quieras*/
    fotoActiva.src=`./assets/img/slider${ordenSiguiente}_2560.jpg` 

    fotoActiva.setAttribute("orden",ordenSiguiente) /* establecemos un nuevo valor al atributo */
    

    crearIntervalo(tiempoEspera);

});






/*ZONA DE FUNCIONES (Código a reutilizar)*/

    /*IMÁGEN RANDOM AL CARGAR LA WEB*/
    function random(){
        let numAleatorio

        /*definir que el valor sea un número aleatorio entre los numFotos(12 en éste caso)*/
        numAleatorio=Number(numAleatorio)
        numAleatorio=Math.random()*numFotos 
        numAleatorio=Math.ceil(numAleatorio)
        
        console.log(numAleatorio)

        fotoActiva.src=`./assets/img/slider${numAleatorio}_2560.jpg` 

        fotoActiva.setAttribute("orden", numAleatorio)

    };

    /*llamada a la funcion*/
    random()
    





    /* CAMBIO AUTOMÁTICO DE IMÁGENES CADA x SEGUNDOS */

    crearIntervalo(tiempoEspera);
    
    function crearIntervalo(valorRecibido){
        //en caso de que exista en la variable intervalo un setInterval anterior, lo borramos con clearInterval

        if(intervalo != undefined){
            clearInterval(intervalo)
        }

        //creamos el intervalo en bucle donde ejecutará cada "valor de tiempo" la función random (que lo que hace es elegir un num random del 1 al 1o y mostrar la imagen en grande con dicho número)

        intervalo = window.setInterval(random,valorRecibido)
    }