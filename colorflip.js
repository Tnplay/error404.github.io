var bodyElement = document.getElementById("TitleColor");
 
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
 
var delay = 0;
 
function changeColor() {
    delay++;
     
    if (delay > 80) {
        bodyElement.style.backgroundColor = getRandomColor();
        delay = 0;
    }
 
    requestAnimationFrame(changeColor);
}
changeColor();           
 
function getRandomColor() {
    // creating a random number between 0 and 255
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
     
    // going from decimal to hex
    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);
     
    // making sure single character values are prepended with a "0"
    if (hexR.length == 1) {
        hexR = "0" + hexR;
    }
     
    if (hexG.length == 1) {
        hexG = "0" + hexG;
    }
 
    if (hexB.length == 1) {
        hexB = "0" + hexB;
    }
 
    // creating the hex value by concatenatening the string values
    var hexColor = "#" + hexR + hexG + hexB;
    return hexColor.toUpperCase();
}