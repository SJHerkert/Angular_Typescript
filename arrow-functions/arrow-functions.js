"use strict";
let add = function (a, b) {
    return +b;
};
let addF = (a, b) => a + b;
let speed = 100;
let car = {
    speed: 10,
    Accelerate: function () {
        this.speed += 10;
        console.log(this.speed);
    }
};
car.Accelerate();
let car2 = {
    speed: 10,
    Accelerate: function () {
        setTimeout(function () {
            this.speed += 10;
            console.log(this.speed);
        }, 3000);
    }
};
car2.Accelerate();
let car3 = {
    speed: 10,
    Accelerate: function () {
        setTimeout(() => {
            this.speed += 10;
            console.log(this.speed);
        }, 3000);
    }
};
car3.Accelerate();
let car4 = {
    speed: 10,
    Accelerate: function () {
        let _this = this;
        setTimeout(function () {
            _this.speed += 10;
            console.log(_this.speed);
        }, 3000);
    }
};
car4.Accelerate();
