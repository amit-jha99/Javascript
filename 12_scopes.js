// let a = 10;
// const b =20;
// var c = 30;

// var c =300
{}
let a= 300;
if (true){
    let a = 10;
const b =20;
// var c = 30;
// console.log(a);

}

// console.log(a);
// console.log(b);
// console.log(c);

//Nested scope 

function one (){
    const username ="Amit Jha"
      function two (){
        const website ="Krishit&Party"
        console.log(username);
        
      }
    //   console.log(website);
      
      two()
}

// one()

if (true){
    const username ="AmitJha"
    if (username==="AmitJha"){
        const website =" Krishit&Party"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// +++++++++++++++++++++++interesting ++++++++++++++
console.log(addOne(5));
function addOne(num){
    return num +1

}


addTwo(5)
const addTwo = function(num){
    return num +2
}
