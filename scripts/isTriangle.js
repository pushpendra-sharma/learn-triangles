const angleInputs = document.querySelectorAll(".input-angle");
const isTriangleButton = document.querySelector("#btn-is-triangle");
const output = document.querySelector("#output");
const errorMsg = document.querySelector(".error-msg");

function calculateSumOfAngles(angle1, angle2, angle3) {
  if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
  }
  return showMessage(errorMsg, "Angles must be greater than 0");
}

function showMessage(element, text = "") {
  return (element.innerText = text);
}

function deleteMessage(element) {
  return (element.innerText = "");
}

function isTriangle() {
  deleteMessage(errorMsg);
  deleteMessage(output);
  const sum = calculateSumOfAngles(
    Number(angleInputs[0].value),
    Number(angleInputs[1].value),
    Number(angleInputs[2].value)
  );
  if (sum === 180) {
    showMessage(output,"Angles form the triangle");
  } else {
    showMessage(output,"Angles don't form the triangle");
  }
}

deleteMessage(errorMsg);
deleteMessage(output);
isTriangleButton.addEventListener("click", isTriangle);
