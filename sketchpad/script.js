function createGrid(length) {
    //get container
    let container = document.querySelector(".container");

    for (let i = 0; i < length; i++) {
        //create row container
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < length; j++) {
            //create a square to fill row
            let gridSquare = document.createElement(`div`);
            gridSquare.classList.add('grid');
            //append container
            row.appendChild(gridSquare);

        }
        //adjust css so the 5th div doesn't wrap?
    }
}

createGrid(4);