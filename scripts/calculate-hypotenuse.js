const sideA = document.querySelector("#side-a-input");
const sideB = document.querySelector("#side-b-input");
const hypotenuseButton = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");
const errorMsg = document.querySelector(".error-msg");

function calculateSumOfSquares(a, b) {
  if (a > 0 && b > 0) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
  } else showMessage(errorMsg, "Side length should be greater than 0");
}

function showMessage(element, text = "") {
  return (element.innerText = text);
}

function deleteMessage(element) {
  return (element.innerText = "");
}

function calculateHypotenuse() {
  deleteMessage(errorMsg);
  deleteMessage(outputEl);
  let sumOfSideSquares = calculateSumOfSquares(
    Number(sideA.value),
    Number(sideB.value)
  );
  let hypotenuseLength = Math.sqrt(sumOfSideSquares);
  showMessage(outputEl,"The length of hypotenuse is " + hypotenuseLength);
}

deleteMessage(errorMsg);
deleteMessage(outputEl);
hypotenuseButton.addEventListener("click", calculateHypotenuse);
