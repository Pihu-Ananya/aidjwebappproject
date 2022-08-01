song=""
leftwristX=""
leftwristY=""
rigthwristX=""
rightwristY=""

function preload() {
song=loadSound("")
}

function setup() {
    canvas.set()
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video , modelloaded)
    poseNet.on("pose", getposes)
    }

    function getposes(results) {
        if(results.length>0) {
            console.log(results)
            leftwristX=results[0].pose.leftWrist.x
            leftwristY=results[0].pose.leftWrist.y 
            rightwristX=results[0].pose.rightWrist.x
            rightwristY=results[0].pose.rightWrist.y
            console.log(leftwristX , leftwristY , rightwristX , rightwristY)
            leftwrist_score=results[0].pose.keypoints[9].score
            console.log(leftwrist_score)
            rightwrist_score=results[0].pose.keypoints[10].score
            console.log(rightwrist_score)
    
        }
    }
    
    function modelloaded() {
        console.log("model is loaded")
    } 


function draw() {
    image(video , 0 , 0 , 600 , 500);

}
