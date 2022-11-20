// Override the method you create in Animal class
class animal{
    constructor (name, age, colour, legs){
        this.name = name;
        this.age = age;
        this.colour = colour;
        this.legs = legs;
    }

    noise(){
        console.log("An animals noise is dependant on its type");
    }
}
class bird extends animal{
    constructor (name, age, colour, legs, type){
        super(name, age, colour, legs);
        this.type = type;
    }

    noise(){
        console.log("Birds kaw");
    }
}
const b1 = new bird("Qrow", 4, "Black", 2, "Crow");
console.log(b1);
console.log(b1.noise());