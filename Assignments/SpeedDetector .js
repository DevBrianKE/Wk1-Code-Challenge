function speedDetector() {
    // Prompt the user to enter the speed of the car
    let speed = prompt("Enter the speed of the car: ");
    
    // Convert the entered value to an integer
    speed = parseInt(speed);
    
    // Constants for speed limit and km per demerit point
    const speedLimit = 70;
    const kmPerDemerit = 5;
    
    // Check if the entered value is a valid number
    if (isNaN(speed)) {
        console.log("Invalid input. Please enter a valid number.");
        return; // Exit the function early if input is invalid
    }
    
    // Check if the speed is below the speed limit
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Calculate demerit points
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
        
        // Check if demerit points exceed 12
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}

//Call the function to execute the speed detection
speedDetector();
