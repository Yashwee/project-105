camera= document.getElementById("camera");

 Webcam.set({
 width:350,
 height:350,
 image_format:'png',
 png_quality:90
 });

Webcam.attach(' #camera');

function capture()
{
    Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML="<img id='capture_img' src="+data_uri+">/";
  });
}

console.log("ml5 version", ml5.version);

classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_g6YIURxR/model.json', modelLoaded);
    
function modelLoaded()
{
    console.log('modelLoaded');
}

function identify()
{
  img= document.getElementById("capture_img");
  classifier.classify(img, gotResult);
}

function gotResult(error, results)
  {
if(error){
  console.error(error);
}
else
{
  console.log(results);
  document.getElementById("result_person_name").innerHTML=results[0].label;
  document.getElementById("result_person_accracy").innerHTML=results[0].confidence.toFixed(2);
}
  }
