const firstSide = document.querySelector('#first-side');
const secondSide = document.querySelector('#second-side');
const thirdSide = document.querySelector('#third-side');
const calculate = document.querySelector('#calculate-area');
const output = document.querySelector('#output');
const errorMsg = document.querySelector('.error-msg');

function showMessage(element, text = '') {
  return (element.innerText = text);
}

function deleteMessage(element) {
  return (element.innerText = '');
}

function calculateArea(e) {
  e.preventDefault();
  deleteMessage(errorMsg);
  deleteMessage(output);

  const firstSideValue = Number(firstSide.value);
  const secondSideValue = Number(secondSide.value);
  const thirdSideValue = Number(thirdSide.value);

  if (
    firstSideValue > 0 &&
    secondSideValue > 0 &&
    thirdSideValue > 0 &&
    firstSideValue + secondSideValue > thirdSideValue &&
    secondSideValue + thirdSideValue > firstSideValue &&
    firstSideValue + thirdSideValue > secondSideValue
  ) {
    const semiPerimeter =
      (firstSideValue + secondSideValue + thirdSideValue) / 2;

    const result = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - firstSideValue) *
        (semiPerimeter - secondSideValue) *
        (semiPerimeter - thirdSideValue)
    ).toFixed(2);
    showMessage(
      output,
      `Area of a triangle using heron's formula is ${result} sq units`
    );
  } else {
    showMessage(errorMsg, 'Enter valid side lengths');
  }
}

deleteMessage(errorMsg);
deleteMessage(output);
calculate.addEventListener('click', calculateArea);
