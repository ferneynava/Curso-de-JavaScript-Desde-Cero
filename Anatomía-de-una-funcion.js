function calculateDiscountedPrice (price, discountPercenta){
    const discount = (price * discountPercenta) / 100;
    const priceWithDiscount = price - discount;

    return priceWithDiscount;
}

const originalPrice = 1000;
const discountPercenta = 15;
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercenta);
console.log('Original Price: $' + originalPrice); 
console.log('Discount: ' + discountPercenta + '%');
console.log('Final Price: $' + finalPrice);

// Ejemplo de callback
function hola (name){
    return 'Hola ' + name;
}

function adios (name){
    return 'Adios ' + name;
}

function greet (name, callback){
    return callback(name);
}

console.log(greet('Daniel', hola));