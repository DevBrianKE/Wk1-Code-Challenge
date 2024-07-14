# Week 1 Coding Challenges

Welcome to my repository for Week 1 coding challenges! Each challenge is implemented in JavaScript and organized into separate files within the `Assignments` folder.

## Table of Contents

- [Challenges](#challenges)
  - [Challenge 1: Student Grade Generator](#challenge-1-student-grade-generator)
  - [Challenge 2: Speed Detector](#challenge-2-speed-detector)
  - [Challenge 3: Net Salary Calculator](#challenge-3-net-salary-calculator)
- [Technologies Used](#technologies-used)
- [How to Run](#how-to-run)
- [Contributing](#contributing)
- [Author](#author)

## Challenges

### Challenge 1: Student Grade Generator

The `studentGradeGenerator` function prompts the user to input student marks and assigns a grade based on predefined criteria:

- A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40

**File:** `studentGradeGenerator.js`

**Criteria:** The function prompts the user for input, validates the input, and correctly maps the input to the appropriate grade.

### Challenge 2: Speed Detector

The `speedDetector` function calculates demerit points based on the speed of a car compared to a speed limit of 70 km/h. It determines if the driver's license should be suspended based on accumulated demerit points.

**File:** `speedDetector.js`

**Criteria:** The function correctly takes speed input, evaluates it, and prints the appropriate message or demerit points.

### Challenge 3: Net Salary Calculator

The `calculateNetSalary` function computes an individual’s net salary based on inputs of basic salary and benefits. It calculates PAYE (Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary according to KRA guidelines.

**File:** `netSalaryCalculator.js`

This code is produced based on information from the website: 
[https://www.aren.co.ke/payroll/taxrates.htm](https://www.aren.co.ke/payroll/taxrates.htm)

**Criteria:** The program correctly calculates the net salary including tax, NHIF, and NSSF deductions.

## Technologies Used

- **JavaScript:** Used to write the solutions for the coding challenges.

## How to Run

Each challenge is self-contained in its respective JavaScript file. You can run each file individually using Node.js or directly in your browser's console.

## Contributing

Contributions are welcome! If you'd like to improve the solutions or add more challenges, feel free to fork the repository and submit a pull request.

## Author

Kipchumba Brian

## License

This project is licensed under the MIT License - see the LICENSE file for details.
