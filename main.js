function soundClass(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("",modelready);
    
}

function modelready(){
    classifier.classify(gotresult);
}