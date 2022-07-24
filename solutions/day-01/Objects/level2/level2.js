const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// Find the person who has many skills in the users object.
let count = 0;
let user = '';
for (let i = 0; i < Object.keys(users).length; i++){
    let skillAmount = ((Object.entries(users)[i])[1].skills.length)
    if (skillAmount > count){
        count = skillAmount;
        user = ((Object.entries(users)[i])[0])
    }
}
console.log('The user with the most skills is ' + user);
//Count logged in users,count users having greater than equal to 50 points from the following object.
count = 0;
for (let i = 0; i < Object.keys(users).length; i++){
    if ((Object.entries(users)[i])[1].isLoggedIn){
        count += 1;
    }
}
console.log('The amount of logged in users are ' + count);
count = 0;
for (let i = 0; i < Object.keys(users).length; i++){
    if (((Object.entries(users)[i])[1].points) >= 50){
        count += 1;
    }
}
console.log('The amount of users who scored equal to or higher than 50 points are ' + count);
// Find people who are MERN stack developer from the users object
console.log('The MERN developers are:');
for (let i = 0; i < Object.keys(users).length; i++){
    let allSkills = ((Object.entries(users)[i])[1].skills);
    if (allSkills.includes('MongoDB') && allSkills.includes('Express') && allSkills.includes('React') && allSkills.includes('Node')){
        console.log((Object.entries(users)[i])[0]);
    }
}
//Set your name in the users object without modifying the original users object
const copyUsers = Object.assign(users);
copyUsers.Jaquan = {};
//Get all keys or properties of users object
console.log(Object.keys(copyUsers));
console.log(Object.values(copyUsers));
//Use the countries object to print a country name, capital, populations and languages.
const countries = {
    countryName : 'Bangladesh',
    capital : 'Dhaka',
    population : 168054247,
    languages : ['Bengali', 'Chittagonian', 'Rangpuri', 'Sylheti', 'Bangla Sign Language'],
}
console.log(countries);