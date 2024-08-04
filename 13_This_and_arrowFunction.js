const user ={
    username :"AmitJha",
    price :999,

    welcomeMessage : function (){
        console.log(`${this.username}, welcome to  website `);
        console.log(this);
        
        
    }


}
// user.welcomeMessage()
// user.username ="KunalJha"
// user.welcomeMessage()

// console.log(this); // Okay so when you are in node environment this refers to empty object because there is no context inside global.

// function chai(){
//     let username ="AmitJha"
//     console.log(this.username) // will get undefined doesn't work inside function 
// }
// chai()

// const chai  =  function(){
//     let username ="AmitJha"
//     console.log(this.username);
    
// }
// const chai  =  ()=>{
//     // let username ="AmitJha"
//     // console.log(this.username);
//     console.log(this);
    
    
// }

// chai()
// const addTwo =(num1,num2)=>{
//       return num1+num2
// }

// const addTwo =(num1,num2)=> num1+num2
// const addTwo =(num1,num2)=> (num1+num2)

const addTwo =(num1,num2)=> ({username :"AmitJha"});
console.log(addTwo(3,4));

// const myArray =[2,5,3,7,8]
// myNewArray.forEach()
