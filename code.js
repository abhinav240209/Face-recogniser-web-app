Webcam.set({
    width:380,
    height:300,
    image_format: 'png',
    png_quality:90
}
);
 camera=document.getElementById("webcam_display");

 Webcam.attach(camera);

  function capture() {
        Webcam.snap(function(data_uri){
        document.getElementById("captured_image").innerHTML="<img id='image1' src='" + data_uri + "'>";
  });
}

console.log("ml5 version", ml5.version);
ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AJeVkTPTu/', modelLoaded);

function modelLoaded() {
       console.log("model loaded");
}


