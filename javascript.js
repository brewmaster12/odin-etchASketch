const container = document.querySelector("#container");

let userInput = 16;

for (i = 0; i < (userInput**2); i++) {
    const square = document.createElement("div");
    square.style.cssText = `width: ${500/userInput}px; aspect-ratio: 1/1; outline: 1px solid black;`
    container.appendChild(square);
}