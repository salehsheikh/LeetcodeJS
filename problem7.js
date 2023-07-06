const filter=function(arr,fn){
    const res=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            res.push(arr[i]);
        }
    }
    return res;
};
function isEven(num){
    return num%2===0;
}

const arr=[1,2,3,4,5,8,9,10,5,0];
const filteredArray=filter(arr,isEven);
console.log(filteredArray);