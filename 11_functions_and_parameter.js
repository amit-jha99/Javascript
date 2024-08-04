function sayMyName(){
    console.log("Hello Amit Jha");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//   console.log(number1 + number2);
   
// }
function addTwoNumbers(number1, number2){
  return number1 + number2;
 
  
   
}

const result =addTwoNumbers(3,5)
// console.log("Result:",result);

// addTwoNumbers(100,200)

function loginUserMessage(username ="AmitJha"){
    if(username=== undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Amit Jha"));
// console.log(loginUserMessage());// will get undefined not null

function calculateCartPrice(...num1){//rest operator
 
    return num1
}

// console.log(calculateCartPrice(200,400,500));

const user ={
    username: "AmitJha",
    price :199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and  price is ${anyObject.price}`);

}
// handleObject(user)
handleObject({
    username :"Sam",
    price :399
})

const myNewArray =[200,400,100,600];

function returnSecondValue(getArray){
    return getArray[2]

}
console.log(returnSecondValue(myNewArray));