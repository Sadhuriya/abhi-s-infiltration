var player
var map1,map2
var gaurd
var cupboard1 , cupboard2
var drawer1 ,drawer2 ,drawer3 ,drawer4 , drawer5 , drawer6
var sofa , table ,bed ,stand ,stair
var playerI
var map1I,map2I
var gaurdsI
var cupboardI 
var drawerI
var coinI
var coin1,coin2,coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10
var sofaI
var standI
var diningTableI
var bedI
var carpetI
var stairI
var wall1,wall2 , wall3 , wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20
var floorState = 0
var floor1
var floor2
var mnbI
var money = 0
var rand
var key,keyI
var rand2
var NO =0
var YES =1
var Play = 0
var OrerW = 1
var OverL = 1
var keyPoss = NO
var gameMode = Play

function  preload(){
     playerI = loadImage("theif.png")
     map1I = loadImage("HousePlan-floor1.png")
     map2I = loadImage("HousePlan-floor2.png")
     sofaI = loadImage("sofa.png")
     diningTableI = loadImage("table.png")
     cupboardI = loadImage("cabinet.png")
     bedI = loadImage("bed.png")
     standI = loadImage("nightStand.png")
     stairI=loadImage("stairs.png")
     coinI = loadImage("coin.png")
     mnbI = loadImage("mnb.png")
     keyI = loadImage("key.png")
}

function setup(){
    var canvas = createCanvas(1300,700);


   floor1 = new Group()
   floor2 = new Group()

    edges = createEdgeSprites()

     stair = createSprite(1200,570,50,50)
     stair.addImage(stairI)
     stair.scale=0.6
    
     stair.setCollider("rectangle",100,0,20,350)

    player = createSprite(150,150)
    player.addImage(playerI)
    player.scale = 0.3

stair.debug = true
player.debug = true

wall1 = createSprite(90,180,230,20)
    wall2 = createSprite(300,70,20,230)
    wall3 = createSprite(470,180,350,20)
    wall4 = createSprite(735,70,20,230)
    wall5 = createSprite(945,175,280,20)
    wall6 = createSprite( 1065,295,30,240)
    wall7 = createSprite(1065,430,480,30)
    wall8 = createSprite(835,520,20,150)
    wall9 = createSprite(100,485,350,20)
    wall10 = createSprite(255,640,20,150)   

    wall1.shapeColor = "brown"
    wall2.shapeColor = "brown"
    wall3.shapeColor = "brown"
    wall4.shapeColor = "brown"
    wall5.shapeColor = "brown"
    wall6.shapeColor = "brown"
    wall7.shapeColor = "brown"
    wall8.shapeColor = "brown"
    wall9.shapeColor = "brown"
    wall10.shapeColor = "brown"
    
    
    rand = Math.round(random(1,2))
     console.log(rand)
     rand2 = Math.round(random(1,6))


    sofa = createSprite(460,320,100,100)
    sofa.addImage(sofaI)
    sofa.scale = 0.3

    table = createSprite(530,530,100,100)
    table.addImage(diningTableI)
    table.scale = 0.3

     drawer1 = createSprite(370,30,50,50)
     drawer1.addImage(cupboardI)
     drawer1.scale=0.3

     drawer2 = createSprite(480,30,50,50)
     drawer2.addImage(cupboardI)
     drawer2.scale=0.3

     drawer3 = createSprite(820,30,50,50)
     drawer3.addImage(cupboardI)
     drawer3.scale=0.3

     drawer4 = createSprite(930,30,50,50)
     drawer4.addImage(cupboardI)
     drawer4.scale=0.3

     drawer5 = createSprite(1040,30,50,50)
     drawer5.addImage(cupboardI)
     drawer5.scale=0.3

     drawer6 = createSprite(50,30,50,50)
     drawer6.addImage(cupboardI)
     drawer6.scale=0.3

     stand = createSprite(1110,390,50,50)
     stand.addImage(standI)
     stand.scale=0.2

     bed = createSprite(1200,300,50,50)
     bed.addImage(bedI)
     bed.scale=0.4

     floor1.add(wall1)
     floor1.add(wall2)
     floor1.add(wall3)
     floor1.add(wall4)
     floor1.add(wall5)
     floor1.add(wall6)
     floor1.add(wall7)
     floor1.add(wall8)
     floor1.add(wall9)
     floor1.add(wall10)

     floor1.add(sofa)


     floor1.add(drawer1)
     floor1.add(drawer2)
     floor1.add(drawer3)
     floor1.add(drawer4)
     floor1.add(drawer5)
     floor1.add(drawer6)

     floor1.add(stand)
     floor1.add(bed)
     floor1.add(table)





     //wall11 = createSprite(90,180,230,20)
 wall12 = createSprite(300,70,20,230)
 wall13 = createSprite(470,180,350,20)
 wall14 = createSprite(735,70,20,230)
 wall15 = createSprite(945,175,280,20)
 wall16 = createSprite( 1065,295,30,240)
 wall17 = createSprite(1065,430,480,30)
 wall18 = createSprite(835,520,20,150)
//wall19 = createSprite(100,485,350,20)
wall20 = createSprite(300,540,20,500)   

//wall11.shapeColor = "brown"
wall12.shapeColor = "brown"
wall13.shapeColor = "brown"
wall14.shapeColor = "brown"
wall15.shapeColor = "brown"
wall16.shapeColor = "brown"
wall17.shapeColor = "brown"
wall18.shapeColor = "brown"
//wall19.shapeColor = "brown"
wall20.shapeColor = "brown"



bed2 = createSprite(160,580,100,100)
bed2.addImage(bedI)
bed2.scale = 0.4

stand2 = createSprite(70,680,50,50)
stand2.addImage(standI)
stand2.scale=0.2

 drawer7 = createSprite(370,30,50,50)
 drawer7.addImage(cupboardI)
 drawer7.scale=0.3

 drawer8 = createSprite(480,30,50,50)
 drawer8.addImage(cupboardI)
 drawer8.scale=0.3

 drawer9 = createSprite(820,30,50,50)
 drawer9.addImage(cupboardI)
 drawer9.scale=0.3

 drawer10 = createSprite(930,30,50,50)
 drawer10.addImage(cupboardI)
 drawer10.scale=0.3

 drawer11 = createSprite(1040,30,50,50)
 drawer11.addImage(cupboardI)
 drawer11.scale=0.3

 drawer12 = createSprite(50,30,50,50)
 drawer12.addImage(cupboardI)
 drawer12.scale=0.3

 stand1 = createSprite(1110,390,50,50)
 stand1.addImage(standI)
 stand1.scale=0.2

 bed1 = createSprite(1200,300,50,50)
 bed1.addImage(bedI)
 bed1.scale=0.4


 //floor2.add(wall1)
 floor2.add(wall12)
 floor2.add(wall13)
 floor2.add(wall14)
 floor2.add(wall15)
 floor2.add(wall16)
 floor2.add(wall17)
 floor2.add(wall18)
 //floor2.add(wall9)
 floor2.add(wall20)

 floor2.add(bed1)


 floor2.add(drawer7)
 floor2.add(drawer8)
 floor2.add(drawer9)
 floor2.add(drawer10)
 floor2.add(drawer11)
 floor2.add(drawer12)

 floor2.add(stand2)
 floor2.add(bed2)
 floor2.add(stand1)

 floor1.setVisibleEach(false)
 floor2.setVisibleEach(false)
 
coin1 = createSprite(530,530)
coin1.addImage(coinI)
coin1.scale=0.02
coin1.visible = false

coin2 = createSprite(460,320)
coin2.addImage(coinI)
coin2.scale=0.02
coin2.visible = false

coin3 = createSprite(370,30)
coin3.addImage(coinI)
coin3.scale=0.02
coin3.visible = false

coin4 = createSprite(480,30)
coin4.addImage(coinI)
coin4.scale=0.02
coin4.visible = false

coin5 = createSprite(820,30)
coin5.addImage(coinI)
coin5.scale=0.02
coin5.visible = false

coin6 = createSprite(930,30)
coin6.addImage(coinI)
coin6.scale=0.02
coin6.visible = false

coin7 = createSprite(1040,30)
coin7.addImage(coinI)
coin7.scale=0.02
coin7.visible = false

coin8 = createSprite(1110,390)
coin8.addImage(coinI)
coin8.scale=0.02
coin8.visible = false

coin9 = createSprite(1200,300)
coin9.addImage(coinI)
coin9.scale=0.02
coin9.visible = false

coin10 = createSprite(50,30)
coin10.addImage(coinI)
coin10.scale=0.02
coin10.visible = false

coin11 = createSprite(160,580)
coin11.addImage(coinI)
coin11.scale=0.02
coin11.visible = false

coin12 = createSprite(70,680)
coin12.addImage(coinI)
coin12.scale=0.02
coin12.visible = false

coin13 = createSprite(370,30)
coin13.addImage(coinI)
coin13.scale=0.02
coin13.visible = false

coin14 = createSprite(480,30)
coin14.addImage(coinI)
coin14.scale=0.02
coin14.visible = false

coin15 = createSprite(820,30)
coin15.addImage(coinI)
coin15.scale=0.02
coin15.visible = false

coin16 = createSprite(930,30)
coin16.addImage(coinI)
coin16.scale=0.02
coin16.visible = false

coin17 = createSprite(1040,30)
coin17.addImage(coinI)
coin17.scale=0.02
coin17.visible = false

coin18 = createSprite(1110,390)
coin18.addImage(coinI)
coin18.scale=0.02
coin18.visible = false

coin19 = createSprite(1200,300)
coin19.addImage(coinI)
coin19.scale=0.02
coin19.visible = false

coin20 = createSprite(50,30)
coin20.addImage(coinI)
coin20.scale=0.02
coin20.visible = false


keys = createSprite(-100,30)
keys.addImage(keyI)
keys.scale=0.1
keys.visible=false


}







function draw(){
    
    
    //movement
    if(keyDown("w")){
     player.y = player.y-10
    }
    if(keyDown("d")){
        player.x = player.x+10
    }
    if(keyDown("s")){
        player.y = player.y+10
       }
       if(keyDown("a")){
           player.x = player.x-10
       }
       if(player.isTouching(stair) && floorState===0){
        floorState = 1
        player.x = 1100
        player.y = 600
        console.log("ayyy!")
   }
   if(player.isTouching(stair) && floorState===1){
    floorState =0
    player.x = 1100
        player.y = 600

}
if(floorState === 0){
    FirstFloor()
}
if(floorState === 1){
    SecondFloor()
}



    drawSprites()

    textSize(50)
    fill("gold")
    imageMode(CENTER)
    image(coinI,1150,65,50,50)
    text(money,1180,80)
    
}





function FirstFloor(){

    background(map1I);
floor1.setVisibleEach(true)
floor2.setVisibleEach(false)
    player.collide(wall1)
    player.collide(wall2)
    player.collide(wall3)
    player.collide(wall4)
    player.collide(wall5)
    player.collide(wall6)
    player.collide(wall7)
    player.collide(wall8)
    player.collide(wall9)
    player.collide(wall10)
    player.collide(edges)

switch(rand){
case 1:if(player.isTouching(coin1) && keyDown("e")){
    console.log("case1")
    coin1.visible = true
    coin1.velocityX = 10
    coin1.velocityY = -7
   
    
     
 }
 break
 case 2:if(player.isTouching(coin2) && keyDown("e")){
    console.log("case2")
    coin2.visible = true
    coin2.velocityX = 10
    coin2.velocityY = -3
   
    
     
 }
 
 break
 default : break;

}

if(coin1.x === 1300 ){
    coin1.destroy()
    //money = money+10
     
}
if(coin1.x === 1290 ){
    
    money = money+10
   
}

if(coin2.x === 1300 ){
    coin2.destroy()
    //money = money+10
     
}
if(coin2.x === 1290 ){
    
    money = money+10
   
}

switch(rand){
    case 1:if(player.isTouching(coin3) && keyDown("e")){
        console.log("case1")
        coin3.visible = true
        coin3.velocityX = 10
        coin3.velocityY = -7
       
      
         
     }
     break
     case 2:if(player.isTouching(coin4) && keyDown("e")){
        console.log("case2")
        coin4.visible = true
        coin4.velocityX = 10
        coin4.velocityY = -3
       
        
         
     }
     
     break
     default : break;
    
    }
    
    if(coin3.x === 1300 ){
        coin3.destroy()
        //money = money+10
        
    }
    if(coin3.x === 1290 ){
        
        money = money+10
       
    }
    
    if(coin4.x === 1300 ){
        coin4.destroy()
        //money = money+10
         
    }
    if(coin4.x === 1290 ){
        
        money = money+10
       
    }

    switch(rand){
        case 1:if(player.isTouching(coin5) && keyDown("e")){
            console.log("case1")
            coin5.visible = true
            coin5.velocityX = 10
            coin5.velocityY = -7
           
          
             
         }
         break
         case 2:if(player.isTouching(coin6) && keyDown("e")){
            console.log("case2")
            coin6.visible = true
            coin6.velocityX = 10
            coin6.velocityY = -3
           
            
             
         }
         
         break
         default : break;
        
        }
        
        if(coin5.x === 1300 ){
            coin5.destroy()
            //money = money+10
             
        }
        if(coin5.x === 1290 ){
            
            money = money+10
           
        }
        
        if(coin6.x === 1300 ){
            coin6.destroy()
            //money = money+10
             
        }
        if(coin6.x === 1290 ){
            
            money = money+10
           
        }



        switch(rand){
            case 1:if(player.isTouching(coin7) && keyDown("e")){
                console.log("case1")
                coin7.visible = true
                coin7.velocityX = 10
                coin7.velocityY = -7
               
              
                 
             }
             break
             case 2:if(player.isTouching(coin4) && keyDown("e")){
                console.log("case2")
                coin8.visible = true
                coin8.velocityX = 10
                coin8.velocityY = -3
               
                
                 
             }
             
             break
             default : break;
            
            }
            
            if(coin7.x === 1300 ){
                coin7.destroy()
                //money = money+10
                 
            }
            if(coin7.x === 1290 ){
                
                money = money+10
               
            }
            
            if(coin8.x === 1300 ){
                coin8.destroy()
                //money = money+10
                 
            }
            if(coin8.x === 1290 ){
                
                money = money+10
               
            }

 



            switch(rand){
                case 1:if(player.isTouching(coin9) && keyDown("e")){
                    console.log("case1")
                    coin9.visible = true
                    coin9.velocityX = 10
                    coin9.velocityY = -7
                   
                  
                     
                 }
                 break
                 case 2:if(player.isTouching(coin10) && keyDown("e")){
                    console.log("case2")
                    coin10.visible = true
                    coin10.velocityX = 10
                    coin10.velocityY = -3
                   
                    
                     
                 }
                 
                 break
                 default : break;
                
                }
                
                if(coin9.x === 1300 ){
                    coin9.destroy()
                    //money = money+10
                     
                }
                if(coin9.x === 1290 ){
                    
                    money = money+10
                   
                }
                
                if(coin10.x === 1300 ){
                    coin10.destroy()
                    //money = money+10
                     
                }
                if(coin10.x === 1290 ){
                    
                    money = money+10
                   
                }

 
 
    
}

function SecondFloor(){
    textSize(7)
text(money,1200,100)
background(map2I)
floor2.setVisibleEach(true)
floor1.setVisibleEach(false)
//player.collide(wall11)
player.collide(wall12)
player.collide(wall13)
player.collide(wall14)
player.collide(wall15)
player.collide(wall16)
player.collide(wall17)
player.collide(wall18)
//player.collide(wall19)
player.collide(wall20)
player.collide(edges)


switch(rand){
    case 1:if(player.isTouching(coin11) && keyDown("e")){
        console.log("case1")
        coin11.visible = true
        coin11.velocityX = 10
        coin11.velocityY = -7
       
        
         
     }
     break
     case 2:if(player.isTouching(coin12) && keyDown("e")){
        console.log("case2")
        coin12.visible = true
        coin12.velocityX = 10
        coin12.velocityY = -3
       
        
         
     }
     
     break
     default : break;
    
    }
    
    if(coin11.x === 1300 ){
        coin11.destroy()
        //money = money+10
         
    }
    if(coin11.x === 1290 ){
        
        money = money+10
       
    }
    
    if(coin12.x === 1300 ){
        coin12.destroy()
        //money = money+10
         
    }
    if(coin12.x === 1290 ){
        
        money = money+10
       
    }
    
    switch(rand){
        case 1:if(player.isTouching(coin13) && keyDown("e")){
            console.log("case1")
            coin13.visible = true
            coin13.velocityX = 10
            coin13.velocityY = -7
           
          
             
         }
         break
         case 2:if(player.isTouching(coin14) && keyDown("e")){
            console.log("case2")
            coin14.visible = true
            coin14.velocityX = 10
            coin14.velocityY = -3
           
            
             
         }
         
         break
         default : break;
        
        }
        
        if(coin13.x === 1300 ){
            coin13.destroy()
            //money = money+10
             
        }
        if(coin13.x === 1290 ){
            
            money = money+10
           
        }
        
        if(coin14.x === 1300 ){
            coin14.destroy()
            //money = money+10
             
        }
        if(coin14.x === 1290 ){
            
            money = money+10
           
        }
    
        switch(rand){
            case 1:if(player.isTouching(coin15) && keyDown("e")){
                console.log("case1")
                coin15.visible = true
                coin15.velocityX = 10
                coin15.velocityY = -7
               
              
                 
             }
             break
             case 2:if(player.isTouching(coin16) && keyDown("e")){
                console.log("case2")
                coin16.visible = true
                coin16.velocityX = 10
                coin16.velocityY = -3
               
                
                 
             }
             
             break
             default : break;
            
            }
            
            if(coin15.x === 1300 ){
                coin15.destroy()
                //money = money+10
                 
            }
            if(coin15.x === 1290 ){
                
                money = money+10
               
            }
            
            if(coin16.x === 1300 ){
                coin16.destroy()
                //money = money+10
                 
            }
            if(coin16.x === 1290 ){
                
                money = money+10
               
            }
    
    
    
            switch(rand){
                case 1:if(player.isTouching(coin17) && keyDown("e")){
                    console.log("case1")
                    coin17.visible = true
                    coin17.velocityX = 10
                    coin17.velocityY = -7
                   
                  
                     
                 }
                 break
                 case 2:if(player.isTouching(coin18) && keyDown("e")){
                    console.log("case2")
                    coin18.visible = true
                    coin18.velocityX = 10
                    coin18.velocityY = -3
                   
                    
                     
                 }
                 
                 break
                 default : break;
                
                }
                
                if(coin17.x === 1300 ){
                    coin17.destroy()
                    //money = money+10
                     
                }
                if(coin17.x === 1290 ){
                    
                    money = money+10
                   
                }
                
                if(coin18.x === 1300 ){
                    coin18.destroy()
                    //money = money+10
                     
                }
                if(coin18.x === 1290 ){
                    
                    money = money+10
                   
                }
    
     
    
    
    
                switch(rand){
                    case 1:if(player.isTouching(coin19) && keyDown("e")){
                        console.log("case1")
                        coin19.visible = true
                        coin19.velocityX = 10
                        coin19.velocityY = -7
                       
                      
                         
                     }
                     break
                     case 2:if(player.isTouching(coin20) && keyDown("e")){
                        console.log("case2")
                        coin20.visible = true
                        coin20.velocityX = 10
                        coin20.velocityY = -3
                       
                        
                         
                     }
                     
                     break
                     default : break;
                    
                    }
                    
                    if(coin19.x === 1300 ){
                        coin19.destroy()
                        //money = money+10
                         
                    }
                    if(coin19.x === 1290 ){
                        
                        money = money+10
                       
                    }
                    
                    if(coin20.x === 1300 ){
                        coin20.destroy()
                        //money = money+10
                         
                    }
                    if(coin20.x === 1290 ){
                        
                        money = money+10
                       
                    }


if(player.isTouching(keys) && keyDown("e")){
    keys.visible=true
    keys.x = 50
    keys.y=50
    //key= YES       

}
 keyLoca()
 
}


function keyLoca(){
    switch(rand2){
        case 1: keys.x=50
                
            break;
        case 2:keys.x=370
               
            break ;
        case 3:keys.x=480
               
                break;
        case 4:keys.x=820
                
                break ;
        case 5:keys.x=940
               
            break;
        case 6:keys.x=1040
       
            break ;  
        default:break;  
            
    }
    console.log(rand2)
}