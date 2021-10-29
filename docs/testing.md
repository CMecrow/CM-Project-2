# Testing

## Colour choice
- I decided to use a black background to maximise contrast on the site, both for accessiblity and to fit the theme of the site, clarity. The white text really jumps out on a black background and lends itself to a minimalistic page, which had always been the plan from the wireframes.

## Header
- I hadn't planned on using any sort of image or logo, instead keeping the header as just the site title 'Clarity'. However the site lacked a certain appeal without an image in the header so I found a simple image of a lotus flower to act as both a small image below the site title, and as a favicon for the site.
- The original plan had been to have a line displayed underneath the site tital right across the page, but this again looked a bit cold and not very attractive so I found a solution to implement a gradient across the line which made the overall appearance more pleasing.

## Theme choice
- When creating the buttons for the user to choose the theme of the game, it became clear that it wouldn't be imediatley clear to the user that they could make any changes. To help remedy this I added a pointer style to the cursor when the buttons were mouseovered, applying the convention that a pointer cursor indicates that something will happen should that image be pressed.

## Game area
- I had difficulty in getting the game-area div to fill a large percentage of the screen, and it was instead stuck on around 350 px. I realised that the body was actually also at this height so inserted a 'vh' measurement to the div, so it could take its measurement in relation to an existing measurement, ie the height of the viewport. This fixed the problem.
- The imported code required modifying to work with an image this size and also to be responsive overall. Using the imported code, the frost image could be loaded but would be stretched when loaded from the frost image's dimensions. Instead it was better to set the canvas width to match that of the parent div, and at the same time include the offsetting of the div in the page. This was discovered [here](https://stackoverflow.com/questions/39784153/mouse-pointer-coordinates-and-canvas-coordinates-not-matching).