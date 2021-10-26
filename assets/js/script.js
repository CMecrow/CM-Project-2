// Variables for buttons to select themes

let img = document.getElementById("game-area");
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