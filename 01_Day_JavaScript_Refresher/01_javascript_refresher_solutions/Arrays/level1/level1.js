//Declare an empty array;
const empty = [];
console.log(empty);
//Declare an array with more than 5 number of elements
const five = [1,2,3,4,5];
//Find the length of your array
console.log(five.length);
//Get the first item, the middle item and the last item of the array
console.log(five[0], five[2], five[4]);
//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array
const mixedDataTypes = ['Jaquan', 25, false, {coutry: 'England', city: 'London'}, {Skills: ['JavaScript', 'Java', 'SQL', 'CSS', 'HTML', 'GIT']}]
console.log(mixedDataTypes.length);
//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//Print the array using console.log()
console.log(itCompanies);
//Print the number of companies in the array
console.log(itCompanies.length);
//Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[(itCompanies.length -1) / 2], itCompanies[itCompanies.length -1]);
//Print out each company
console.log(itCompanies.join(' '));
//Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase());
}
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
const itCompaniesSentance = itCompanies.slice();
itCompaniesSentance.splice(5, 2, 'Oracle and Amazon are big IT companies.');
console.log(itCompaniesSentance.join(', '));
//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log(itCompanies.includes('Google'));
console.log(itCompanies.includes('Tesla'));
//Filter out companies which have more than one 'o' without the filter method
const itCompaniesFilter = itCompanies.slice();
for (let i = 0; i < itCompaniesFilter.length; i++){
    let s = itCompaniesFilter[i].split('');
    let count = 0;
    for (let j = 0; j < s.length; j++){
        if (s[j] == 'o' ){
            count++;
        }
    }
    if (count >= 2){
        itCompaniesFilter.splice(i, 1);
        i--;
    }
}
console.log(itCompaniesFilter);
//Sort the array using sort() method
const itCompaniesSort = itCompanies.slice();
console.log(itCompaniesSort);
//Reverse the array using reverse() method
console.log(itCompaniesSort.reverse());
//Slice out the first 3 companies from the array
const itCompaniesSliceF = itCompanies.slice(0, 3);
console.log(itCompaniesSliceF);
//Slice out the last 3 companies from the array
const itCompaniesSliceL = itCompanies.slice(4, 7);
console.log(itCompaniesSliceL);
//Slice out the middle IT company or companies from the array
const itCompaniesSliceM = itCompanies.slice(3, 4);
console.log(itCompaniesSliceM);
//Remove the first IT company from the array
const itCompaniesShift = itCompanies.slice();
itCompaniesShift.shift();
console.log(itCompaniesShift);
//Remove the middle IT company or companies from the array
const itCompaniesSplice = itCompanies.slice();
itCompaniesSplice.splice(3, 1);
console.log(itCompaniesSplice);
//Remove the last IT company from the array
const itCompaniesPop = itCompanies.slice();
itCompaniesPop.pop();
console.log(itCompaniesPop);
//Remove all IT companies
while (itCompanies.length != 0){
    itCompanies.pop();
}
console.log(itCompanies);