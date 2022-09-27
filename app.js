

/*function randomRGB() { //Generate random rgb value
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let RGBColor = 'rgb('+x+','+y+','+z+')';
    console.log(RGBColor);   
}*/


const container = document.getElementById('container');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    container.style.width = '960px';
    container.style.overflow = 'hidden';
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        
        cell.style.backgroundColor = 'black';
        cell.style.minwidth = '0';
        cell.style.minheight = '0';
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'white';
            setTimeout(() => {
                event.target.style.backgroundColor = 'peachpuff';
            }, 100);
        }, false);
    }
};

makeGrid(16, 16);

function gridSize() {
    const button = document.getElementById('grid-size');
    button.addEventListener('click', () => {
        document.querySelectorAll('grid-item').forEach(e => e.remove());
        let userInput = prompt('Enter number of squares per side');
        if (userInput <= 100) {
            rows = userInput;
            columns = userInput;
            makeGrid(rows, columns);
        } else if (userInput > 100) {
            alert('Size limit max is 100');
        } 
    })
};
gridSize();









