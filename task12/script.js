function sumFibs(num) {
    let prevNum = 0;
    let currNum= 1;
    let result = 0;
    while (currNum <= num) {
      if (currNum % 2 !== 0) {
        result += currNum;
      }
      currNum += prevNum;
      prevNum = currNum - prevNum;
    }
  
    return result;
  }
  
  // test here
  sumFibs(4);
  function getOutput(){
    document.getElementById("output").innerText= sumFibs(4);
 }