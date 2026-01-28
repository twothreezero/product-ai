# Lotto Number Generator

## Overview

This is a simple, modern, and visually appealing web application for generating random lottery numbers. It is built without any frameworks, using vanilla HTML, CSS, and JavaScript, leveraging modern web standards like Web Components.

## Design and Features

### Visuals
- **Theme:** Clean, modern, with a dark mode aesthetic.
- **Layout:** Centered, responsive layout using CSS Flexbox and Grid.
- **Color Palette:** A vibrant palette will be used to make the numbers pop, with glowing effects on interactive elements.
- **Typography:** Expressive, clean fonts for readability.
- **Effects:**
    - Multi-layered drop shadows for a sense of depth on containers.
    - Soft, deep shadows on generated number cards to make them look "lifted".
    - A subtle noise texture on the background for a premium feel.
    - Glowing effects on buttons and the generated numbers.

### Features
- **Number Generation:** A primary button to generate a set of 6 unique random numbers between 1 and 45.
- **Responsive Design:** The application will be fully responsive and work on both desktop and mobile devices.
- **Web Components:** The generated number sets will be displayed in a custom `<lotto-ticket>` element for encapsulation and reusability.
- **Animations:** Smooth animations will be used when new numbers are generated and displayed.

## Current Plan

1.  **[Completed]** Create `blueprint.md` to establish project goals.
2.  **[Completed]** Structure the main `index.html` file with the basic layout, including a header, controls, and a container for the generated tickets.
3.  **[Completed]** Design the core styles in `style.css`, implementing the modern theme, layout, and visual effects.
4.  **[Completed]** Implement the number generation logic and the `<lotto-ticket>` web component in `main.js`.
5.  **[Completed]** Add event listeners to connect the UI and the generation logic.
6.  **[Completed]** Refine styles and animations for a polished user experience.
