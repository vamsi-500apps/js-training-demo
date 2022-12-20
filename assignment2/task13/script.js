
function sumPrimes(num) {
  let sum=0
  for(let i=1;i<=num;i++) {
    let count=0;
    for(let j=1;j<=i;j++) {
      if(i%j==0) {
        count++;
      }
    }
    if(count==2){
      sum=sum+i;
    }
  }
  return sum;
}

sumPrimes(10);
function getOutput(){
  document.getElementById("output").innerText= sumPrimes(10);;
}