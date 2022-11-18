// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
const fullName = (firstName, lastName) => {
    return (firstName + ' ' + lastName);
}
console.log(fullName("Jaquan", "Ahmed"));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (x, y) => {
    return x + y;
}
console.log(addNumbers(13, 4));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
const _areaOfCircle = (r) => {
    return ((r*r*3.14159265359));
}
console.log(_areaOfCircle(13));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
const convertCelciusToFahrenheit = (c) => {
    return ((c * (9/5)) + 32);
}
console.log(convertCelciusToFahrenheit(13));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
const calculatebmi = (heightm, weightkg) => {
    const bmi = weightkg / (heightm * heightm);
    if (bmi < 18.5){
        return "Underweight";
    }else if (bmi <= 24.9 && bmi >= 18.5){
        return "Normal Weight";
    }else if (bmi <= 29.9 && bmi >= 25){
        return "Overwight";
    }else if (bmi >= 30){
        return "Obese";
    }
}
console.log(calculatebmi(1.7, 45));

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (month) => {
    const Winter = ['December', 'January', 'Febuary'];
    const Spring = ['March', 'April', 'May'];
    const Summer = ['June', 'July', 'August'];
    const Autumn = ['September', 'October', 'Novenmber'];
    if (Winter.includes(month)){
        return "Winter";
    }else if (Spring.includes(month)){
        return "Spring";
    }else if (Summer.includes(month)){
        return "Summer";
    }else if (Autumn.includes(month)){
        return "Winter";
    }
}
console.log(checkSeason('July'));
