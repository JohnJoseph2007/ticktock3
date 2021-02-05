var rmap, gmap, bmap;
var isx, isy, isz;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mouseDragged();
  drawSprites();
}

function mouseDragged() {
  isx = mouseX;
  isy = mouseY;
  isz = (isx + isy)/2;
  rmap = map(isx, 0, 400, 0, 255);
  gmap = map(isy, 0, 400, 0, 255);
  bmap = map(isz, 0, 400, 0, 255);
  fill(rmap, gmap, bmap);
  noStroke();
  ellipseMode(RADIUS)
  ellipse(200, 200, 100, 100);
}