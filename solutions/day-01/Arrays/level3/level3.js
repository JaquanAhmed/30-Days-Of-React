import { countries } from "../level2/countries.js";
import { webTechs } from "../level2/web_techs.js";
//The following is an array of 10 students ages
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//Sort the array and find the min and max age
ages.sort();
let min = ages[0];
let max = ages[ages.length-1];
console.log('min: '+ min + ', max: '+ max);
//Find the median age(one middle item or two middle items divided by two)
let median = ages[(ages.length -1) / 2];
if (typeof ages[(ages.length-1) / 2] == 'undefined'){
    median = ages[ages.length / 2];
}
console.log('median: '+ median);
//Find the average age(all items divided by number of items)
let sum = 0;
for (let i = 0; i < ages.length; i++){
    sum += ages[i];
}
console.log(sum);
let average = sum/(ages.length);
console.log('average: '+ average);
//Find the range of the ages(max minus min)
let range = (ages[ages.length -1]) - ages[0];
console.log('range: '+ range);
//Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(min - average));
console.log(Math.abs(max - average));

