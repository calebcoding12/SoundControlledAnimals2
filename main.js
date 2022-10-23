function startclassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/kyPIF1Goh/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotresults);
}
function gotresults(error, results){
    console.log("got results");
}