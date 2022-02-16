const out = function (...str) {console.log(...str)}

out("Vi er klar til at sætte farven.");

const bdy = document.querySelector("body");
out(bdy);

const pbCol = document.querySelector(".pbSetColor");
const inColor = document.querySelector(".getColor");


pbCol.textContent = "Tryk mig for at ændre farve";

//lav funktion til eventhandler
function changeColor() {
  const col = inColor.value;
  out(col);
  bdy.style.backgroundColor = col;
}

pbCol.addEventListener("click", changeColor);

