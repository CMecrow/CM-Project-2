# Clarity
As a developer, I've been tasked with creating a website that houses a mindfulness game built with JavaScript, giving the user a calming and pleasant experience.

Please see initial design UX document available [here](https://github.com/CMecrow/CM-Project-2/blob/main/docs/clarity_ux.md) for further information on background and initial design brief, along with initial wireframe concepts [here](https://github.com/CMecrow/CM-Project-2/blob/main/docs/clarity_wireframes.pdf).

![https://i.imgur.com/oXwifhH](https://i.imgur.com/oXwifhH.jpg "Site responsiveness")

---

## User Stories
- ### First time user
  - A first time visitor should be able to identify the purpose of the site through site name / any text immediately present.
  - A first time visitor should be able to find easy access to further information about the site, in this case via the help button.
  - A first time visitor should be instantly able to interact with the site and have the site display a responsiveness and an indication to the user that their actions have had an effect.
  - A first time visitor should be able to see which parts of the site they're able to interact with.

- ### Returning user
  - A returning user should have the same experience that they had on their first visit that's influenced them to return to the site.
  - A returning user should be able to select different themes for the page, altering the background image they'd uncovered last time.
  - A returning user should have easy access to a refresher on how to interact with the site.

- ### Frequent user
  - A frequent user may require greater customisation of the game, which could be implemented in a later deployment. This will be discussed in the future features section.

## Features
- ### Site header
- Site name 'Clarity' is central to the page to be the main initial focus. This is to provide a memorable and recognisable name / brand.
- A small image of a lotus flower was included to provide a logo to run through the site and also be included as a favicon for the page.
- Header includes a styled hr element to add more structure to the page, rather than the header bleeding into the page without any distinction eg colour changes. The code was taken and adjusted in colour from [this](https://stackoverflow.com/questions/9437400/css-fade-out-horizontal-rule-line-styled-div-effect-without-images) Stackoverflow page, linking to [this](http://jsfiddle.net/andresilich/fZNbK/1/) demo.

![https://i.imgur.com/kZ1zat4](https://i.imgur.com/kZ1zat4.jpg "Site header")

- ### Mindfulness JavaScript Game
- The game area is where the goals of the site are achieved.
- The game area has been built using vh and % dimensions so it will always be the main draw of the page. This is important because due to the nature of the game on a touch device, there can be no scrolling present, as discussed in the [testing file](https://github.com/CMecrow/CM-Project-2/blob/main/docs/testing.md).
#### Theme Selection
- The user is prompted to select a theme for the game through both tag lines of 'Where shall we unwind today?' and 'Select your theme'. The buttons are designed to display to the user that they are interactive by changing the cursor to a pointer when mouseovered and also via drop shadow changes. If none of this is clear to the user, they can also get this information via the help button at the bottom of the section. The chosen drop shadow colour's match the colour scheme of the associated image, green for forest, yellow for beach for example.
- It is important to have the 'Select your theme' text change to match the selection, ie 'Forest', 'Mountains' or 'Beach' because the chosen image is covered via the frost image, so it may not be clear to the user that their selection has occurred at all. 
#### Reset and Help buttons
- The icons chosen for both the reset and the help buttons are both following an expected convention for the user. The reset icon is synonymous with either reset or undo. In this context an undo option would not make much sense so the user can comfortably assume it's a reset button. The chosen hover drop shadow colour being red indicates an impactful interaction when pressed. The help icon chosen was a question mark in a circle, again synonymous with help or more information. This button provides both of those in the form of a 'how to play' pop up.

![https://i.imgur.com/uknjy9M](https://i.imgur.com/uknjy9M.jpg "Game area")

## Future Features
### Future feature ideas
- As mentioned in the frequent visitor user stories, a level of personalisation or customisation could be implemented into the game at a later date. For example, a tool could be made so the user could select the thickness of their stroke, or potentially apply a different pattern to it.
- This customisation could then extend into the user selecting different images to clear (at present the frost image), or different images to reveal. This could either be done via the addition of more theme choices, or via an option for the user to upload their own images.
- An improvement that could be made for before the images are loaded to the page would be the inclusion of some sort of loading icon or progress bar. This was not implemented at this stage because the loading times were not too long so it'd feel unnecessary. Were the site to grow and host more games and content however, potentially slowing down the overall load times, this could become required for good UX.

## Technology Used

### Testing
The site was tested both manually and through validators / automatic resources. Separate testing file linked [here](https://github.com/CMecrow/CM-Project-2/blob/main/docs/testing.md).

### Validator Testing
HTML - No errors when passing through HTML validator - [W3C validator](https://validator.w3.org/nu/)

CSS - No errors were returned when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)

JavaScript - No errors were returned when passing through the official [JSHint](https://jshint.com/)
   The following metrics were returned:
   - There are 17 functions in this file.
   - Function with the largest signature take 1 arguments, while the median is 0.
   - Largest function has 15 statements in it, while the median is 2.
   - The most complex function has a cyclomatic complexity value of 2 while the median is 1.

### Accessibility
The site's overall accessibility was an area that was considered throughout the project.
  - Various 'handwritten' styled fonts were disregarded because they may be more difficult to read for users.
  - A strong contrast is maintained throughout the site between background colour and font colour
  - Aria-labels have been implemented where possible on the buttons on the page.
  - The overall semantic structure of the HTML code.

![https://i.imgur.com/po0bOE4](https://i.imgur.com/po0bOE4.jpg "Lighthouse rating")

### Unfixed bugs
Discussed on testing page [here](https://github.com/CMecrow/CM-Project-2/blob/main/docs/testing.md).

---

## Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows: - In the GitHub repository, navigate to the Settings tab - From the source section drop-down menu, select the Master / Main Branch - Once the master or main branch has been selected, the page will automatically be refreshed with a detailed ribbon display to indicate the successful deployment. The live link can be found [here](https://cmecrow.github.io/CM-Project-2/index.html).

---

## Credits
### Content

JavaScript canvas code base [here.](https://codepen.io/progrape/pen/XXBwWe)

Header styling [here.](https://stackoverflow.com/questions/9437400/css-fade-out-horizontal-rule-line-styled-div-effect-without-images)

Blocking text highlighting [here.](https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting)

Mouse co-ordinate help [here.](https://stackoverflow.com/questions/39784153/mouse-pointer-coordinates-and-canvas-coordinates-not-matching)

Implementing touch eventlisenters [here.](https://stackoverflow.com/questions/43936084/how-to-make-mousemove-event-working-for-touchscreen-with-touchmove)

Help box pop-up [here.](https://www.youtube.com/watch?v=iE_6pQ3RlZU).

Icons taken from [fontawesome.com.](https://fontawesome.com/)

Fonts taken from [Google fonts.](https://fonts.google.com/)

### Media
All images were taken from [pexels.com](https://www.pexels.com/), a free stock photo resource.