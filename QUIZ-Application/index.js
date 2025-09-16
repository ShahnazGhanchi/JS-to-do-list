document.getElementById("submitBtn").addEventListener("click", checkQuiz);

function checkQuiz() {
  // Correct answers
  let answers = {
    q1: "Markhor",
    q2: "Islamabad",
    q3: "1876",
    q4: "Balochistan",
    q5: "Jasmine"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  // Reset styles
  document.querySelectorAll(".hover-question").forEach(div => {
    div.classList.remove("correct", "incorrect");
  });

  // Check answers
  for (let q in answers) {
    let selected = document.querySelector(`input[name="${q}"]:checked`);
    let questionDiv = document.querySelector(`input[name="${q}"]`).closest(".hover-question");

    if (selected) {
      if (selected.value === answers[q]) {
        score++;
        questionDiv.classList.add("correct");
      } else {
        questionDiv.classList.add("incorrect");
      }
    } else {
      questionDiv.classList.add("incorrect");
    }
  }

  // Show result
  let result = document.getElementById("result");
  result.innerHTML = `You scored <b>${score}</b> out of <b>${total}</b>`;

  if (score === total) {
    result.style.color = "green";
    result.innerHTML += "<br>🎉 Excellent!";
  } else if (score >= total / 2) {
    result.style.color = "orange";
    result.innerHTML += "<br>🙂 Good effort!";
  } else {
    result.style.color = "red";
    result.innerHTML += "<br>😟 Try again!";
  }
}
