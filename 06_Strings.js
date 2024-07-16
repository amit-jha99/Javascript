const name ="AmitJha"
const repoCount=50;

// console.log(name + repoCount+ " Value");outdated syntax
//we gonna use backticks

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Amit-Jha-Mayanagri')
console.log(gameName.length)
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('J'));

const newString =gameName.substring(0,4);
console.log(newString);


const anotherString = gameName.slice(-2,4);
console.log(anotherString);

const newStringOne = "       Amit      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/Larry%20Page"
console.log(url.replace('%20','-'))


console.log(url.includes('Larry'));

console.log(gameName.split("-"));

