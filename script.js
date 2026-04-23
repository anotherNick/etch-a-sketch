function updateBackgroundColor(box){

    const colors = ['black', 'silver', 'gray', 'white', 'maroon', 
                    'red', 'purple', 'fuchsia', 'green', 'lime', 
                    'olive', 'yellow', 'navy', 'blue', 'teal', 
                    'aqua'];
    const opacity = parseFloat(box.style.opacity);
    
    if(box.style.backgroundColor == ""){

        box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    }

    if(opacity < 1){

        box.style.opacity = .1 + opacity;

    }
}

function makeGrid(dimension){

    const container = document.querySelector('#container');
    const fragment = document.createDocumentFragment();

    container.replaceChildren(); // Clears the grid.

    for(r = 1; r <= dimension; r++){

        for(c = 1; c <= dimension; c++){

            const newDiv = document.createElement('div');
            const width = (1 / dimension) * 100;
            const flexSettings = `0 0 ${width}%`;

            newDiv.style.opacity = "0";
            newDiv.style.flex = flexSettings;
            newDiv.classList.add('grid-box');
            
            fragment.append(newDiv);

        }

    }

    container.append(fragment);
    container.addEventListener('mouseover', (e) => {
    
        const activeBox = event.target;
        if (activeBox.matches('.grid-box')) {
   
            updateBackgroundColor(activeBox);         

        }

    });

}

function getDimension(){

    const message = "Pick a number between 1 and 100 for the grid dimensions:";
    const dimension = prompt(message);

    if(dimension > 0 && dimension <= 100){
        makeGrid(dimension);
    }else{
        alert('Must be a number between 1 and 100!');
    }


}

const rebuildButton = document.querySelector("#rebuild-button");
rebuildButton.addEventListener('click', getDimension);

