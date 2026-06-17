function filterMapper(arr,fun){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(fun(arr[i],i)) res.push(arr[i]);
        // callback returns true  -> keep element
        // callback returns false -> skip element
    }
    return res;
}
function oddOrEven(x){
  return (x % 2 ==0); // return boolean 
}
let arr=[1,2,3,4,5,6,7,8,9];
let newarr=filterMapper(arr,oddOrEven);
console.log(newarr);