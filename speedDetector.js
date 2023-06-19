function scanSpeed(speed) {
    const speedLimit = 70;
    const kmPerTwoPoints = 5;
    const excessPoints = 12;
     
    if (speed <= speedLimit + kmPerTwoPoints) {
        return "Okay";
    }

    else if (speed > speedLimit - excessPoints) {
        return "License Suspended";
    }
}

scanSpeed(speed)
console.log(scanSpeed(speed))