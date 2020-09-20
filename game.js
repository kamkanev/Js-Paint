﻿var brush = new Brush();

var points = [];

function update() {
    brush.update(mouseX, mouseY);
    brush.draw(points);
}

function draw() {
    // This is how you draw a rectangle
    for (var j = 0; j < points.length; j++) {
        
        for(var i = 1; i < points[j].length; i++){
            if(points[j][i].type == 0){
                context.strokeStyle = points[j][i].c;
            context.beginPath();
            context.moveTo(points[j][i-1].x, points[j][i-1].y);
            context.lineTo(points[j][i].x, points[j][i].y);
            context.lineWidth = points[j][i].s;
            context.stroke();
            context.closePath();
            }
        }
        
    }
    brush.makeVisible();
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
    brush.isPressed = false;
};

function mousedown() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
    brush.isPressed = true;
    points.push(new Array());
};
