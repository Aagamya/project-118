function preload(){
classifier=m15.imageClassifier("DoodleNet")

}

function setup(){
canvas= createCanvas(400,400)
canvas.center()
background("white")
canvas.mouseReleased(classifyCanvas)
synth=window.speechSynthesis
}

function draw(){

}

function clearCanvas(){
background("white")
}