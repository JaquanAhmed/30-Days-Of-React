// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName : '',
    lastName : '',
    incomes : [{
        income : 0,
        description : '',
    }],
    expenses : [{
        income : 0,
        description : '',
    }],
    totalIncome : function (){
        return 0;
    },
    totalExpense : function (){
        return 0;
    },
    accountInfo : function (){
        return '';
    },
    addIncome : function (){
        return 0;
    },
    addExpense : function (){
        return 0;
    },
    accountBalance : function (){
        return 0;
    },
    accountBalance : function (){
        return 0;
    },
}
const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]
// Imagine you are getting the above users collection from a MongoDB database.
// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function makeid(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

let signUp = () => {
    let now = new Date();
    let ampm = (now.getHours() >= 12) ? "PM" : "AM";
    let month = ((now.getMonth() + 1) < 10) ? '0' + (now.getMonth(+1).toString()) : now.getMonth() + 1;
    let hour = now.getHours();
    if (now.getHours() > 12){
        hour = now.getHours() - 12;
    }else if (now.getHours() == 0){
        hour = now.getHours() + 12;
    }
    let user = {
        _id: makeid(6).toLowerCase(),
        username : document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        createdAt: now.getDate() + '/' + (month) + '/' + now.getFullYear() + ' ' + hour + ':' + now.getMinutes() + ' ' + ampm,
        isLoggedIn: false,
    }
    if (user.username == users[0].username){
        alert ("I'm sorry, This user already exists");
    }else {
        users.push(user);
    }
    console.log(users);
}

// Create a function called signIn which allows user to sign in to the application
let signIn = () => {
    for (let i = 0; i < users.length; i++){
        if ((document.getElementById('username').value == users[i].username) && (document.getElementById('password').value == users[i].password)){
            users[i].isLoggedIn = 'true';
            return users[i]._id;
        }
    }
}
// The products array has three elements and each of them has six properties
// Create a function called rateProduct which rates the product
let rateProduct = () => {
    let rating = {
        userId : signIn(),
        rating : document.getElementById('rating').value,
    }
    if (document.getElementById('rating').value > 5 || document.getElementById('rating').value < 1){
        alert ('Your rating is out of bounds');
    }
    for (let i = 0; i < products.length; i++){
        if (document.getElementById('product').value == products[i].name){
            products[i].ratings.push(rating);
        }
    }
    console.log(products);
}
//  Create a function called averageRating which calculate the average rating of a product
let averageRating = () => {
    let count = 0;
    let max = 0;
    for (let i = 0; i < products.length; i++){
        if (document.getElementById('product').value == products[i].name){
            for (let j = 0; j < products[i].ratings.length; j++){
                count++;
                max += products[i].ratings[j].rate;
            }
        }
    }
    alert("The " + document.getElementById('product').value + "'s average rating is " + max/count);
}
// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
let likeProduct = () => {
    let userid = signIn();
    for (let i = 0; i < products.length; i++){
        if ((document.getElementById("product").value == products[i].name) && (!products[i].likes.includes(userid))){
            products[i].likes.push([userid].toString());
        }else if ((document.getElementById("product").value == products[i].name) && (products[i].likes.includes(userid))){
            products[i].likes.splice(products[i].likes.indexOf(userid), 1);
        }
    }
    console.log(products);
}
