function Calculate(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let val = parseFloat(weight) /(parseFloat(height)/100)**2;

  
        if(val < 18.5){
            document.getElementById("bmi-status").innerHTML = "Underweight";
        }
        else if(val < 25){
            document.getElementById("bmi-status").innerHTML = "Healthy";
        }
        else if(val < 30){
            document.getElementById("bmi-status").innerHTML = "Overweight";
        }
        else{
            document.getElementById("bmi-status").innerHTML = "Obesity";
        }
    
}