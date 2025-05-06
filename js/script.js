/* GET ELEMENTS */
const $HTML = document;

let randomNum = $HTML.querySelector(".random-item");
let inputNum = $HTML.querySelector("#inputNum");
let message = $HTML.querySelector(".guess-text");
let checkingBtn = $HTML.querySelector(".checking");
let again = $HTML.querySelector(".again");
let heartsContainer = $HTML.querySelector(".hearts-img");

/* RANDOM NUMBER */
let secretNum;
function randomNumber() {
  secretNum = Math.floor(Math.random() * 20) + 1;
  return secretNum;
}
randomNumber();

/* CHECKING BUTTON FUNCTION */
checkingBtn.addEventListener("click", () => {
  let guess = Number(inputNum.value);

  if (!guess) {
    inputNum.style.borderColor = "#ff0000";
    input.style = "box-shadow: 0 0 10px #ff0000";
    setTimeout(() => {
      inputNum.style.borderColor = "";
      input.style = "box-shadow: 0 0 10px";
      inputNum.style.boxShadow = "";
    }, 1500);
  } else if (guess !== secretNum) {
    let images = $HTML.querySelectorAll(".heart-img");

    if (images.length > 0) {
      message.textContent =
        guess > secretNum ? "Your number is big" : "Your number is small";
      const lastImg = images[images.length - 1];
      lastImg.remove();
    } else if (images.length === 0) {
      message.textContent = "You Lose! 😥";
    }
  } else if (guess === secretNum) {
    message.textContent = "You Win! 🥳";
    randomNum.textContent = secretNum;
  }
});

/* RESET GAME FUNCTION */
again.addEventListener("click", () => {
  randomNumber();
  randomNum.textContent = secretNum;
  console.log(secretNum);
  inputNum.value = "";
  randomNum.textContent = "?";
  message.textContent = "Start guessing...";
  checkingBtn.disabled = false;

  heartsContainer.innerHTML = `
  <img class="heart-img" src="./assets/img/heart.png" alt="heart">
  <img class="heart-img" src="./assets/img/heart.png" alt="heart">
  <img class="heart-img" src="./assets/img/heart.png" alt="heart">
  <img class="heart-img" src="./assets/img/heart.png" alt="heart">
  <img class="heart-img" src="./assets/img/heart.png" alt="heart">
  <img class="heart-img" src="./assets/img/heart.png" alt="heart">
  <img class="heart-img" src="./assets/img/heart.png" alt="heart">
  `;
});

/* INPUT NUMBER LENGTH 2 FUNCTION */
const input = document.getElementById("inputNum");
input.addEventListener("input", () => {
  if (input.value.length > 2) {
    input.value = input.value.slice(0, 2);
  }
});


/* @Qurbonoff.11 */