# JS Drum Kit

## Overview

This project is a simple web-based drum kit that allows users to play different drum sounds by pressing corresponding keys on their keyboard. The project uses HTML, CSS, and JavaScript to create an interactive and visually appealing interface for playing sounds.

## Features

- **Interactive Drum Keys**: Each key on the keyboard is mapped to a different drum sound. When a key is pressed, the corresponding drum sound is played.
- **Visual Feedback**: When a key is pressed, the associated key on the screen highlights, providing visual feedback to the user.
- **Audio Playback**: Predefined audio files are played when the respective keys are pressed.

## Files

- `index.html`: The main HTML file containing the structure of the drum kit.
- `style.css`: The CSS file for styling the drum kit (not included in the code snippet above).
- `sounds/`: A directory containing audio files for the drum sounds.

## How It Works

### HTML Structure

The HTML file sets up the basic structure of the drum kit:

- A `<div class="container">` that contains all the keys.
- Each key is represented by a `<div>` with a `data-key` attribute that corresponds to a specific key code.
- Inside each key `<div>`, there's a `<kbd>` element showing the key label and a `<div class="sound">` element showing the name of the drum sound.
- The audio elements are also included in the HTML, each with a `data-key` attribute linking them to their respective keys.

### JavaScript Functionality

The JavaScript code handles the interaction and sound playback:

1. **`playSound` Function**: 
   - Triggered by the `keydown` event.
   - Selects the appropriate key and audio elements based on the key code.
   - Adds a "playing" class to the key for visual feedback.
   - Resets the audio playback to the start and plays the sound.

2. **`removeTransition` Function**: 
   - Triggered by the `transitionend` event.
   - Removes the "playing" class from the key once the transition is complete.

3. **Event Listeners**:
   - Each key element listens for the `transitionend` event to remove the "playing" class.
   - The `keydown` event on the `window` object listens for key presses to trigger the `playSound` function.

## Usage

To use the drum kit, simply open the `index.html` file in a web browser. Press the keys corresponding to the displayed letters (A, S, D, F, G, H, J, K, L) to play the associated drum sounds. Each key press will produce an audio sound and a visual animation on the key.

## Future Enhancements

- Add more keys and sounds to create a more comprehensive drum kit.
- Implement touch support for mobile devices.
- Enhance the visual feedback with more sophisticated animations.

## Credits

This project is based on the tutorial by Wes Bos as part of the [JavaScript30 course](https://courses.wesbos.com/account/access/666a65edff7622bc369f5a38/view/194130650). Special thanks to Wes Bos for providing the inspiration and guidance for this project.

## Conclusion

This JS Drum Kit project is a fun and interactive way to learn and demonstrate basic web development skills using HTML, CSS, and JavaScript. It combines elements of UI design and event handling to create an engaging user experience.