function nonMutatingPush(original, newItem) {
   // Only change code below this line
  
    return original.concat(newItem);
   // Only change code above this line
  }
  
  var first = [1, 2, 3];
  var second = [4, 5];
 


  function getOutput() {
    document.getElementById("output").innerText=  nonMutatingPush(first, second);;
}