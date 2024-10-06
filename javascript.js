const container = document.querySelector("#container");

function generateSquares(userInput) {
    for (i = 0; i < (userInput**2); i++) {
        const square = document.createElement("div");
        square.style.cssText = `width: ${500/userInput}px; aspect-ratio: 1/1; outline: 1px solid black;`
        square.addEventListener("mouseenter", () => {
            square.style.background = "red";
        })
        container.appendChild(square);
    }
}

generateSquares(16);

const reset = document.querySelector("button");
reset.addEventListener("click", () => {
    let userInput = prompt("Enter number of squares per side (max. 100)");
    if (userInput > 100) {
        alert("Too many squares enetered");
    } else {
        container.textContent = "";
        generateSquares(userInput);
    }
})