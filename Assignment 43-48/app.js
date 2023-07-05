// Question 3

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
  

// Question 5

// var counter = 0;
// var counterTarget = document.getElementById("counter");

// function increase() {
//   counter++;
//   counterTarget.textContent = counter;
// }

// function decrease() {
//   if (counter > 0) {
//     counter--;
//     counterTarget.textContent = counter;
//   }
// }