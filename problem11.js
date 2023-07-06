
var once = function(fn) {
    let called=false;
    return function(...args){
        if(called){
          return undefined;
        }called=true;
        
    
    return fn.apply(this,args)
    }
};


  let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)
 

 console.log(onceFn(1,2,3));
  onceFn(2,3,6); // returns undefined without calling fn
  console.log(onceFn(2,3,6));