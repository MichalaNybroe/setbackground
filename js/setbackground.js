const out = function (...str) {console.log(...str)}

out("Vi er klar til at sætte farven.");

const body = document.querySelector("body");
out(body);

const pushbuttonColor = document.querySelector(".pbSetColor");
const inputColor = document.querySelector(".getColor");


pushbuttonColor.textContent = "Tryk mig for at ændre farve";

//lav funktion til eventlistener
function changeColor() {
  const col = inputColor.value;
  out(col);
  body.style.backgroundColor = col;
}

pushbuttonColor.addEventListener("click", changeColor);

