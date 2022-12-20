const squareList = arr => {
    // Only change code below this line
    return arr.filter(ele => ele>0 && ele/parseInt(ele)==1).map(ele => ele*ele);
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  
  function getOutput() {
    document.getElementById("output").innerText=squaredIntegers;

}