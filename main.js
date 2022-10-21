prediction_1 = "";
prediction_2 = "";

Webcam.set({

    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture_image()
{
     Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image_capture" src="'+data_uri+'"/>';
     });
}
console.log("ML5 Version is",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BPWBKoUmf/model.json',modelLoaded);

function modelLoaded()
{
    console.log("ModelLoaded!");
}

function speak()
{
    synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "and the second perdiction is" + prediction_2;
    Utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(Utterthis);
}

function check()
{
    img = document.getElementById("image_capture");
    classifier.classify(img,gotResult);
}

function gotResult(error,success)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(success);
        document.getElementById("result_emotion_name").innerHTML=success[0].label;
        document.getElementById("result_emotion_name2").innerHTML=success[1].label;
        prediction_1 = success[0].label;
        prediction_2 = success[1].label;

        console.log(prediction_1);
        console.log(prediction_2);

        speak(); 
    }

    if(success[0].label == "Ok Hand")
     { 
        document.getElementById("update_emoji").innerHTML= "&#128076;";
     }
    if(success[0].label == "Thumbs Up")
    {
        document.getElementById("update_emoji").innerHTML = "&#128077;";
    }
    if(success[0].label == "Victory Hand")
    {
        document.getElementById("update_emoji").innerHTML = "&#9996;";
    }
    if(success[0].label == "Sign Of The Horns")
    {
        document.getElementById("update_emoji").innerHTML = "&#129304;";
    }
    if(success[0].label == "Vulcan Salute")
    {
        document.getElementById("update_emoji").innerHTML = "&#128406;";
    }


    if(success[1].label == "Ok Hand")
     { 
        document.getElementById("update_emoji2").innerHTML= "&#128076;";
     }
    if(success[1].label == "Thumbs Up")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128077;";
    }
    if(success[1].label == "Victory Hand")
    {
        document.getElementById("update_emoji2").innerHTML = "&#9996;";
    }
    if(success[1].label == "Sign Of The Horns")
    {
        document.getElementById("update_emoji2").innerHTML = "&#129304;";
    }
    if(success[1].label == "Vulcan Salute")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128406;";
    }
}

    