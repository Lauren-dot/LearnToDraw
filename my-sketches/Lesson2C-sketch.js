//Imports the canvas-sketch library and recording it at canvasSketch
const canvasSketch = require('canvas-sketch');

const settings = {
    // This creates the basic canvas space for our sketching. 
    // It will be 2048 pixels by 2048 pixels by typing "dimensions: [ 2048, 2048 ]" 
    // Or you can choose a standard size and play with it, like the example below
    // For print output, you need 300 pixels per inch
    pixelsPerInch: 300,
    // Creates a 21 x 29.7 cm canvas, which is a standard printer paper size in Europe
    dimensions: 'A4',
    // You can change it to Imperial units if you can't handle metric
    units: 'in'
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
