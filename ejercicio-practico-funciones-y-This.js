// Create Superheroes objets
function Superheroe(nombre, edad, poderes, energia) {
    this.nombre = nombre;
    this.edad = edad;
    this.poderes = poderes;
    this.energia = energia;
    this.isLeader = false;
    this.displayInfo = function() {
        console.log(`Nombre: ${this.nombre}
            Edad: ${this.edad}
            Poderes: ${this.poderes}
            Energia: ${this.energia}
            ${this.isLeader ? "Lider" : "No es lider"}	
            `);

    }
    this.becomeLeader = function() {
        this.isLeader = true;
        console.log(`${this.nombre} is now the leader!`);
    }
}

const superheroe1 = new Superheroe("Batman", 30, ["Dinero", "Inteligencia"], 100);
const superheroe2 = new Superheroe("Superman", 30, ["Fuerza", "Volar"], 100);
const superheroe3 = new Superheroe("Mujer Maravilla", 30, ["Fuerza", "Volar"], 100);
const superheroe4 = new Superheroe("Flash", 30, ["Velocidad", "Viajar en el tiempo"], 100);

superheroe1.becomeLeader();
superheroe1.displayInfo();
superheroe2.displayInfo();
superheroe3.displayInfo();
superheroe4.displayInfo();

