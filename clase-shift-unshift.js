// Methods that modify the original array (Mutability)

// shift - Remueve el primer elemento de un array y lo retorna

const colors = ['red', 'green', 'blue'];
const removedColors = colors.shift();

console.log(colors);
console.log(removedColors);

// unshift - Agrega uno o más elementos al inicio de un array y retorna la nueva longitud del array

const newColors = colors.unshift('yellow', 'purple');
console.log(colors);
console.log(newColors);


// Ejercicio 
// Imagina que estas desarrollando una aplicación de musica, y tu necesitas crear una funcion para manejar una lista de reproduccion.
// Tu funcion debe ser tomar esa Playlist remover el primer elemento utilizando el metodo shift y luego agregar una nueva canción utilizando el metodo unshift. Debe retornar la nueva lista de reproduccion.

function managePlaylist(playlist, newSong) {
  playlist.shift();
  playlist.unshift(newSong);
  return playlist;
}

const initialPlaylist = ['Yesterday', 'Let it be', 'Hey Jude'];
console.log('Initial playlist', initialPlaylist);
const newSongToAdd = 'Help'

const updatePlaylist = managePlaylist(initialPlaylist, newSongToAdd);

console.log('New song to add: ', newSongToAdd);
console.log('Updated playlist: ', updatePlaylist);

