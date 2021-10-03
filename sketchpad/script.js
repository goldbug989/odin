let container = document.querySelector(".container");
let btnReset = document.getElementById('btnReset');


btnReset.addEventListener("click", () => {
    //get grid element
    let grid = document.querySelectorAll(".grid").forEach((item) => {
        item.classList.remove('sketch');
    })
});


function createGrid(length) {

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


createGrid(4);