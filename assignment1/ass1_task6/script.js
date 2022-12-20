
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line

function add(bookList,bookName) {
 let newArr=[...bookList];
  newArr.push(bookName);
  return newArr;
  
  // Change code above this line
}



// Change code below this line
function remove(bookList,bookName) {
let newArr=[...bookList];

  if (newArr.indexOf(bookName) >= 0) {

  newArr.splice(newArr.indexOf(bookName), 1); 
    return newArr;

    // Change code above this line
    }
}


let newBookList = add(bookList, 'A Brief History of Time');
let newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
let newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);



function getOutput() {
    document.getElementById("output").innerText=bookList;

}
