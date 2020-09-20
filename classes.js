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
    update(newX, newY){
        this.updateLocation(newX, newY);
        this.c = getColor();
        this.s = getSize();
    }
    makeVisible(){
        context.beginPath();
        context.fillStyle = this.c;
        context.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    }
    draw(points){
        if(this.isPressed){
            points[points.length-1].push({x: this.x, y: this.y, c: this.c, s: this.s});
        }
    }
}