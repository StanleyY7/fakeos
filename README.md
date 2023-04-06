# Project: FakeOS

Link https://stanleyy7.github.io/fakeos/
![fakeOSDisplay](https://user-images.githubusercontent.com/119549394/212579131-0f9fc686-b26b-4e12-a7ab-13aac2d3bf01.png)

<img width="250" src="https://github.com/StanleyY7/fakeos/actions/workflows/main.yml/badge.svg"/>

## Outline

The main aim of this project was to further consolidate our understanding of HTML, CSS/SCSS and Javascript. This project involved looking at a reference image of an OS and replicating it. I chose to base my project around several images (shown in the Reference Images section) and therefore I based my design off the Mac OSX (version 10.10) Yosemite.

### My Version

![image](https://user-images.githubusercontent.com/119549394/210021374-98510733-7967-422d-a443-562cac48ed22.png)

### Reference Images

![image](https://user-images.githubusercontent.com/119549394/208292679-d47792d7-f9d4-4527-88f7-d4ebd0c09e03.png)
![image](https://user-images.githubusercontent.com/119549394/208294238-2bf08c84-432c-4038-98af-977629c521f4.png)

### Features

- Single Page Application.
- Desktop has a wallpaper that fits the viewport.
- There is selectable icons/apps.
- Selecting an icon/app will open it, creating a modal to display some content.
- Ability to close an app and later to re-open it.
- A selectable menu.
- Selecting the menu will display a list of text and icons.
- Current time is displayed on the top-right as per the reference image, as well it updates in real-time.

## MVP

The main requirements for this project were:

### HTML/SCSS

- Wallpaper scales to fit the viewport
- Minimum 3 icons on desktop
- The menu is positioned in the appropriate place (bottom left on windows, top of the screen on android)
- Apps look consistent
- Menu contains a flex with content inside it
- Apps should be able to contain text, an image or a form

### JavaScript

- JS code should be in separate files
- Icons and menu should use add event listener for the click event, and not the html onclick attribute
- Functions and variables should have good names
- Arrow syntax is to be used to declare functions (as per industry standard)

### Github

- Github is to be used throughout the development and deployment of the project to simulate industry conditions.

## Summary

I achieved the above requirements by first selecting the reference image/s I would center my design on, then I used available resources to see what features I could implement and what modals I could create to simulate users using certain applications. After this initial design stage, I then worked on creating each part of the desktop environment ensuring that it looks as close to the reference image as possible. When I was happy with the way it looked visually in comparison to the reference image, I then worked on each individual application of the dock (designing/creating modals and/or ensuring each application does an action) and then added functionality to the apps on the desktop so that it was draggable. Lastly, I then completed the header menu of the desktop environment and then worked on media enquiries for several viewports. Once all MVP requirements were met I then worked on bonus features such as added functionality for certain applications and making it able to be viewed/used on mobile and tablet devices as well.

The main challenges experienced with this project was making it responsive as the modals also had to be visually appealing across several devices and making the applications on the desktop environment draggable. To resolve these issues I used available resources online and worked on potential solutions till I eventually resolved these challenges.

### Bonus Features

I added several bonus features into the project. These features are:

- Full Scalability/Responsiveness from 4k (2560 x 1375) down to Galaxy Fold Resolution Size.
- Made dragging work on mobile/tablet interfaces.
- Mimicked IOS dock for mobile/tablet interfaces.
- From a design perspective made sure it all had the same general theme, I created certain icons, logos whilst referring to reference images etc...
- Ensured that every button or entity that would be clicked did "something" (links to external pages, modals etc..). In future I will aim to replace as many external links as possible with my own project links or modals of my own projects.
- Mimicked start up loading screen for Mac OSX Yosemite. (I included startup chime as well upon startup page load).

## Tech Stack

- HTML
- CSS/SCSS
- Javascript
