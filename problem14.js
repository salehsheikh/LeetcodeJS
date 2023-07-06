function cancellable(fn, args, t) {
    let timerId = setTimeout(() => {
      fn(...args);
    }, t);
  
    function cancelFn() {
      clearTimeout(timerId);
    }
  
    return cancelFn;
  }
  const result = [];
  const fn = (x) => x * 5;
  const args = [2];
  const t = 20;
  const cancelT = 50;
  
  const log = (...argsArr) => {
    result.push({ time: t, returned: fn(...argsArr) });
  };
  
  const cancel = cancellable(log, args, t);
  
  setTimeout(function() {
    cancel();
    console.log(result); // [{"time":20,"returned":10}]
  }, cancelT);

  



  
// var cancellable = function(fn, args, t) {
//     const cancelfn=function(){
//         clearTimeout(timer);
//     };
//     const timer=setTimeout(()=>{
//         fn(...args)
//     },t);
//     return cancelfn;
//  };
 
 
//     const result = []
  
//     const fn = (x) => x * 5
//     const args = [2], t = 20, cancelT = 50
  
//     const log = (...argsArr) => {
//         result.push(fn(...argsArr))
//     }
         
//     const cancel = cancellable(fn, args, t);
             
//     setTimeout(() => {
//        cancel()
//        console.log(result) // [{"time":20,"returned":10}]
//     }, cancelT)
  