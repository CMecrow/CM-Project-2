//Variables for frost image onto canvas
var url = "./assets/images/frost.webp";
var canvas = document.getElementById("canvas-image");
var ctx = canvas.getContext('2d');
var img = new Image();
img.src = url;

/**Gets width and height from the parent div along with positioning, draws image*/
img.onload = function frostImage() {
  canvas = document.getElementById('canvas-image');
  canvas.setAttribute('width', canvas.parentNode.offsetWidth);
  canvas.setAttribute('height', canvas.parentNode.offsetHeight);
  ctx = canvas.getContext("2d");
  w = ctx.clientWidth;
  h = ctx.clientHeight;
  ctx.drawImage(img, 0, 0);
}

//isPress is false so that the effect only occurs when the mousedown event is active
var isPress = false;
var old = null;

// DESKTOP USE

//When clicked, sets isPress to true and calculates mouse co-ordinates
canvas.addEventListener('mousedown', function (e){
  isPress = true;
  old = {x: e.clientX - ctx.canvas.offsetLeft, y: e.clientY - ctx.canvas.offsetTop};
});

//When the mouse moves, tracks co-ordinates, sets the drawing parameters
canvas.addEventListener('mousemove', function (e){
  if (isPress) {
    var x = e.clientX - ctx.canvas.offsetLeft;
    var y = e.clientY - ctx.canvas.offsetTop;
    ctx.globalCompositeOperation = 'destination-out';

    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.fill();

    ctx.lineWidth = 80;
    ctx.beginPath();
    ctx.moveTo(old.x, old.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    old = {x: x, y: y};

  }
});

// No longer drawing when mouse isn't pressed
canvas.addEventListener('mouseup', function (e){
  isPress = false;
});

// MOBILE USE

//When touched, sets isPress to true and calculates mouse co-ordinates
canvas.addEventListener('touchstart', function (e){
  e.preventDefault();
  var touch = e.touches[0];
  isPress = true;
  old = {x: touch.clientX - ctx.canvas.offsetLeft, y: touch.clientY - ctx.canvas.offsetTop};
});

//When the touch moves, tracks co-ordinates, sets the drawing parameters
canvas.addEventListener('touchmove', function (e){
  if (isPress) {
    var touch = e.touches[0];
    var x = touch.clientX - ctx.canvas.offsetLeft;
    var y = touch.clientY - ctx.canvas.offsetTop;
    ctx.globalCompositeOperation = 'destination-out';
    e.preventDefault();

    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.fill();

    ctx.lineWidth = 80;
    ctx.beginPath();
    ctx.moveTo(old.x, old.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    old = {x: x, y: y};

  }
});

// No longer drawing when touch isn't active
canvas.addEventListener('touchend', function (e){
  isPress = false;
});

// Variables for buttons to select themes
let forestButton = document.getElementById("selection-one");
let mountainButton = document.getElementById("selection-two");
let beachButton = document.getElementById("selection-three");
let resetButton = document.getElementById("reset")

// Forest button
forestButton.addEventListener("click", function() {
  canvas = document.getElementById('canvas-image');
  canvas.setAttribute('width', canvas.parentNode.offsetWidth);
  canvas.setAttribute('height', canvas.parentNode.offsetHeight);
  ctx = canvas.getContext("2d");
  w = ctx.clientWidth;
  h = ctx.clientHeight;
  ctx.drawImage(img, 0, 0);
  document.getElementById("theme-selected").innerHTML= "Forest";
  document.getElementById("game-area").style.backgroundImage="url(./assets/images/forest.webp)"; 
})

// Mountain button
mountainButton.addEventListener("click", function() {
  canvas = document.getElementById('canvas-image');
  canvas.setAttribute('width', canvas.parentNode.offsetWidth);
  canvas.setAttribute('height', canvas.parentNode.offsetHeight);
  ctx = canvas.getContext("2d");
  w = ctx.clientWidth;
  h = ctx.clientHeight;
  ctx.drawImage(img, 0, 0);
  document.getElementById("theme-selected").innerHTML= "Mountains";
  document.getElementById("game-area").style.backgroundImage="url(./assets/images/mountains.webp)"; 
})

// Beach button
beachButton.addEventListener("click", function() {
  canvas = document.getElementById('canvas-image');
  canvas.setAttribute('width', canvas.parentNode.offsetWidth);
  canvas.setAttribute('height', canvas.parentNode.offsetHeight);
  ctx = canvas.getContext("2d");
  w = ctx.clientWidth;
  h = ctx.clientHeight;
  ctx.drawImage(img, 0, 0);
  document.getElementById("theme-selected").innerHTML= "Beach";
  document.getElementById("game-area").style.backgroundImage="url(./assets/images/beach.webp)"; 
})

//Reset button
resetButton.addEventListener("click", function() {
  canvas = document.getElementById('canvas-image');
  canvas.setAttribute('width', canvas.parentNode.offsetWidth);
  canvas.setAttribute('height', canvas.parentNode.offsetHeight);
  ctx = canvas.getContext("2d");
  w = ctx.clientWidth;
  h = ctx.clientHeight;
  ctx.drawImage(img, 0, 0);
})
