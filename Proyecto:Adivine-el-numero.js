const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt("Adivina el número secreto (entre 1 y 10)"));

console.log(`Este es el número con el que juegas ${numeroJugador}`);

if(numeroJugador === numeroSecreto){
    console.log(`!Felicitaciones, adivinaste el número secreto ${numeroSecreto}`);
}else if(numeroJugador < numeroSecreto){
    console.log(`El número es demasiado bajo, intenta de nuevo`);

}else {
    console.log(`El número es demasiado alto, intenta de nuevo`);
}
