function studentGradeGenerator() {
    // Kindly enter student marks
    let marks = prompt("Enter student marks (0-100): ");
    
    // Convert the entered value to an integer
    marks = parseInt(marks);
    
    // Check if the entered marks are valid
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a valid number between 0 and 100.");
        return; // Exit function early if input is invalid
    }
    
    // Determine grade based on the entered marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    
    // Output the grade
    console.log(`Grade: ${grade}`);
}

// Execute the grade generation
studentGradeGenerator();
