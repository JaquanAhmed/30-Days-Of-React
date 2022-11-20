// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class animal{
    constructor (name, age, colour, legs){
        this.name = name;
        this.age = age;
        this.colour = colour;
        this.legs = legs;
    }
}
const a1 = new animal("Sparky", 4, "black", 4);
console.log(a1);

// Create a Dog and Cat child class from the Animal Class.
class dog extends animal{

}

class cat extends animal{

}

const c1 = new cat("Firo", 1, "Green", 2);
const d1 = new dog("Shiro", 13, "White", 3);
console.log(c1);
console.log(d1);