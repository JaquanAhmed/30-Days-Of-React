// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let drivingAge = () => {
    let Age = document.getElementById("age").value;
    if (Age >= 18){
        alert('You are old enough to drive');
    }else{
        alert('You are left with ' + (18 - Age) + ' years to drive.');
    }
}
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let compareAge = () => {
    let yourAge = document.getElementById("age").value;
    let myAge = 26;
    if (yourAge > myAge){
        alert("You're " + (yourAge - myAge) + " years older than me.");
    }else if (yourAge < myAge){
        alert("You're " + (myAge - yourAge) + " years younger than me.");
    }else{
        alert("You're the same age as me");
    }
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
let a = 4
let b = 3
if (a>b){
    console.log(a + " is greater than " + b)
} else{
    console.log(b + " is greater than " + a)
}

(a > b)
    ? console.log(a + " is greater than " + b)
    : console.log(b + " is greater than " + a)

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let isEven = () => {
    let inputedNumber = document.getElementById("iNumber").value;
    console.log(inputedNumber % 2);
    (inputedNumber % 2 == 0)
        ? alert(inputedNumber + " is an even number")
        : alert(inputedNumber + " is an odd number")
}

