function nonMutatingSplice(cities) {
    // Only change code below this line
  
    return cities.slice(0, 3);
  
    // Only change code above this line
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
   function getOutput() {
    document.getElementById("output").innerText= nonMutatingSplice(inputCities);;

}