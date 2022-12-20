function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
function getOutput(){
  document.getElementById("output").innerText=dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });
}