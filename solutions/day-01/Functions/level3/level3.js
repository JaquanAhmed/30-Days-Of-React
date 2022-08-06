// Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
const userIdGeneratorByUser = (characterNo, NoOfIDs) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let j = 0; j < NoOfIDs; j++){
        let result = '';
        for (let i = 0; i < characterNo; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log(result);
    }
}
document.getElementById("Generate").addEventListener("click", function(){
    userIdGeneratorByUser((document.getElementById('characterNo').value), (document.getElementById('NoOfIDs').value));
});

// Write a function generateColors which can generate any number of hexa or rgb colors.
const generateColours = (colourType, amountOfColours) => {
    const colour = [];
    for (let i = 0; i < amountOfColours; i++){
        if (colourType == 'hexa') {
            colour.push([colourType, '#' + Math.floor(Math.random()*16777215).toString(16)]);
        }else if (colourType == 'rgb'){
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255); 
            colour.push([colourType, [r, g, b]]);
        }
    }   
    return colour;
}
console.log(generateColours('hexa', 4));
console.log(generateColours('rgb', 4));

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
const factorial = (number) => {
    let  count = 1;
    for (let i = number; i > 0; i--){
        count *= number;
        number--;
    }
    return count;
}
console.log(factorial(4));

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
const isEmpty = (param) => {
    return (param ==  [] || param ==  {} || param ==  null || param ==  undefined || param ==  '' || param ==  "") ? true : false;
}
console.log(isEmpty(13));

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
const average = (arr) => {
    let count = 0;
    for (const element of arr){
        if (typeof element == 'number'){
            count += element;   
        }else {
            return 'Please make sure that all of the elements in the array are numbers'
        }
    }
    return count / arr.length;
}
console.log(average([1, 2, 3, 4, 5]));