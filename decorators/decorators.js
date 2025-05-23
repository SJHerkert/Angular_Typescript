"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(constructor) {
    console.log("Constructor log");
}
function authorize(target, propertyKey, descriptor) {
    console.log('target:', target);
    console.log('propertyKey:', propertyKey);
    console.log('descriptor:', descriptor);
    //save a reference to the original method
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        //pre
        console.log('The method args are: ' + JSON.stringify(args));
        //run and store the result
        let result = originalMethod.apply(this, args);
        //post
        console.log('The return value is: ' + result);
        //return the result of the original method
        return result;
    };
    return descriptor;
}
let Test = class Test {
    constructor() { }
    hello(name) {
        return "Hello " + name;
    }
};
__decorate([
    authorize
], Test.prototype, "hello", null);
Test = __decorate([
    log
], Test);
let t = new Test();
t.hello("Victor");
