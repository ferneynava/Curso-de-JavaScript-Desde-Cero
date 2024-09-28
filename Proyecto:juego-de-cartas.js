/* Juego de cartas Implementación  Imagina que estás construyendo un simple juego de cartas. Tienes una matriz representando una baraja de cartas, y quieres realizar el siguientes operaciones:

Barajar el mazo: aleatoriamente reorganizar el orden de las cartas en la baraja.
Repartir cartas: reparte una carta específica número de cartas a los jugadores desde lo alto de la plataforma.
Este ejercicio implica utilizar el método splice() para barajar el baraja y reparto de cartas.*/
// Barajar el mazo
const deck = ['♠️', '♣️', '♦️', '♥️', '🃏', '🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂨', '🂩', '🂪', '🂫', '🂭', '🂮', '🂱', '🂲', '🂳', '🂴', '🂵', '🂶', '🂷', '🂸', '🂹', '🂺', '🂻', '🂽', '🂾', '🃁', '🃂', '🃃', '🃄', '🃅', '🃆', '🃇', '🃈', '🃉', '🃊', '🃋', '🃍', '🃎', '🃑', '🃒', '🃓', '🃔', '🃕', '🃖', '🃗', '🃘', '🃙', '🃚', '🃛', '🃝', '🃞']

// Fisher-Yates Shuffle Algorithm
function shuffleDeck() {  
    console.log(deck.length)
    for(i=0 ; i<deck.length; i++){
        let randomIndex = Math.floor(Math.random() * deck.length);
        [deck[i]] = [deck[randomIndex]];
        
    }
}

function dealCards (numCard) {
    const dealCard = deck.splice(0, numCard);
    return dealCard
}

shuffleDeck();

const player1 = dealCards(5);
const player2 = dealCards(5);

console.log('player 1 Hand: ', player1)
console.log('player 2 Hand: ', player2)




