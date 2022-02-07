function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    background(255);
    
    let shapeSize = 300;
    let shapeX = mouseX;
    let shapeY = mouseY;
    
    drawShape(shapeX, shapeY, shapeSize);
  }
  
  
  function drawShape(shapeX, shapeY, shapeSize) {
    strokeWeight(5);
    
    fill(255);
    square(shapeX, shapeY, shapeSize);
    
    let eyeSize = shapeSize / 10;
    let leftEyeX = shapeX + shapeSize / 10;
    let rightEyeX = shapeX + shapeSize - shapeSize / 4;
    let eyeY = shapeY + shapeSize / 10;
    
    fill(0);
    circle(leftEyeX, eyeY, eyeSize);
    circle(rightEyeX, eyeY, eyeSize);
    
    let mouthSize = shapeSize / 19;
    let mouthX = shapeX + mouthSize;
    let mouthY = shapeY + shapeSize - shapeSize / 4;
        
    line(mouthX, mouthY, mouthX + mouthSize, mouthY);
    stroke(5);
  }