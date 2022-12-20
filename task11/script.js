function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}


convertHTML("Dolce & Gabbana");
  
  
function getOutput(){
  document.getElementById("output").innerText=convertHTML("Dolce & Gabbana");
}