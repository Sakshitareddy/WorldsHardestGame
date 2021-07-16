var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var lives = 3;
var car1 = createSprite(125,150,15,15);
car1.shapeColor = "red";
var car2 = createSprite(175,230,15,15);
car2.shapeColor = "green";
var car3 = createSprite(225,150,15,15);
car3.shapeColor = "orange";
var car4 = createSprite(275,230,15,15);
car4.shapeColor = "purple";
var boundary1 = createSprite(200,120,400,5);
var boundary2 = createSprite(200,260,400,5);
var sam = createSprite(25,190,10,10);
sam.shapeColor = "blue";
   //makes cars move around
  car1.velocityY = 8;
  car2.velocityY = -8;
  car3.velocityY = 8;
  car4.velocityY = -8;

function draw() {
  background("peachPuff");
  textSize(20);
  fill("black");
  text("Lives: "+lives, 170, 100);
  
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("pink");
  rect(345,120,52,140);
    //makes cars bounce off boundary
  car1.bounceOff(boundary1);
  car2.bounceOff(boundary1);
  car3.bounceOff(boundary1);
  car4.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary2);
    //makes Sam able to move
    if (keyDown("right")){
      sam.x = sam.x + 3;
    }
    if (keyDown("left")){
      sam.x = sam.x - 3;
    }
    
    if (sam.isTouching(car1) || sam.isTouching(car2) || sam.isTouching(car3) || sam.isTouching(car4)){
      sam.x = 25;
      sam.y= 190;
      lives = lives - 1;
    }
    if(lives == 0){
      background("white");
      textSize(30);
      fill("green");
      text("YOU LOSE GAME OVER",25,200);
      car1.velocityY = 0;
      car2.velocityY = 0;
      car3.velocityY = 0;
      car4.velocityY = 0;
      car1.destroy();
      car2.destroy();
      car3.destroy();
      car4.destroy();
      sam.destroy();
      
    }
        if(sam.x > 345){
      background("white");
      textSize(40);
      fill("orange");
      text("YOU WIN GAME OVER",25,200);
       car1.velocityY = 0;
      car2.velocityY = 0;
      car3.velocityY = 0;
      car4.velocityY = 0;
      car1.destroy();
      car2.destroy();
      car3.destroy();
      car4.destroy();
      sam.destroy();
    }
  
 drawSprites();
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
