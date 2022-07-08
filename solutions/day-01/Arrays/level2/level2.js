//Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";
console.log(countries);
console.log(webTechs);
//First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
const words = text.split(" ");
console.log(words)
console.log(words.length)
//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);
//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);
//remove 'Honey' if you are allergic to honey
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
console.log(shoppingCart);
//modify Tea to 'Green Tea'
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');
console.log(shoppingCart);
//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.indexOf('Etheopia') == -1){
    countries.push('Etheopia');
    console.log(countries);
}else{
    console.log('ETHIOPIA');
}
//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.indexOf('Sass') == -1){
    webTechs.push('Sass');
    console.log(webTechs);
}else{
    console.log('Sass is a CSS preprocess');
}
//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
