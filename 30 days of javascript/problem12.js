var addTwoPromises=async function(promise1,promise2){
    var [result1,result2]=await Promise.all([promise1,promise2]);
    var sum=result1+result2;
    return Promise.resolve(sum);
}
addTwoPromises(Promise.resolve(2),Promise.resolve(6))
.then(console.log);