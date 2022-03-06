const sideA = document.querySelector('#side-a-input');
const sideB = document.querySelector('#side-b-input');
const hypotenuseButton = document.querySelector('#hypotenuse-btn');
const outputEl = document.querySelector('#output');
const errorMsg = document.querySelector('.error-msg');

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function showMessage(element, text = '') {
  return (element.innerText = text);
}

function deleteMessage(element) {
  return (element.innerText = '');
}

function calculateHypotenuse(e) {
  e.preventDefault();
  deleteMessage(errorMsg);
  deleteMessage(outputEl);
  if (Number(sideA.value) > 0 && Number(sideB.value) > 0) {
    let sumOfSideSquares = calculateSumOfSquares(
      Number(sideA.value),
      Number(sideB.value)
    );
    let hypotenuseLength = Math.sqrt(sumOfSideSquares).toFixed(2);
    showMessage(
      outputEl,
      'The length of hypotenuse is ' + hypotenuseLength + ' units'
    );
  } else showMessage(errorMsg, 'Side length should be greater than 0');
}

deleteMessage(errorMsg);
deleteMessage(outputEl);
hypotenuseButton.addEventListener('click', calculateHypotenuse);
