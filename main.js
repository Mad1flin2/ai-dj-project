song="";
function preload() {
song=loadSound("music.mp3");
}
scoreRightWrist=0;
scoreLeftWrist=0;
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
function setup() {
canvas=createCanvas(500,500);
canvas.center();
webcam=createCapture(VIDEO);
webcam.hide();
}
function draw() { 
webcam.center();
image(webcam, 0, 0, width, width * webcam.height / webcam.width);
}
function play() {
song.play();
song.setVolume(1);
song.rate(1);
}
function stop() {
song.stop();
}