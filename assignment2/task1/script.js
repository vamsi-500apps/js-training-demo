function sumAll(arr) {
    let sum=0;
    let maxEle=Math.max(arr[0],arr[1]);
    let minEle=Math.min(arr[0],arr[1]);
    for(let i=minEle;i<=maxEle;i++)
    {
   sum=sum+i;
    }
    return sum;
  }
  
 
  function getOutput(){
    document.getElementById("output").innerText= sumAll([1, 4]); }