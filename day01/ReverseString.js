function reverseString(str){
      // String is immutabe in js so first we have to convert to array
      let arr=str.split(""); 
      let i=0;
      let j=arr.length-1;
      while(i<=j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
      }
      return arr.join("");// return by joining arr
}

console.log(reverseString("Shubham"));