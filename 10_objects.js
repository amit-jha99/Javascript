//There are two ways to declare objects (i) like literal (ii) like constructor
// singleton : where you create from any constructor then a object created called singleton.This is a unique object of its kind but when you make from another way then it is not singleton 

// object literals

const mySym = Symbol("key1")

// Object.create->will discuss later on
const JsUser={
    name :"Amit",
    "full name" : "Amit Jha",
    [mySym] :"mykey1",
    age : 24,
    location :"Mumbai(mayanagri)",
    email: "amitjha@gmail.com",
    isLoggedIn: false,
    lastLoginDays :["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);


JsUser.email ="amitjha1222@gmail.com";
// console.log(JsUser)
// Object.freeze(JsUser)// using the we can't change the value of object . it won't propogate further . will not get error as well.
JsUser.name ="kunal"
// console.log(JsUser)

JsUser.greeting =function(){
    console.log("Hello js user ");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`);
    
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());




// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id ="123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn =false
// console.log(tinderUser);

const regularUser ={
    email :"some@gmail.com",
    fullname :{
       userfullname: {
          firstname :"Amit",
          lastname :"Jha"
       }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 ={1:"a",2 :"b"}
const obj2 ={3:"a",4 :"b"}
const obj4 ={5:"a",6 :"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)// {} -> is a optional parameter

const obj3 ={...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"amitj@gmail.com"
    },
    {
        id:2,
        email:"amitj@gmail.com"
    },
    {
        id:3,
        email:"amitj@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLoggedOut'));


const course = {
    coursename : "js in hindi",
    price :"999",
    courseInstructor :"hitesh"
}

// course.courseInstructor

const {courseInstructor :instructor}=course
console.log(instructor);

