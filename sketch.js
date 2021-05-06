let buttonL, buttonS, buttonW, buttonN;
let rows = 2;
let columns = 2;

function setup() {
  createCanvas(400, 400, WEBGL);
  buttonL = createButton('Longer!');
  buttonL.position(20, 20);
  buttonL.mousePressed(upRow);
  buttonS = createButton('Shorter!');
  buttonS.position(20, 50);
  buttonS.mousePressed(downRow);
  buttonW = createButton('Wider!');
  buttonW.position(100, 20);
  buttonW.mousePressed(upCol);
  buttonN = createButton('Narrower!');
  buttonN.position(100, 50);
  buttonN.mousePressed(downCol);
}

function upRow() {
  rows++;
}

function downRow() {
  if (rows < 1) {
    rows = 0;
  } else {
    rows--;
  }
}

function upCol() {
  columns = columns + 2;
}

function downCol() {
  if (columns < 2) {
    columns = 0;
  } else {
    columns = columns - 2;
  }
}

function draw() {
  background(90, 134, 173);
  rotateY(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  rotateZ(frameCount * 0.001);
  coolFold();
}

function coolFold() {
  let x1 = 0, y1 = 0, z1 = 0;
  let x2 = 0, y2 = 10, z2 = 5;
  let x3 = 10, y3 = 20, z3 = 5;
  let x4 = 10, y4 = 10, z4 = 0;
  let flipH = true;
  let flipV = true;
  for (h = 0; h < rows; h++) {
    for (i = 0; i < columns; i++) {
      if (flipH) {
        var swapH = -10;
      } else {
        var swapH = 10;
      }
      if (flipV) {
        var swapV1 = 5;
        var swapV2 = -5;
      } else {
        var swapV1 = -5;
        var swapV2 = 5;
      }
      quad(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);
      x1 = x4;
      y1 = y4;
      z1 = z4;
      x2 = x1;
      y2 = y1 + 10;
      z2 = z1 + swapV1;
      x3 = x2 + 10;
      y3 = y2 + swapH;
      z3 = z2;
      x4 = x3;
      y4 = y3 - 10;
      z4 = z3 + swapV2;
      if (flipH) {
        flipH = false;
      } else {
        flipH = true;
      }
    }
    x1 = x4 - ((columns * 10) + 10);
    if (flipH) {
      y1 = y4;
    } else {
      y1 = y4 + 10;
    }
    if (flipV) {
      z1 = z4 + 5;
    } else {
      z1 = z4 - 5;
    }
    x2 = x1;
    y2 = y1 + 10;
    if (flipV) {
      z2 = z1 - 5;
    } else {
      z2 = z1 + 5;
    }
    x3 = x2 + 10;
    y3 = y2 + 10;
    z3 = z2;
    x4 = x3;
    y4 = y3 - 10;
    if (flipV) {
      z4 = z3 + 5;
    } else {
      z4 = z3 - 5;
    }
    if (flipV) {
      flipV = false;
    } else {
      flipV = true;
    }
  }
}
