let divs;
for (let i = 0; i < 256; i++) {
    divs = document.createElement('div');
    divs.style.height = '16px';
    divs.style.width = '16px';
    divs.style.backgroundColor = 'black';
    document.getElementById('container').appendChild(divs);
}


