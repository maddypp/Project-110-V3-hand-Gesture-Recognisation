Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
});

camera = documentgetElementById("webcam");
Webcam.attach("#webcam");

function capture() {
    Webcam.snap(function(data_uri) {
        document.getElementById("webcam").innerHTML = '<img id="captured_img" src = "'+data_uri+'">';
    });
}

console.log('ml5version', ml5.version);
classifier = ml5.classifier('https://teachablemachine.withgoogle.com/models/5nDnGwHek/model.json', modelloaded);

function check() {
    
}