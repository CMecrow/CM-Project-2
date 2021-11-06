//Variables for frost image onto canvas
const url = "./assets/images/frost.webp";
let canvas = document.getElementById("canvas-image");
let ctx = canvas.getContext('2d');
let img = new Image();
img.src = url;

/**Main function for inserting frost image onto canvas*/
function frostImage() {
  canvas = document.getElementById('canvas-image');
  canvas.setAttribute('width', canvas.parentNode.offsetWidth);
  canvas.setAttribute('height', canvas.parentNode.offsetHeight);
  ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
}

/**Gets width and height from the parent div along with positioning, draws image*/
img.onload = function frostImage() {
  canvas = document.getElementById('canvas-image');
  canvas.setAttribute('width', canvas.parentNode.offsetWidth);
  canvas.setAttribute('height', canvas.parentNode.offsetHeight);
  ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
};

//isPress is false so that the effect only occurs when the mousedown event is active
let isPress = false;
let old = null;

// DESKTOP USE

//When clicked, sets isPress to true and calculates mouse co-ordinates
canvas.addEventListener('mousedown', function (e){
  isPress = true;
  old = {x: e.clientX - ctx.canvas.offsetLeft, y: e.clientY - ctx.canvas.offsetTop};
});

//When the mouse moves, tracks co-ordinates, sets the drawing parameters
canvas.addEventListener('mousemove', function (e){
  if (isPress) {
    const x = e.clientX - ctx.canvas.offsetLeft;
    const y = e.clientY - ctx.canvas.offsetTop;
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
  let touch = e.touches[0];
  isPress = true;
  old = {x: touch.clientX - ctx.canvas.offsetLeft, y: touch.clientY - ctx.canvas.offsetTop};
});

//When the touch moves, tracks co-ordinates, sets the drawing parameters
canvas.addEventListener('touchmove', function (e){
  if (isPress) {
    let touch = e.touches[0];
    const x = touch.clientX - ctx.canvas.offsetLeft;
    const y = touch.clientY - ctx.canvas.offsetTop;
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
const forestButton = document.getElementById("forest-btn");
const mountainButton = document.getElementById("mountain-btn");
const beachButton = document.getElementById("beach-btn");
const resetButton = document.getElementById("reset");
const helpButton = document.getElementById("help");
const closeButton = document.getElementById("close-help");
const clickOff = document.getElementById("overlay-one");

// Forest button
forestButton.addEventListener("click", function() {
  frostImage();
  document.getElementById("theme-selected").innerHTML= "Forest";
  document.getElementById("game-area").style.backgroundImage="url(./assets/images/forest.webp)"; 
});

// Mountain button
mountainButton.addEventListener("click", function() {
  frostImage();
  document.getElementById("theme-selected").innerHTML= "Mountains";
  document.getElementById("game-area").style.backgroundImage="url(./assets/images/mountains.webp)"; 
});

// Beach button
beachButton.addEventListener("click", function() {
  frostImage();
  document.getElementById("theme-selected").innerHTML= "Beach";
  document.getElementById("game-area").style.backgroundImage="url(./assets/images/beach.webp)"; 
});

//Reset button
resetButton.addEventListener("click", function() {
  frostImage();
});

//Help button
helpButton.addEventListener("click", function() {
  document.getElementById("help-pop").classList.toggle("active");
});

//Close button
closeButton.addEventListener("click", function() {
  document.getElementById("help-pop").classList.toggle("active");
});

//Closing help box by clicking anywhere off it
clickOff.addEventListener("click", function() {
  document.getElementById("help-pop").classList.toggle("active");
});

//Another expected way to close the pop-up window
document.addEventListener("keydown", function(e) {
  if(e.key === "Escape") {
    document.getElementById("help-pop").classList.toggle("active");
  }
});