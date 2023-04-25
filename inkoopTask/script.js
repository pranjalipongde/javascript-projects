const input = document.getElementById("inputField").value;
const message = document.getElementById("message");
const resultMessage = document.getElementById("result-message");

inputField.addEventListener("input", function () {
  const value = parseInt(inputField.value);

  if (isNaN(value)) {
    inputField.value = "";
    resultMessage.innerText = "";
    message.style.display = "none";
    return;
  }

  if (value < 0) {
    message.style.display = "block";
    resultMessage.innerText = "";
    inputField.value = "";
    return;
  } else {
    message.style.display = "none";
  }

  if (value % 2 === 0) {
    const nextThreeEvenNumbers = [value + 2, value + 4, value + 6];
    if (resultMessage) {
      resultMessage.innerText = nextThreeEvenNumbers.join(", ");
    }
  } else {
    const nextThreeOddNumbers = [value + 2, value + 4, value + 6];
    if (resultMessage) {
      resultMessage.innerText = nextThreeOddNumbers.join(", ");
    }
  }
});
