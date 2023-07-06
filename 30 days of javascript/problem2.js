var createCounter = function(n) {
    return function  (){
        return n++
        
    };
 
};
const counter = createCounter(8);
 console.log(counter());
 console.log(counter());
