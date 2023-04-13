// Social Media Navegation Button
const closeBtn = document.querySelector(".close-btn");
const media = document.querySelector(".media-box");

closeBtn.onclick = function () {
  media.classList.toggle("open");
};

// create random password
const passwordInput = document.querySelector(".password-box input");
const copyIcon = document.querySelector(".password-box .copy-icon");
const rangeInput = document.querySelector(".range-box input");
const sliderNumber = document.querySelector(".range-box .slider-number");
const generateBtn = document.querySelector(".generate-button");

let allCharacters =
  "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@,;#$%^&*(){}|-+";

function generatePassword() {
  let newPassword = "";

  for (let i = 0; i < rangeInput.value; i++) {
    let randomNumber = Math.floor(Math.random() * allCharacters.length);
    newPassword += allCharacters[randomNumber];
  }
  passwordInput.value = newPassword;
  copyIcon.classList.replace("fa-file-circle-check", "fa-copy");
}

rangeInput.addEventListener("input", () => {
  sliderNumber.innerText = rangeInput.value;
  generatePassword();
});

//copy the password
copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.classList.replace("fa-copy", "fa-file-circle-check");
});

generatePassword();
generateBtn.addEventListener("click", generatePassword);

//Limiting Characters
let inputBox = document.querySelector(".input-box"),
  text = document.querySelector(".input-box textarea"),
  singleNumber = document.querySelector(
    ".input-box .characters .single-number"
  );

text.addEventListener("keyup", () => {
  let charLenght = text.value.length;
  singleNumber.innerText = charLenght;
  charLenght > 0
    ? inputBox.classList.add("active")
    : inputBox.classList.remove("active");
  charLenght > 100
    ? inputBox.classList.add("error")
    : inputBox.classList.remove("error");
});
