/*
Jugemos a adivinar la palabra.
El usuario tiene 3 intentos para adivinar la palabra oculta. 

Requerimientos: 

-El juego debe tener una palabra oculta.*
-El juego puede dar 1 pista de la palabra.
-El usuario debe ingresar una suposición.
-El juego debe verificar si la suposición del usuario es correcta.*
-El juego debe tener un número limitado de intentos.*
-El juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos.*
*/

let palabrasOculta = ["casa", "perro", "gato", "computadora", "celular", "teclado", "raton", "monitor", "pantalla", "ventana"];
let palabra = palabrasOculta[Math.floor(Math.random() * palabrasOculta.length)];
let pista = palabra.charAt(0);
let numeroDeLetras = palabra.length;

console.log("Bienvenido al juego de adivina la palabra");
console.log("La palabra oculta tiene " + numeroDeLetras + " letras y la primera letra es " + pista);

let intentos = 3;

for(i=0; i<intentos; i++){
    let suposicion = prompt("Ingrese su suposicion: ");
    if(suposicion == palabra){
        console.log("Felicidades, adivinaste la palabra");
        break;
    } else {
        console.log("Intenta de nuevo");
    }

    if(i == intentos - 1){
        console.log("Lo siento, te quedaste sin intentos. La palabra era " + palabra);
    }
}

// Alternativa echa por el profesor 
let palabraOculta = "javascript";
let intentoss = 3;

function verificarSuposicion(suposicion, palabraOculta){
    if(suposicion.toLowerCase() === palabraOculta){
        return true;
    } return false;
}

function jugarAdivinaLaPalabra() {
    alert("Bienvenido al juego de adivina la palabra");
    alert("Tiene 3 intentos para adivinar la palabra oculta");
    alert("Pista: La palabra oculta es un lenguaje de programación y tiene " + palabraOculta.length + " letras y la primera letra es " + palabraOculta.charAt(0));

    while (intentoss > 0){
        let suposicion = prompt("Adivina la palabra: ");
        if(verificarSuposicion(suposicion, palabraOculta)){
            alert("Felicidades, adivinaste la palabra");
            break;
        } else{
            alert("Intenta de nuevo");
            intentoss--;
            if(intentoss > 0){
                alert("Te quedan " + intentoss + " intentos");
            } else {
                alert("Lo siento, te quedaste sin intentos. La palabra era " + palabraOculta);
                break;
            }
        }

    }

}

jugarAdivinaLaPalabra();