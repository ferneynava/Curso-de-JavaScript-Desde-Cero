// Exercise: tournament winner
// Está teniendo lugar un torneo algorítmico en el que equipos de programadores compiten entre sí para resolver
// problemas algorítmicos lo más rápido posible. Los equipos compiten en un formato de todos contra todos,
// donde cada equipo se enfrenta a todos los demás. Solo dos equipos compiten entre sí en cada enfrentamiento,
// y en cada competición, un equipo es designado como equipo local, mientras que el otro es el equipo visitante.
// Siempre hay un claro ganador y perdedor en cada competición, sin empates. Los equipos obtienen 3 puntos
// por una victoria y 0 puntos por una derrota. El ganador general del torneo es el equipo con la mayor cantidad
// de puntos.
// Tu tarea es escribir una función que determine al ganador del torneo en función de los resultados de las
// competiciones. La entrada consta de dos arrays: competitions y results. El array competitions contiene
// pares de equipos representados como [equipoLocal, equipoVisitante], donde cada equipo es una cadena de
// hasta 30 caracteres. El array results indica el ganador de cada competición correspondiente en el array
// competitions. Específicamente, results[i] denota el ganador de competitions[i], donde un 1 en el array results
// significa que el equipo local ganó y un 0 significa que el equipo visitante ganó.
// Se garantiza que exactamente un equipo ganará el torneo, y cada equipo competirá contra todos los demás
// equipos exactamente una vez. Además, se garantiza que el torneo siempre tendrá al menos dos equipos.
//  0 = Gano equipo visitante 
//  1 = Gabo quepo Local
// Equipos Locales = Javascript, C#, Python
// Equipo Visitante = C#, Python, Javascript
// [equipoLocal, equipoVisitante]

function tournamentWinner(competitions, results){
    let newEquipos = []
    let equipoLocal = []
    let equipoVisitante = []
    let equipos = []
    let objetoEquipos = {}
    for (let i = 0; i < competitions.length; i++){
        for(let j = 0; j < competitions[i].length; j++){
            newEquipos.push(competitions[i][j])
        }
    }

    for (let num = 0; num < newEquipos.length; num++){
        if(num % 2 == 0){
            equipoLocal.push([newEquipos[num]])
            equipos.push(newEquipos[num])
        } else{
            equipoVisitante.push([newEquipos[num]])
        }
    }

    equipos.splice(0, 0, 0)
    equipos.splice(2, 0, 0)
    equipos.splice(4, 0, 0)
    
    if(results[0] === 0){
        let posicion = equipos.findIndex((equipo) => equipo === equipoVisitante[0][0])
        equipos[posicion-1] = equipos[posicion-1] += 3   

    } else {
        let posicion = equipos.findIndex((equipo) => equipo === equipoLocal[0][0])
        equipos[posicion-1] = equipos[posicion-1] += 3   
    }
    
    if(results[1] === 0){
        let posicion = equipos.findIndex((equipo) => equipo === equipoVisitante[1][0])
        equipos[posicion-1] = equipos[posicion-1] += 3
    } else {
        let posicion = equipos.findIndex((equipo) => equipo === equipoLocal[1][0])
        equipos[posicion-1] = equipos[posicion-1] += 3  
    }

    if(results[2] === 0){
        let posicion = equipos.findIndex((equipo) => equipo === equipoVisitante[2][0])
        equipos[posicion-1] = equipos[posicion-1] += 3
    } else {
        let posicion = equipos.findIndex((equipo) => equipo === equipoLocal[2][0])
        equipos[posicion-1] = equipos[posicion-1] += 3  
    }
    for (let e = 0; e < equipos.length; e += 2){
        objetoEquipos[equipos[e]] = equipos[e+1]
    }
   

    let mayorCantidad = Math.max(...Object.keys(objetoEquipos).filter((puntaje) => puntaje > 0));

    const equipoGanador = objetoEquipos[mayorCantidad];

    console.log(`El equipo ganador es ${equipoGanador} con ${mayorCantidad} puntos`)

}

const competitions = [
    ["Javascript", "C#"],
    ["C#", "Python"],
    ["Python", "Javascript"]
];

const results = [1, 0, 1]; 

tournamentWinner(competitions, results)

