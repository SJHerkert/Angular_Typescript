// function calculateDiscount (price: number):number {
//     return price * 0.50;
// }

function calculateDiscount (price: number, discount:number = 0.50):number {
    return price * discount;
}

console.log(calculateDiscount(25, 0.30));

function displayName (firstName:string, lastName:string, prefix?:string){
    return (prefix) ? `${prefix} ${firstName} ${lastName}`:`${firstName} ${lastName}`
}

console.log(displayName("John", "Smith", "Dr"))
console.log(displayName("John", "Smith"))