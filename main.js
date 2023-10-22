const colors = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const btn = document.querySelector(".switch");
const colorDiv = document.querySelector(".app");
const colorLabel = document.querySelector("#color-label");

btn.addEventListener("click", () => {
  click();
});

const randomNumber = () => {
  const randomIndexes = Math.floor(Math.random() * colors.length);
  return colors[randomIndexes];
};

function generateHex(stringLength) {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) {
    hexString += randomNumber();
  }

  return hexString;
}

function click() {
  const hexString = generateHex(6);
  colorDiv.style.backgroundColor = "#" + hexString;
  colorLabel.textContent = `color: #${hexString}`;
}
click();
