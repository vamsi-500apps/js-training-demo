function add(x) {
    // Only change code below this line
  return function(y){
    return function(z){
      return x+y+z;
    }
  }
  
    // Only change code above this line
  }
  
 let a= add(10)(20)(30);
  function getOutput(){
    document.getElementById("output").innerText=a;
  }