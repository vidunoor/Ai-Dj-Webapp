song = "";
leftWristX = 0;
leftWristY = 0;
rightWristY = 0;
rightWristX = 0;

function preload(){
song = loadSound("music.mp3");
}


function setup(){

canvas = createCanvas(500,500);
canvas.center();


video = createCapture(VIDEO);
video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
    
    
}

function draw(){
image(video,0,0,500,500);

}

function Press()
{
song.play();
song.setVolume(1);
song.setRate(1);


}

function modelLoaded(){
console.log("posenet is loaded__--")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

    }
}

