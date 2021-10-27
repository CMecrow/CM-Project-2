var url = "../assets/images/frost.webp";
var canvas = document.getElementById("canvas-image");
var ctx = canvas.getContext('2d');
var img = new Image();
img.src = url;

/**Gets width and height of frost image, displays image*/
img.onload = function () {
  var width =  img.width;
  var height = img.height;

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);
};

var isPress = false;
var old = null;
canvas.addEventListener('mousedown', function (e){
  isPress = true;
  old = {x: e.offsetX, y: e.offsetY};
});
canvas.addEventListener('mousemove', function (e){
  if (isPress) {
    var status = document.getElementById("co");
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.globalCompositeOperation = 'destination-out';
    status.innerHTML = x+" | "+y;

    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.fill();

    ctx.lineWidth = 60;
    ctx.beginPath();
    ctx.moveTo(old.x, old.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    old = {x: x, y: y};

  }
});
canvas.addEventListener('mouseup', function (e){
  isPress = false;
});

// Variables for buttons to select themes

let forestButton = document.getElementById("selection-one");
let mountainButton = document.getElementById("selection-two");
let beachButton = document.getElementById("selection-three");

// Forest button
forestButton.addEventListener("click", function() {
    document.getElementById("theme-selected").innerHTML= "Forest";
    document.getElementById("game-area").style.backgroundImage="url(../assets/images/forest2.webp)"; 
})

// Mountain button
mountainButton.addEventListener("click", function() {
    document.getElementById("theme-selected").innerHTML= "Mountains";
    document.getElementById("game-area").style.backgroundImage="url(../assets/images/mountains2.webp)"; 
})

// Beach button
beachButton.addEventListener("click", function() {
    document.getElementById("theme-selected").innerHTML= "Beach";
    document.getElementById("game-area").style.backgroundImage="url(../assets/images/beach5.webp)"; 
})
