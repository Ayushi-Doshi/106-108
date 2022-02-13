
function sc()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cuEJXcAHV/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        rnr = Math.floor(Math.random() * 255) + 1;
        rng = Math.floor(Math.random() * 255) + 1;
        rnb = Math.floor(Math.random() * 255) + 1;

        document.getElementById("rl").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("rc").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" % ";
        document.getElementById("rl").style.color = "rgb("+rnr+","+rng+","+rnb+")";
        document.getElementById("rc").style.color = "rgb("+rnr+","+rng+","+rnb+")";

        img1 = document.getElementById('a1');
        img2 = document.getElementById('a2');
        img3 = document.getElementById('a3');
        img4 = document.getElementById('a4');

        if(results[0].label == "clapping"){
            img1.src = 'aliens-01.gif';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';

        }
        else if(results[0].label == "whistle"){
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.gif';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';

        }
        else if(results[0].label == "drum"){
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.gif';
            img4.src = 'aliens-04.png';

        }
        else {
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.gif';

        }



    }
}