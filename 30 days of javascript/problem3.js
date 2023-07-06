var  expect=function(val){
    return{
        toBe:(val2)=>{
            if(val!==val2) throw new Error("not equal");
            else return true;
        },
        notTOBe:(val2)=>{
            if(val===val2) throw new Error(" equal");
            else return true;
        }
    }

};
console.log(expect(5).toBe(5));
console.log(expect(5).notTOBe(5));

