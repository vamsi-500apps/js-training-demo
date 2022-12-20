function translatePigLatin(str) {
  let vowels=["a","e","i","o","u"]
  let a=0
  for (let i of str){
  if (vowels.includes(i)){
  a=a+str.indexOf(i)
  break;
  }
  }
  if (vowels.includes(str[0])){ return str+"way"} else{
  return str.slice(a)+str.slice(0,a)+"ay"}
  }
  translatePigLatin("california")
  translatePigLatin("paragraphs")
  translatePigLatin("glove")
  translatePigLatin("algorithm")
  translatePigLatin("eight")
  
  
function getOutput(){
  document.getElementById("output").innerText=translatePigLatin("california");
}