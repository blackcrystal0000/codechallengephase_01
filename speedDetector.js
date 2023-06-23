function detectSpeed() {
     let input = prompt('Enter speed');
     speed = parseInt(input);
     let points = 0;
     
    if (speed <= 70) {
        let speedLimit = "Okay"
        console.log(speedLimit);
        document.getElementById('speedOutput').innerHTML = `speedOutput:, ${speedLimit}`;
    }

    else if(speed > 70){
        points = Math.floor((speed - 70) / 5) * 1;
        console.log(`License suspended`);
        document.getElementById('speedOutput').innerHTML = `speedOutput:, ${points}`;
    }

    if (points >= 12){
        caution = "License is Suspended";
        console.log(caution);
        document.getElementById('speedOutput').innerHTML = `speedOutput:, ${points}`; 
        document.getElementById('caution').innerHTML = `Caution:, ${`Your{caution}`}`;
    }

  
}
