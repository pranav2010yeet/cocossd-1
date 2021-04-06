img=""
status=""
output=[]

function preload(){
img=loadImage("dog_cat.jpg")
}

function setup(){
  canvas=createCanvas(600,400)
  canvas.center() 
  
  //code for intializing coco ssd
  objectdetector=ml5.objectDetector("cocossd", modelnotloaded)
}

function modelnotloaded(){
  console.log("Yes the model has loaded I think or not")
  status=true
  document.getElementById("status").innerHTML="Status : Detecting Objects"
  objectdetector.detect(img,gotresults)
}

function gotresults(error,results ){
if (error) {
  console.log(error)

}
else {
  console.log(results)
  output=results 
}
  
}

function draw(){
    image(img,0,0,600,400)
    
    
   


if (status !="") {
  for (let i = 0; i < output.length; i++) {
    objectname=output[i].label
    objectaccuracy=floor(output[i].confidence*100)+"%"
    x=output[i].x
    y=output[i].y
    width=output[i].width 
    height=output[i].height 
    
    fill("red")
    textSize(15)
    text(objectname+" "+objectaccuracy,x,y)
    noFill()
stroke("red")
rect(x,y,width,height)
    

  }
}
}

