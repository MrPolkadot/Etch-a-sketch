

/*function randomRGB() { //Generate random rgb value
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let RGBColor = 'rgb('+x+','+y+','+z+')';
    console.log(RGBColor);   
}*/
function gridmaker() {
    const button = document.getElementById('grid-size');
    let divs;
    let popup = function () {
        parseInt(prompt('Squares per side:'));
    }

    button.addEventListener('click', popup);
    grid();
    

    function grid() {
        for (let i = 0; i < 256; i++) {
            divs = document.createElement('div');
            divs.style.height = '16px';
            divs.style.width = '16px';
            divs.style.backgroundColor = 'black';
            document.getElementById('container').appendChild(divs);
            divs.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'white';
                setTimeout(() => {
                    event.target.style.backgroundColor = 'peachpuff';
                }, 100);
            }, false);
        }
    };

    function gridSize() {
        if (popup.value <= 100) {
            for (let i = 0; i < popup.value; i++) {
                divs = document.createElement('div');
                divs.style.height = '16px';
                divs.style.width = '16px';
                divs.style.backgroundColor = 'black';
                document.getElementById('container').appendChild(divs);
                divs.addEventListener('mouseover', (event) => {
                    event.target.style.backgroundColor = 'white';
                    setTimeout(() => {
                        event.target.style.backgroundColor = 'peachpuff';
                    }, 100);
                }, false);
            }
        } else if (popup.value > 100) {
            alert('Size limit is 100');
        }
    };
    gridSize();
};
gridmaker();




