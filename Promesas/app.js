/*
Estados de la promesa:
- pending: estado inicial, no se ha cumplido ni rechazado la promesa.
- fullfilled: la promesa se ha cumplido.
- Rejected: la promesa no se ha cumplido.

callback: función que se ejecuta cuando la promesa se cumple o se rechaza, son los siguientes:
Resolved: no es un estado en si mismo, pero se refiere a una promesa que ha sido cumplida o rechazada.
Rejected: no es un estado en si mismo, pero se refiere a una promesa que ha sido rechazada.

then: método que se ejecuta cuando la promesa se cumple.
catch: método que se ejecuta cuando la promesa se rechaza.
finally: método que se ejecuta siempre que se cumpla o se rechace la promesa.
*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true;
        if(operationSuccessful) {
            resolve('Operation successful');
        } else {
            reject('Operation failed');
        }	
    }, 2000) 
})

promise.then((message) => {
    console.log(message);
})
.catch((message) => {
    console.log(message);
})