var brush = new Brush();

var points = [];

function update() {
    brush.updateLocation(mouseX, mouseY);
}

function draw() {
    // This is how you draw a rectangle
    brush.makeVisible();
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
    brush.draw(points);
};
