song="";
function preload() {
song=loadSound("music.mp3");
}
function draw() { 
}
function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function stop() {
    song.stop();
}