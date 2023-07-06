var createHelloWorld=function(){
    return function(...args){
        return"Hello World"

    }
};
const f=createHelloWorld();
console.log(f());
// ....................................................................
// simple way to write a function
// function add(a,b){
//    const sum=a+b;
//    return sum;
// }
// console.log(add(7,9));
// ....................................................................
// anamouys function
// var fun=function (a,b) {
//     const sum=a+b;
//     return sum;
    
// }
// console.log(fun(4,9));
// ....................................................................
// iife
// const result=(function(a,b){
//     const sum=a+b;
//     return sum;
// }
// )(4,9);
// console.log(result);
// ....................................................................
//  Hoisting
  
// function createFuncton(){
//     return f;
//     function f(a,b){
//         const sum=a+b;
//         return sum;
//     }
// }
// const f=createFuncton();
// console.log(f(7,7));
// add(1,2)
// function add(a,b) {
//     console.log(a+b);
    
// }

// ....................................................................
//  closure
// function adder(a){
//     function f(b){
//         const sum=a+b;
//         return sum;
//     }
//     return f;
// }
// const f=adder(5);
// console.log(f(8));


// ....................................................................
//  high order function

// function log(inputFunction){
//     return function(...args){
//      console.log("input" ,args);
//      const result=inputFunction(...args);
//      console.log("output",result);
//      return result;
//     }
// }
// const  f=log((a,b)=>a+b);
// f(6,0);
