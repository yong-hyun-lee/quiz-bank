let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  const choices = document.getElementById("choices");
  choices.innerHTML = '';
  q.choices.forEach((choice, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<label><input type="radio" name="choice" value="${i}"> ${choice}</label>`;
    choices.appendChild(li);
  });
  document.getElementById("result").innerText = '';
  document.getElementById("explanation").innerText = '';
}

document.getElementById("submit").onclick = () => {
  const selected = document.querySelector('input[name="choice"]:checked');
  if (!selected) return alert("답을 선택하세요!");
  const value = parseInt(selected.value);
  const q = questions[current];
  const result = value === q.answer ? "✅ 정답입니다!" : "❌ 틀렸습니다.";
  document.getElementById("result").innerText = result;
  document.getElementById("explanation").innerText = "💡 해설: " + q.explanation;
};

document.getElementById("next").onclick = () => {
  current++;
  if (current >= questions.length) {
    alert("모든 문제를 풀었습니다. 처음으로 돌아갑니다.");
    current = 0;
  }
  loadQuestion();
};

window.onload = loadQuestion;
