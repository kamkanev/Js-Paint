class Brush{
    constructor(x = 0, y = 0, size = 1, color = "#000", type = 0){
        this.x = x;
        this.y = y;
        this.s = size;
        this.c = color;
        this.type = type;
        this.isPressed = false;
    }
    updateLocation(newX, newY){
        this.x = this.x+(newX-this.x);
        this.y = this.y+(newY-this.y);
    }
    makeVisible(){
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    }
    draw(points){
        if(this.isPressed){
            points.push({x: this.x, y: this.y, c: this.c});
        }
    }
}