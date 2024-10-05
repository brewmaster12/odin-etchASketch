const container = document.querySelector("#container");


for (i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.style.cssText = "flex-grow: 1; outline: 2px solid red;"
    container.appendChild(square);
}