function customMapper(arr,fun){
    let res=[];
    for(let i=0;i<arr.length;i++){
        res.push(fun(arr[i],i));
    }
    return res;
}
function print(element){
  return 4*element;
}
let arr=[2,4,54,65,25,76];
let newarr=customMapper(arr,print);
console.log(newarr);
