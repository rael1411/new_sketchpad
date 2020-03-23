const container = document.querySelector("#container");
var defaultSquares = 16;
const userChoice = document.querySelector("#userChoice");
var newSquares = 0;
userChoice.addEventListener("click", function(){
    newSquares = prompt("How many squares per side? (between 1 and 100");
    while (newSquares < 1 || newSquares > 100){
        newSquares = prompt("How many squares per side? (between 1 and 100");
    }
    createGrid(newSquares);
    container.style.gridTemplateRows = `repeat(${newSquares}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${newSquares}, 1fr)`;
});
const clear = document.querySelector("#clear");
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



function createGrid(squaresCount){
    container.innerHTML = '';
    for (i = 0; i < squaresCount*squaresCount; i++){  
        let square = document.createElement("square");
        square.classList.add("square");
        container.appendChild(square);
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = getRandomColor();
        });
    }
}
createGrid(defaultSquares);