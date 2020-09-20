function getColor() {
    var color = document.getElementById("colorP").value;

    return color;
}

function getSize() {
    
    var size = JSON.parse(document.getElementById('sizeP').value);

    if(size <= 0){
        size = 1;
        document.getElementById('sizeP').value = "1";
    }

    return size;

}