var cancellable =function(fn,args,t){
    fn(...args);
    let timer=setInterval(()=>fn(...args),t);
    let cancelFn=()=>clearInterval(timer);
    return cancelFn;
};

  const result = []
 
  const fn = (x) => x* 2
  const args = [4], t = 20, cancelT = 110
 
  const start = performance.now()
 
  const log = (...argsArr) => {
 		const val = fn(...argsArr)
      result.push({"time": Math.floor(performance.now() - start), "returned": fn(...argsArr)})
  }
       
  const cancel = cancellable(log, args, t);
           
  setTimeout(() => {
     cancel()
     console.log(result)
    }, cancelT)