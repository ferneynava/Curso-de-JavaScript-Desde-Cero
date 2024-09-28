// includes() Determina si un array incluye un determinado elemento, devuelve true si el elemento está incluido en el array, de lo contrario, devuelve false.

const numbers = [1, 2, 3, 4, 5]	
const result1 = numbers.includes(3)
console.log(result1)

const result2 = numbers.includes(8)
console.log(result2)

// indexOf() Retorna el primer índice en el que se puede encontrar un elementos sado en el array, ó retorna -1 si el elemento no esta presente. Devuelve el primer índice en el que se encuentra un elemento dado en el array, o -1 si el elemento no está presente.

const fruits = ['apple', 'banana', 'mango', 'orange', 'peach']
const index1 = fruits.indexOf('mango')
console.log(index1)

const index2 = fruits.indexOf('blueberry')
console.log(index2)

// lastIndexOf() Retorna el último índice en el que se puede encontrar un elemento especificado en el array, ó retorna -1 si el elemento no esta presente. Devuelve el último índice en el que se encuentra un elemento dado en el array, o -1 si el elemento no está presente.

const nummersAgain = [2, 4 , 6, 8, 10, 6]
const lastIndexOf1 = nummersAgain.lastIndexOf(6)
console.log(lastIndexOf1)

const lastIndexOf2 = nummersAgain.lastIndexOf(7)
console.log(lastIndexOf2)

// Exercise Findind Substring Indices

const stringArray = ['apple', 'kiwi', 'mango', 'orange', 'peach', 'kiwi', 'strawberry']
const target = 'kiwi'

function findStringIndicesInArray (Array, target) {
    const result = {
        includesTargetString: false,
        firstOccurrence: -1,
        lastOccurrence: -1
    }

    Array.forEach((element, index) => {
        if(element.includes(target)){
            result.includesTargetString = true
            result.firstOccurrence = Array.indexOf(target)  
            result.lastOccurrence = Array.lastIndexOf(target)

        }
    } )
    return result
}

const result = findStringIndicesInArray(stringArray, target) // Expected output: [5]
console.log(result)



