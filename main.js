var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;
    

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    var Content =document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    if (Content == "take my selfie")
    {
        console.log("taking selfie---");
        speak();
    }
    
}
function speak() 
{
    var  synth= window.speechSynthesis;

    speak_data="Taking you Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis)
     Webcam.attach(camera);
     setTimeout(function()
     {
         take_snapshout();
         save();
     },5000);
}
Webcam.set
({
    width:360,
    higt:250,
    image_format:'png',
    png_quality:90
})
camera = document.getElementById("camera");

function take_snapshout()
{
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="selfie_image"src='+data_url+'>';

    })
}
function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").scroll;
    link.href=image;
    link.click();
}