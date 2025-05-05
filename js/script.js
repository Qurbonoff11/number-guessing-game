const input = document.getElementById("inputNum");
input.addEventListener("input", () => {
  if (input.value.length > 2) {
    input.value = input.value.slice(0, 2);
  }
});