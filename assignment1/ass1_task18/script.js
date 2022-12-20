let globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let arr1=[...arr]
  // Only change code below this line
return arr1.sort(function(a,b){
  return a-b
})

  // Only change code above this line
}

nonMutatingSort(globalArray);

function getOutput() {
    document.getElementById("output").innerText=nonMutatingSort(globalArray);

}