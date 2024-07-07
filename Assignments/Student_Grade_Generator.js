function studentGradeGenerator() {
    let marks = prompt("Enter student marks (0-100): ");
    marks = parseInt(marks);
    
    if (marks > 100 || marks < 0) {
        console.log("Invalid marks. Please enter a number between 0 and 100.");
    } else if (marks > 79) {
        console.log("Grade: A");
    } else if (marks >= 60) {
        console.log("Grade: B");
    } else if (marks >= 49) {
        console.log("Grade: C");
    } else if (marks >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
}

studentGradeGenerator();
