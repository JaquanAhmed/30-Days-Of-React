// Create an empty object called dog
const dog = {};
// Print the the dog object on the console
console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Sparky';
dog.legs = 3;
dog.color = 'blue';
dog.age = 4;
dog.bark = function(){
    return "Woof Woof";
}
// Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
// Set new properties the dog object: breed, getDogInfo
dog.breed = 'Irish Wolfhound';
dog.getDogInfo = function(){
    return ('This dog is a ' + this.age + ' year old ' + this.breed + ' named ' + this.name + '. It has ' + this.legs + ' legs and is coloured ' + this.color + '. ' + this.bark);
}
console.log(dog.getDogInfo());