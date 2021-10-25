let img = document.getElementById("game-area");
let forestButton = document.getElementById("selection-one");
let mountainButton = document.getElementById("selection-two");
let beachButton = document.getElementById("selection-three");

forestButton.addEventListener("click", function() {
    document.getElementById("theme-selected").innerHTML= "Forest";
    document.getElementById("game-area").style.backgroundImage="url(../assets/images/forest.webp)"; 
})