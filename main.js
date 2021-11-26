function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LfM5JhR3Z/model.json', modelReady); 
    }
    
    function modelReady(){
    classifier.classify(gotresults);
    
    }
    
    function gotresults(error,results){
        if(error){
        console.error(error);
        }
        else{
            console.log(results);
            r=Math.floor(Math.random()*255)+1;
            g=Math.floor(Math.random()*255)+1;
            b=Math.floor(Math.random()*255)+1;
            document.getElementById("Result_Label").innerHTML='I can hear '+results[0].label;
            document.getElementById("Result_Confidence").innerHTML='Accuracy '+(results[0].confidence*100).toFixed(2)+"%";
            document.getElementById("Result_Label").style.color="rgb("+r+","+g+","+b+")";
            document.getElementById("Result_Confidence").style.color="rgb("+r+","+g+","+b+")";
        
            
            img=document.getElementById("ear");
       
        
        
        if(results[0].label=="Cat"){
          img.src='cat2.png';
          
        
        }
        else if(results[0].label=="Dog"){
            img.src='dog2.png';
            
          
          }
          else if(results[0].label=="Lion"){
            img.src='lion.png';
           
          
          }
          else if(results[0].label=="Cow"){
            img.src='cow2.png';
            
          
          }
        
          else {
            img.src='Ear.png';
            
           
          
          }
        }
        }
        