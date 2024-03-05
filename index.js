// SLIDER NAVBAR START
function openNav() {
  document.getElementById("side-nav").style.width = "230px";
}
function closeNav() {
  document.getElementById("side-nav").style.width = "0";
}

// SLIDER NAVBAR END 

// TYPING TEXT START 
const wordList = ["DESIGNER", "CODER", "DEVELOPER"];
let innerText = document.querySelector(".color-text");

let wordListIndex = 0;
let wordIndex = 0;
let reverseType = false;

const interval = setInterval(() => {
  if (!reverseType == true) {
    innerText.innerHTML =
    innerText.innerHTML + wordList[wordListIndex][wordIndex];
    wordIndex++;
    console.log();
  } else {
    innerText.innerHTML = innerText.innerHTML.slice( 0, innerText.innerHTML.length - 1);
  }
  if (wordIndex == wordList[wordListIndex].length) {
    reverseType = true;
  }
  if (innerText.innerHTML.length === 0 && reverseType) {
    reverseType = false;
    wordIndex = 0;
    wordListIndex++;
  }

  if (wordListIndex === wordList.length) {
    wordListIndex = 0;
  }
}, 300);

// TYPING TEXT END 
