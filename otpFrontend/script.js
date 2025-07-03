const inputs = document.querySelectorAll(".code");

// Focus the first input on page load
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = input.value.replace(/[^0-9]/g, "");
    input.value = value;

    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    const key = e.key;

    if (key === "Backspace") {
      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = "";
        e.preventDefault();
      } else {
        input.value = "";
      }
    }
  });

  input.addEventListener("paste", (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "");
    pasteData.split("").forEach((char, idx) => {
      if (idx < inputs.length) {
        inputs[idx].value = char;
      }
    });
    const nextIndex = Math.min(pasteData.length, inputs.length - 1);
    inputs[nextIndex].focus();
  });
});

