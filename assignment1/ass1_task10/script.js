let a=[2,3,4,5,6,7,8]
Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
      if (Boolean(callback(this[i], i, this)) === true) {
        newArray.push(this[i]);
      }
    }
    // Only change code above this line
    return newArray;
  };
   
  function getOutput() {
    document.getElementById("output").innerText=a.myFilter((item)=>item%2==0);

}
