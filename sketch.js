var man1,man2,man3
var X1
var backgroundImg
var heroImg
var enemies1,enemies2
var bulletsGroup
var enemyGroup1,enemyGroup2,enemyGroup3
function preload(){
    backgroundImg =loadImage("./images/background.jpg");
    heroImg = loadImage("./images/hero.jpg")
    enemies1 = loadImage("./images/enemy 1.jpg")
    enemies2 = loadImage("./images/enemy 2.jpg")
    bullet = loadImage("./images/Blast.jpg")

}

function setup(){
    createCanvas(1400,750)
    X1=createSprite(700,325,width,height)
    X1.scale = 1.5
    man1=createSprite(300,480,50,50)
    man1.addImage(heroImg)
    man1.scale = 0.3
    obstaclesGroup = new Group()
    bulletsGroup = new Group()
    enemyGroup1 = new Group()
    enemyGroup2 = new Group()
    enemyGroup3 = new Group()
 
    


}

function draw(){
    X1.addImage(backgroundImg)
    
   // man1.x=mouseX

    if(keyDown("right_arrow")){
        man1.x+=2
    }

    if(keyDown("left_arrow")){
        man1.x-=2
        }

      //  spawnEnemies()

    var select_enemy=Math.round(random(1,3))
    if (World.frameCount % 100 == 0) 
    { 
        if (select_enemy == 1) {
         enemy1();
     } else if (select_enemy == 2) {
          enemy2();
         } 
     else  { 
         enemy3();
         } 
    }


     if (bulletsGroup.isTouching(enemyGroup1)) 
        { enemyGroup1.destroyEach(); 
        bulletsGroup.destroyEach(); }
     if (bulletsGroup.isTouching(enemyGroup2)) 
     { enemyGroup2.destroyEach(); 
        bulletsGroup.destroyEach(); }
     if (bulletsGroup.isTouching(enemyGroup3)) 
     { enemyGroup3.destroyEach(); 
        bulletsGroup.destroyEach(); }

    
    

  /*  if(keyDown("space")){
        keyPressed()
    }*/
    /*if(obstaclesGroup.isTouching(bulletsGroup)){
        obstaclesGroup.destroyEach()
    }*/
    
    

    drawSprites()
}

  function keyPressed(){
      if(keyCode===UP_ARROW){
      blast = createSprite(100,100,20,20)
      blast.addImage(bullet)
      blast.scale=0.1
      blast.x = man1.x
      blast.y = man1.y
      blast.velocityY = -3
      bulletsGroup.add(blast)

      }
      
  }
  function enemy1() { 
      var red = createSprite(Math.round(random(20, 370)),0, 10, 10);
       red.addImage(enemies1); 
       red.velocityY = 1.5; 
       red.lifetime = 350;
        red.scale = 0.25; 
        enemyGroup1.add(red); }

  function enemy2() { 
     var red = createSprite(Math.round(random(20, 370)),0, 10, 10);
        red.addImage(enemies2); 
       red.velocityY = 1.5; 
       red.lifetime = 350;             
       red.scale = 0.25; 
        enemyGroup2.add(red); }
        
   function enemy3() { 
     var red = createSprite(Math.round(random(20, 370)),0, 10, 10);
               red.addImage(enemies2); 
              red.velocityY = 1.5; 
              red.lifetime = 350;             
              red.scale = 0.25; 
               enemyGroup3.add(red); }
   