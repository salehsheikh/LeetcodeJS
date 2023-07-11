// var map=function(arr,fn){
//     var mappedArray=[];
//     let arr=[2,3,4];
//     for(let i=0;i<arr.length;i++){
//         mappedArray.push(fn(arr[i],i));
//     }
//     return mappedArray;
// }

function transformArray(arr, fn) {
    const transformedArray = [];
    for (let i = 0; i < arr.length; i++) {
      transformedArray.push(fn(arr[i], i));
    }
    return transformedArray;
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const mappingFunction = (element, index) => element * index;
  const transformed = transformArray(arr, mappingFunction);
  console.log(transformed);
  