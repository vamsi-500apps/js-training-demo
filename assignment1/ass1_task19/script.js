function splitify(str) {
    // Only change code below this line
   return str.split(/\W/);
  
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");
  function getOutput() {
    document.getElementById("output").innerText= splitify("Hello World,I-am code");
  }