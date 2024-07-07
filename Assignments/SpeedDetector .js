function speedDetector() {
    let speed = prompt("Enter the speed of the car: ");
    speed = parseInt(speed);
    
    const speedLimit = 70;
    const kmPerDemerit = 5;
    
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}

speedDetector();
