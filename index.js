require('dotenv').config();
// console.log(process.env);
console.log(process.env.APIKEY);
console.log(process.env.PW);
console.log(process.env.USER);

const url = "https://www.omdbapi.com/" + process.env.APIKEY
console.log(url);