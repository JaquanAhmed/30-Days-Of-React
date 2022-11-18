// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
const solveQuadEquation = (a, b, c) => {
    const ans = [((-b + (Math.sqrt((b*b) - (4*a*c))))/2*a), ((-b - (Math.sqrt((b*b) - (4*a*c))))/2*a)];
    return (ans[0] == ans [1] ? [ans[0]] : ans);
}
console.log(solveQuadEquation(1, 4, 4));

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = (...args) => {
    for (const element of args){
        console.log(element);
    }
}
printArray(13, 4, 'Wolf', 'Crow');

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
const showDateTime = () => {
    const date = new Date();
    let day = date.getDate();
    day = day < 10 ? '0' + day : day; 
    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month; 
    const year = date.getFullYear();
    let hour = date.getHours();
    hour = hour < 10 ? '0' + hour : hour; 
    let minute = date.getMinutes();
    minute = minute < 10 ? '0' + minute : minute; 
    return (day + '/' + month + '/' + year + ' ' + hour + ':' + minute);
}
console.log(showDateTime());

// Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x, y) => {
    return 'x = ' + y +', y = ' + x;
}
console.log(swapValues(13, 4));

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
const reverseArray = (arr) => {
    const r = [];
    for (const n of arr){
        r.unshift(n);
    }
    return r;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = (arr) => {
    const c = [];
    for (const e of arr){
        c.push(e.toString().toUpperCase());
    }
    return c;
}
console.log(capitalizeArray(['jaquan', 'wolf', 'crow', 'ahmed', 13]));

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
let arr = [];
const addItem = (item) => {
    arr.push(item);
    return arr;
}
addItem('Jaquan');
addItem(4);
console.log(addItem(13));

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem = (index) => {
    arr.splice(index, 1);
    return arr;
}
console.log(removeItem(0));

// Declare a function name evensAndOdds. It takes a positive integer as parameter and it counts number of evens and odds in the number.
const evensAndOdds = (pInteger) => {
    const numbers = pInteger.toString().split('');
    let even = 0;
    let odd = 0;
    for (const n of numbers){
        n % 2 == 0 ? even++ : odd++;
    }
    return pInteger >= 0 ? 'There are ' + even + ' even numbers and ' + odd + ' odd numbers in your integer' : 'This is not a positive integer';
}
console.log(evensAndOdds(13435353534908231));

// Write a function which takes any number of arguments and return the sum of the arguments
const sumOfArguments = (...args) => {
    let sum = 0;
    for (const elements of args){
        sum += elements;
    }
    return sum;
}
console.log(sumOfArguments(13, 4, 3));

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const userIdGenerator = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 7; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log(userIdGenerator());

