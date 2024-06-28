# Coffee Clock Project

## Description

This project creates a coffe themed analog clock using HTML, CSS, and JavaScript. The clock dynamically updates every second to display the current time.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Files](#files)
- [Contributing](#contributing)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.

## Usage

Open the `index.html` file in your web browser to view the clock. No additional setup is required.

## Files

### index.html

This file contains the structure of the clock. It includes the links to the CSS file for styling and the JavaScript file for functionality.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/svg+xml" href="./clock-solid.svg">
    <link rel="stylesheet" href="./style.css">
    <title>My Clock</title>
</head>
<body>
    <div id="clock">
        <div id="clock-face">
            <div class="hand hr-hand"></div>
            <div class="hand min-hand"></div>
            <div class="hand sec-hand"></div>
        </div>
    </div>
    <script src="./clock.js"></script>
</body>
</html>
```

### style.css

This file contains the styles for the clock. It ensures the clock hands are positioned correctly and the clock is styled appropriately.

### clock.js

This file contains the JavaScript code that updates the clock hands every second based on the current time.

```javascript
const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hrHand = document.querySelector(".hr-hand");

// To ensure clock width and height are equal even on smaller devices
const clock = document.getElementById("clock");
const clockWidth = clock.offsetWidth;
clock.style.height = `${clockWidth}px`;

function setTime() {
    const now = new Date();

    const sec = now.getSeconds();
    const secDeg = (sec / 60) * 360 + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;

    const min = now.getMinutes();
    const minDeg = (min / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const hr = now.getHours();
    const hrDeg = (hr / 12) * 360 + 90;
    hrHand.style.transform = `rotate(${hrDeg}deg)`;
}

setInterval(setTime, 1000);
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes. 