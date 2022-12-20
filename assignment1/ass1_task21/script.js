
function urlSlug(title) {
    // Only change code below this line
    return title.split(" ").filter(substr => substr !== "").join("-").toLowerCase();
    
  
  }
  // Only change code above this line
  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
  
  
  function getOutput() {
    document.getElementById("output").innerText=  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
  }    