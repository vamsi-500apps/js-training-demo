function diffArray(arr1, arr2) {
    let newArr = [];
   return arr1.concat(arr2).filter(item =>!arr1.includes(item)||!arr2.includes(item))
  }
  
 

  function getOutput(){
    document.getElementById("output").innerText= diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
 }