"use strict";
class Vehicle {
    constructor(wheels, color) {
        this.brand = "";
        this.color = color;
        this.wheels = wheels;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
class Automobil extends Vehicle {
    constructor(color, brand) {
        super(4, color);
        this.brand = brand;
    }
}
let v1 = new Vehicle(2, "white");
let a1 = new Automobil("red", "porsche");
