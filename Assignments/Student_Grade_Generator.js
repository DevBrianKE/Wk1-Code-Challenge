function studentGradeGenerator() {
    // Prompt the user to enter student marks
    let marks = prompt("Enter student marks (0-100): ");
    
    // Convert the entered value to an integer
    marks = parseInt(marks);
    
    // Check if the entered marks are valid
    if (marks > 100 || marks < 0) {
        console.log("Invalid marks. Please enter a number between 0 and 100.");
    } else if (marks > 79) {
        // Grade A for marks greater than 79
        console.log("Grade: A");
    } else if (marks >= 60) {
        // Grade B for marks between 60 and 79
        console.log("Grade: B");
    } else if (marks >= 49) {
        // Grade C for marks between 49 and 59
        console.log("Grade: C");
    } else if (marks >= 40) {
        // Grade D for marks between 40 and 48
        console.log("Grade: D");
    } else {
        // Grade E for marks below 40
        console.log("Grade: E");
    }
}

// Call the function to execute the grade generation
studentGradeGenerator();
