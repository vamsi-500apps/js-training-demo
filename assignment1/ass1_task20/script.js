function sentensify(str) {
    // Only change code below this line
  
  return str.split(/\W/).join(" ");
    // Only change code above this line
  }
  
  sentensify("May-the-force-be-with-you");
  function getOutput() {
    document.getElementById("output").innerText=  sentensify("May-the-force-be-with-you");
  }  