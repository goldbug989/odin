let container = document.querySelector(".container");
let btnReset = document.getElementById('btnReset');


btnReset.addEventListener("click", () => {
    //remove sketch
    let grid = document.querySelectorAll(".grid").forEach((item) => {
        item.classList.remove('sketch');
    });
    if (document.getElementById('dimension').value) {
        createGrid(document.getElementById('dimension').value);
    };

});


function createGrid(length) {
    //remove current grid
    container.innerHTML = '';

    for (let i = 0; i < length; i++) {
        //create row container
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < length; j++) {
            //create a square to fill row
            let gridSquare = document.createElement(`div`);
            gridSquare.classList.add('grid');
            //add event listener to change background color on mouseover
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.classList.add('sketch');
            })
            //append container
            row.appendChild(gridSquare);
        }
    }
}


createGrid(25);