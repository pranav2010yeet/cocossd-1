img=""
status=""
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

function gotresults(error,results){
if (error) {
  console.log(error)

}
else {
  console.log(results)
}
  
}

function draw(){
    image(img,0,0,600,400)
    fill("red")
    textSize(15)
    text("dog",120,50)
noFill()
stroke("red")
rect(120,50,175,300)

text("cat" ,300,50)
stroke("red")
rect(300,50,600,300)
}

