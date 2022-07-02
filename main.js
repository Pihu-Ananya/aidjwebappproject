song=""

function preload() {
song=loadSound("")
}

function setup() {
    canvas.set()
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()

}
function draw() {
    image(video , 0 , 0 , 600 , 500);

}
