// #Primitive(call by value)

//7 types : String ,Number,Boolean ,null,undefined,Symbol,BigInt

const score = 100
const scoreValue =100.3
const isLoggedIn = false 
const outsideTemp =null 
let userEmail;

const id=Symbol('123')
const anotherId =Symbol('123')

console.log(id);
console.log(anotherId)
console.log(id===anotherId)

const bigNumber =346778861234567876545676n



//Reference (Non primitve)(call by reference)
//Array ,Objects,Functions

const heros =["shaktiman","naagraj","doga"]
let myObj={ 
    name :"AmitJha",
    age: 24,


}

const myFunction=function(){
 console.log("Hello world");
}

console.log(typeof myObj);
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);



// ++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-Primitive)

let myName ="AmitJha";
let anotherName =myName
anotherName="KunalJha";
console.log(anotherName);
console.log(myName);

let userOne ={
    email :"user@gmail.com",
    upi:"user@ybl"
}

let userTwo =userOne
userTwo.email = "amitjha@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);