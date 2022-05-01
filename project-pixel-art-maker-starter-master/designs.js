// Select color input
const color = document.getElementById('colorPicker');

// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');

const canvas = document.getElementById('pixelCanvas');
const picker = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
picker.addEventListener('submit', function(e) {
    canvas.innerHTML = '';
    e.preventDefault();
    makeGrid();
});

function makeGrid() {
    // Your code goes here!
    for(var i = 0; i < height.value; i++) {
        const row = canvas.insertRow(0);
        for (var j = 0; j < width.value; j++) {
            row.insertCell(0);
        }
    }
};
//to add color to canvas
canvas.addEventListener('click', function(e){
    if(e.target.nodeName === 'TD') {
        e.target.style.backgroundColor = color.value;
    }
});