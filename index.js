const input = document.getElementById("password");
const uppercase = document.getElementById("uc");
const lowercase = document.getElementById("lc");
const Number = document.getElementById("num");
const Symbols = document.getElementById("symbols");
const noofchar = document.getElementById("char");
const strength = document.getElementById("strength");
const progressBar = document.getElementById("progressbar");

const passwordstrength = [
  { difficulty: "weak", color: "red" },
  { difficulty: "medium", color: "orange" },
  { difficulty: "strong", color: "green" },
];

const hasNumber = /\d/;
const hasUpperCase = /[A-Z]/;
const hasLowerCase = /[a-z]/;
const hasSpecialChar = /[^A-Za-z0-9]/;

const passwordScore = (text) => {
  let score = 0;
  if (text.length > 3) {
    score = Math.min(6, Math.floor(text.length / 3));
    score +=
      hasLowerCase.test(text) +
      hasNumber.test(text) +
      hasSpecialChar.test(text) +
      hasUpperCase.test(text);
  }
  return score;
};

const passwordstrengthchecker = (strength) => {
  if (strength > 8) {
    return passwordstrength[2];
  }
  if (strength > 5) {
    return passwordstrength[1];
  }

  return passwordstrength[0];
};


const updateUi=(length,score,strengthpass)=>{
noofchar.textContent=length
strength.textContent=strengthpass.difficulty
progressBar.style.backgroundColor=strengthpass.color
}

input.addEventListener("input", () => {
  const password = input.value;
  const score = passwordScore(password);
  const strengthpass = passwordstrengthchecker(score);
  console.log(strengthpass)
  updateUi(password.length, score, strengthpass);
});
