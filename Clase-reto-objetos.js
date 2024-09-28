/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña.
2. El usuario debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos. 
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario. 
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline. 
*/

// Código de la solución:
// Clase-reto-objetos.js

const usersDatabase = [
    {
        username: "andres",
        password: "123",
    },
    {
        username: "caro",
        password: "456",
    },
    {
        username: "mariana",
        password: "789",
    },
];

const usersTimeline = [
    {
        username: "estefany",
        timeline: "Me encanta JavaScript",
    },
    {
        username: "oscar",
        timeline: "Bebeloper es el mejor!",
    },
    {
        username: "mariana",
        timeline: "A mi me gusta más el café que el té",
    },
    {
        username: "andres",
        timeline: "Yo hoy no quiero trabajar",
    }
];

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

var userInput = prompt("Ingresa tu usuario");
var passwordInput = prompt("Ingresa tu contraseña");
const userLogin = new User(userInput, passwordInput); 

function validateUser() {
    const userData = usersDatabase.find(user => user.username === userLogin.username && user.password === userLogin.password);
    if(userData){
        alert(`Bienvenid@ ${userLogin.username}`);
        const userTimeline = usersTimeline.find(user => user.username === userLogin.username);
        if(userTimeline){
            alert(userTimeline.timeline);
        } else {
            alert("No hay timeline para mostrar   ");
        }

    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
validateUser()