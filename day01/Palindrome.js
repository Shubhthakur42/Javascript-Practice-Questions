function palindrome(str){
    let str1=str;
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
    let revstr=arr.join("");
    return str1==revstr;
}

console.log(palindrome("madam"));