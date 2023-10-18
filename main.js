
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/m4UjHONSI/mode.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
    function gotResults(error, results) {
        if (error) {
            console.error(errror);
        } else {
            console.log(results);
            random_number_r =  Math.floor(Math.random() * 255) + 1;
            random_number_g =  Math.floor(Math.random() * 255) + 1;
            random_number_b =  Math.floor(Math.random() * 255) + 1;
            document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
            document.getElementById("result_label").style.color = "rgb("+random_number_r+" ,"+random_number_g+" , "+random_number_b+")";
            document.getElementById("result_confidence").style.color =  "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
            img = document.getElementById('cat1');
            img1 = document.getElementById('dog2');
            img2 = document.getElementById('sheep3');
            
        }
            if (results[0].label == "Meowing") {
                img.src = 'cat-01.gif';
                img1.src = 'dog-02.png';
                img2.src = 'sheep-03.png';
                
            } else if (results[0].label == "Barking") {
                img.src = 'cat-01.png';
                img1.src = 'dog-02.gif';
                img2.src = 'sheep-03.png';
                
            } else if (results[0].label == "Baaing") {
                img.src = 'cat-01.png';
                img1.src = 'dog-02.png';
                img2.src = 'sheep-03.gif';
                
            }else{
                img.src = 'cat-01.png';
                img1.src = 'dog-02.png';
                img2.src = 'sheep-03.png';
               
                
            }
        
    }
}
