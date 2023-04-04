const calculateBtn = document.getElementById("calculate");
const equationInput = document.getElementById("equation");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const equation = equationInput.value;
  const result = eval(equation);
  resultDiv.innerText = result;
});