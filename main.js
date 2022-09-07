var canvas = new fabric.Canvas('canvas1');
var x = document.getElementById("myAudio");

function newImage() {
    fabric.Image.fromURL("BdayImage.jpg", function(Img) {
        blockImageObject = Img;

        blockImageObject.scaleToWidth(700);
        blockImageObject.scaleToHeight(510);
        blockImageObject.set({
            top: 0,
            left: 0
        });

        canvas.add(blockImageObject);
    });
}



function playSound() {
    x.play();
}
