interface Animal{
    name:string;
    family:string;

    makeSound():string;
}

class Dog implements Animal{
    name:string;
    family:string = "canidae";

    constructor(name:string){
        this.name = name;
    }

    makeSound(): string {
        return 'Woof';
    }
}