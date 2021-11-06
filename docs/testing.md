# Testing

## Colour choice
- I decided to use a black background to maximise contrast on the site, both for accessiblity and to fit the theme of the site, clarity. The white text really jumps out on a black background and lends itself to a minimalistic page, which had always been the plan from the wireframes.

## Background image on load
- The original idea for the initial background image, before a theme was selected, was to have the image of frost repeated. This however would look strange if the user interacted with the canvas before selecting a theme. I therefore changed the image to another calming picture so the game could be played straight away before a theme is selected. A better implementation of this would be to include game instructions in a pleasant style on the initial load image, directing the user to make a choice on theme. This wasn't implemented as any typography attempted looked clunky and forced, rather than integrating with the image at all.

## Text
- I quickly found through testing that there must be some way of blocking text on the sight being highlighted by the user, should their cursor move out of the canvas element while the mouse is clicked. I found a way of implementing this through css, documented [here](https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting). A possible downside of this would be that the small amount of text is now not easily copied and pasted into some sort of translate service should the user not be a native speaker.

## Page size
- Because on a mobile or any touch device, the user would be holding their finger or stylus down on the page, any scrolling present was going to quickly create an issue. To remedy this I applied a height of 100% on both the body and html, with an overflow of hidden.

## Header
- I hadn't planned on using any sort of image or logo, instead keeping the header as just the site title 'Clarity'. However the site lacked a certain appeal without an image in the header so I found a simple image of a lotus flower to act as both a small image below the site title, and as a favicon for the site.
- The original plan had been to have a line displayed underneath the site tital right across the page, but this again looked a bit cold and not very attractive so I found a solution to implement a gradient across the line which made the overall appearance more pleasing.

## Theme choice
- When creating the buttons for the user to choose the theme of the game, it became clear that it wouldn't be imediatley clear to the user that they could make any changes. To help remedy this I added a pointer style to the cursor when the buttons were mouseovered, applying the convention that a pointer cursor indicates that something will happen should that image be pressed. I also added mouseover effects to the buttons, to make them more visually appealing and to further demonstrate that they were interactable for the user.

## Game area
- I had difficulty in getting the game-area div to fill a large percentage of the screen, and it was instead stuck on around 350 px. I realised that the body was actually also at this height so inserted a 'vh' measurement to the div, so it could take its measurement in relation to an existing measurement, ie the height of the viewport. This fixed the problem.
- The imported code required modifying to work with an image this size and also to be responsive overall. Using the imported code, the frost image could be loaded but would be stretched when loaded from the frost image's dimensions. Instead it was better to set the canvas width to match that of the parent div, and at the same time include the offsetting of the div in the page. This was discovered [here](https://stackoverflow.com/questions/39784153/mouse-pointer-coordinates-and-canvas-coordinates-not-matching).

## Mobile use
- The original code was only functional on 'mousedown' and 'mousemove' event listeners so I had to create touch equivilents to have the game functional on touch devices. At first I just copied the code with the new eventlisteners but this did not work in testing. This gave me quite a large amount of trouble until I stumbled on [this Stackoverflow post](https://stackoverflow.com/questions/43936084/how-to-make-mousemove-event-working-for-touchscreen-with-touchmove), which explained that there is no clientX or clientY properties on touch events.

## Media Queries used
- Because a lot of the css measurements were done with regards to percentages and viewheights, the site maintains it's integrity until under 250px in width. This should be ample space for the vast majority of mobile devices so no queries were added with regards to width.
- Height however was more of an issue and the site had to be adjusted on the following breakpoints:
- 850px - content become condensed and cramped so the tagline of 'Where shall we unwind today' was hidden. This tagline served a similar function for the user as the already present 'Select your theme' line just below, but had been kept as it continued the overall feel and tone of the website.
- 760px - same issue as above, so this time the site 'logo' is hidden, along with the prompt of 'select your theme'. It was at this point in development that the 'help' button was added at the bottom of the page, because when these two discussed prompts are hidden, it is no longer obvious to the user, what choice they need to make.
- 600px - continuation of the above, the site instructions are now hidden. This should not cause an issue for the user as the help button is now in place, providing the user with instruction on how to interact with the page.

## Button Icons
- To help the user understand what each button may do at a glance I added small images to the theme selection buttons, along with a coloured box shadow effect on mouseover, green for the forest button, blue for the mountains and yellow for the beach. For the reset and help buttons I used expected icons from [fontawesome](https://fontawesome.com/), both icons clearly indicating a 'reset' and 'help' message.

## Help box
- I had not originally planned to implement a 'help' feature to the page, instead making sure there were instructions available on the page to guide the user. For example, the theme selection text 'Select your theme' and 'Where shall we unwind today?' with regards to theme and also the instructions underneath the game area. However when scaling the site for smaller touch devices, the instructions took up too much room on the page but I considered them too important to just remove altogether. Instead I found a simple walkthrough on creating a simple pop-up [here](https://www.youtube.com/watch?v=iE_6pQ3RlZU). I used this as way for the user to get the same information without it taking away space on the page for the game.