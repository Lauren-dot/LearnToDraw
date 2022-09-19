//Imports the canvas-sketch library and recording it at canvasSketch
const canvasSketch = require('canvas-sketch');

const settings = {
  // This creates the basic canvas space for our sketching. It will be 2048 pixels by 2048 pixels. These values are in pixels.
  dimensions: [ 2048, 2048 ]
};

// Function, which returns another function
const sketch = () => {
  // This is an anonymous (unnamed) function. It defines parameters of conext, width, and height.
  return ({ context, width, height }) => {
    //This ensures the canvas is a white blank space when we start.
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
  };
};

//Calls and executes the canvas, using both the sketch function and settings as parameters
canvasSketch(sketch, settings);
