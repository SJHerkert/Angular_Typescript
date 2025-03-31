"use strict";
// function calculateDiscount (price: number):number {
//     return price * 0.50;
// }
function calculateDiscount(price, discount = 0.50) {
    return price * discount;
}
console.log(calculateDiscount(25, 0.30));
function displayName(firstName, lastName, prefix) {
    return (prefix) ? `${prefix} ${firstName} ${lastName}` : `${firstName} ${lastName}`;
}
console.log(displayName("John", "Smith", "Dr"));
console.log(displayName("John", "Smith"));
