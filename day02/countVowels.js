function isVowel(ch){
  let smallch=ch.toLowerCase();
  if(smallch=='a' || smallch=='e' || smallch=='i' || smallch=='o' || smallch=='u'){
    return true;
  }
  return false;
}
function countVowel(str){
  let count=0;
  for(let i=0;i<str.length;i++){
    if(isVowel(str.charAt(i))){
      count++;
    }
  }
  return count;
}
console.log(countVowel("Shubham"));
