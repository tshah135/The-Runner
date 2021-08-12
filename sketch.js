var left_boun, right_boun;
var trackImg, runnerAnim;

function preload() {
  //pre-load images
  trackImg = loadImage("path.png")
  runnerAnim = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup() {
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200, 200);
  track.addImage(trackImg);
  track.velocityY = 5
  track.scale = 1.2
  

  runner = createSprite(200, 300, 20, 300);
  runner.addAnimation("runner", runnerAnim);
  runner.scale = 0.05


  left_boun = createSprite(37, 30, 40, 800);
  left_boun.visible = false
  
  right_boun = createSprite(370, 50, 40, 800);
  right_boun.visible = false


}

function draw() {
  background(0);
  if (track.y > 400) {
    track.y = height/2;
  }
  runner.x = mouseX

  runner.collide(left_boun)
  runner.collide(right_boun)

  drawSprites()
}
