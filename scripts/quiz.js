const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-answers-btn");
const outputE1 = document.querySelector("#output");
const errorMsg = document.querySelector(".error-msg");

function showMessage(element, text = "") {
  return (element.innerText = text);
}

function deleteMessage(element) {
  return (element.innerText = "");
}

const correctAnswers = ["90°", "right angled", "one right angle","3, 4, 5","Equilateral triangle","85°","40","a + b + c","no","45°"];

function calculateScore(e) {
  e.preventDefault();
  deleteMessage(errorMsg);
  deleteMessage(outputE1);

  let score = 0;
  const formResults = new FormData(quizForm); //read
  //   console.log(formResults.values);

  for (let answer of correctAnswers) {
    for (let value of formResults.values()) {
      if (value === answer) {
        score = score + 1;
      }
    }
  }
  showMessage(outputE1, `Your score is ${score}`);
}

deleteMessage(errorMsg);
deleteMessage(outputE1);
submitButton.addEventListener("click", calculateScore);
