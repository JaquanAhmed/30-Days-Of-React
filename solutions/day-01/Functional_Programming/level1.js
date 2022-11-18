const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
// Print the price of each product using forEach
products.forEach((fruit) => console.log(fruit.price));

// Print the product items as follows using forEach
// The price of banana is 3 euros.
// The price of mango is 6 euros.
// The price of potato is unknown.
// The price of avocado is 8 euros.
// The price of coffee is 10 euros.
// The price of tea is unknown.
products.forEach((fruit) => {
    let price = fruit.price == ' ' ? "unknown." : fruit.price + " euros.";
    console.log("The price of " + fruit.product + " is " + price)
});

// Calculate the sum of all the prices using forEach
let count = 0;
products.forEach((fruit) => fruit.price == ' ' ? count += 0 : count += fruit.price);
console.log(count);

// Create an array of prices using map and store it in a variable prices
const prices = [];
products.map((fruit) => prices.push(fruit.price));
console.log(prices);

// Filter products with prices
let known = products.filter((fruit) => fruit.price != ' ' && fruit.price != '');
console.log(known);

// Use method chaining to get the sum of the prices(map, filter, reduce)
 console.log(products
    .filter((fruit) => fruit.price != " ")
    .map((fruit) => (fruit.price))
    .reduce((all, cur) => all + cur));

// Calculate the sum of all the prices using reduce only
const sum = products.reduce((total, current) => {
    let price = current.price == " " ? 0 : current.price;
    return price + total
}, 0);
console.log(sum);

// Find the first product which doesn't have a price value
console.log(products.find((fruit) => fruit.price == ' ' || fruit.price == ''));

// Find the index of the first product which does not have price value
console.log(products.findIndex((fruit) => fruit.price == ' ' || fruit.price == ''));

// Check if some products do not have a price value
console.log(products.some((fruit) => fruit.price == ' ' || fruit.price == ''));

// Check if all the products have price value
console.log(products.every((fruit) => fruit.price == ' ' || fruit.price == ''));

// Explain the difference between forEach, map, filter and reduce
// forEach is used to iterate through an array.
// map is used to modify an array
// filter is used to remove and keep parts of an array
// reduce is used to sum, multiply, divide, etc an array

// Explain the difference between filter, find and findIndex
// filter removes what you do not need from an array
// find finds the first instance of a query
// findIndex finds the index number of where thatquery was first deemed true

// Explain the difference between some and every
// some is true when at least one value in an array matches the query
// every is only true when all of the values in an array match the query


