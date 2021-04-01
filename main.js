img=""

function preload(){
img=loadImage("dog_cat.jpg")
}

function setup(){
  canvas=createCanvas(600,400)
  canvas.center()  
}

function draw(){
    image(img,0,0,600,400)
    fill("red")
    text("dog",120,50)
noFill()
stroke("red")
rect(120,50,175,300)
}

