let books = [];

function addBook(book) {
    books.push(book);
}

function removeBook(book) {
    const index = books.indexOf(book);
    if (index >= 0) {
        books.splice(index, 1);
    }
} 

function usuario() {
    let opcion = prompt("Ingrese una opción: \n 1. Agregar un libro \n 2. Eliminar un libro \n 3. Salir");
    switch(opcion) {
        case "1":
            let book = prompt("Ingrese el nombre del libro");
            addBook(book);
            console.log(books);
            usuario();
            break;
        case "2":
            let bookRemove = prompt("Ingrese el nombre del libro que desea eliminar");
            removeBook(bookRemove);
            console.log(books);
            usuario();
            break;
        case "3":
            console.log("Gracias por usar nuestra aplicación");
            break;
        default:
            console.log("Opción no válida");
            usuario();
            break;
    }
}

usuario();

// Solucion de la profesora 

let bookCart = []

const ADD_TO_CARD_ACTION = "addToCart"
const REMOVE_FROM_CART_ACTION = "removeFromCart"
const VIEW_CART_ACTION = "viewCart"

function viewCart() {
    console.log('Current Cart of Books: ', bookCart);
}

function performCartActions (action, newBook) {
    switch (action) {
        case ADD_TO_CARD_ACTION:
            bookCart.push(newBook);
        break;

        case REMOVE_FROM_CART_ACTION:
            if(bookCart.length === 0){
                console.log("Cart is empty");
            }else{
                const removeBook = bookCart.pop();
                console.log(`Removed book from the cart: ${removeBook}`);
            }
        break;
        case VIEW_CART_ACTION:
            viewCart();
        break;

        default:
            console.log("Invalid action");
        break;
    }
}

performCartActions(ADD_TO_CARD_ACTION, "Book 1");
performCartActions(VIEW_CART_ACTION);
performCartActions(ADD_TO_CARD_ACTION, "Book 2");
performCartActions(VIEW_CART_ACTION);
performCartActions(REMOVE_FROM_CART_ACTION);