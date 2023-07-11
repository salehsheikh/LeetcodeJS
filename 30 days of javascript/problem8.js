function reduceArray(nums,fn,init){
    let result=init;
    for(let i=0;i<nums.length;i++){
        result=fn(result,nums[i]);
    }
    return result;
}

function sum(a,b) {
    return a+b;
    
}

const nums=[1,6,9,8,6,5];
const init=0;
const reduceValue= reduceArray(nums,sum,init);
console.log(reduceValue);
