const textContainer = document.querySelector(".text-container");

let text = document.querySelector(".text");

let allText = [
  "I Love Programming",
  "Acheived Gold Medal in Volleyball",
  "Extrovert",
  "Always Ready to Learn New Things",
];
let idx = 1;
let index = 0;

setInterval(showQuotes, 100);

function showQuotes() {
  text.innerHTML = allText[index].slice(0, idx);
  idx++;
  if (idx > allText[index].length) {
    idx = 1;
    index++;
    if (index >= allText.length) {
      index = 0;
    }
  }
}
