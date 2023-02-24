function createGrid (size){
    // For each of the N rows, create N colums

    const grid = document.querySelector('.sketchbox')
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++){
        console.log(size);
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    }

}

function drawBlack(){

    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {

        square.addEventListener('mouseout', () => {
            square.style.backgroundColor = "black";
        })
    })
}

function reset(){

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    })
}

function resize(){
    const inputSize = document.getElementById('inputSize');
    const gridSize = inputSize.value;

    const grid = document.querySelector('.sketchbox');
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }

    createGrid(gridSize);
    drawBlack();
}




let size = 16;
createGrid(size);
drawBlack();
