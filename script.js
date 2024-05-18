const textInputElement = document.getElementById('text-input');
const checkbtnElement = document.getElementById('check-btn');
const resultElement = document.getElementById('result');

function getResult() {
    resultElement.innerText = ``;
    const inputRaw = textInputElement.value;
    const input = inputRaw.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let inputReverse = "";

  if (input === "") {
    alert("Please input a value");
  } else {
    for (let i = input.length - 1; i >= 0; i--) {
      inputReverse += input[i];
    }
  }

  if (input.length === 1 ||
      input === inputReverse) {
    resultElement.innerText = `${inputRaw} is a palindrome`;
  } else {
    resultElement.innerText = `${inputRaw} is not a palindrome`;
  }

}