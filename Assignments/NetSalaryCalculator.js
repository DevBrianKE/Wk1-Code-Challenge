// Function to calculate net salary based on input values
function calculateNetSalary() {
    //Key in basic Salary and benefits
    let basicSalaryInput = prompt("Enter your basic salary (Ksh):");
    let benefitsInput = prompt("Enter your benefits (Ksh):");

    // Validate input for basic salary
    let basicSalary = parseFloat(basicSalaryInput);
    if (isNaN(basicSalary) || basicSalary <= 0) {
        console.log("Invalid input for basic salary. Please enter a valid number.");
        return;
    }

    // Validate input for benefits
    let benefits = parseFloat(benefitsInput);
    if (isNaN(benefits) || benefits < 0) {
        console.log("Invalid input for benefits. Please enter a valid number.");
        return;
    }

    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE (Pay As You Earn) based on income brackets
    let paye = calculatePAYE(grossSalary);

    // Calculate NHIF deductions based on gross pay
    let nhif = calculateNHIF(grossSalary);

    // Calculate NSSF deductions based on basic salary
    let nssf = calculateNSSF(basicSalary);

    // Calculate net salary
    let netSalary = grossSalary - paye - nhif - nssf;

    // Display results
    console.log("Gross Salary: Ksh " + grossSalary.toFixed(2));
    console.log("PAYE (Tax): Ksh " + paye.toFixed(2));
    console.log("NHIF Deductions: Ksh " + nhif.toFixed(2));
    console.log("NSSF Deductions: Ksh " + nssf.toFixed(2));
    console.log("Net Salary: Ksh " + netSalary.toFixed(2));
}

// Function to calculate PAYE based on gross salary
function calculatePAYE(grossSalary) {
    let paye = 0;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        paye = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        paye = 3880 + (grossSalary - 32334) * 0.30;
    } else if (grossSalary <= 800000) {
        paye = 89080 + (grossSalary - 500001) * 0.325;
    } else {
        paye = 197080 + (grossSalary - 800001) * 0.35;
    }
    return paye;
}

// Function to calculate NHIF deductions based on gross salary
function calculateNHIF(grossSalary) {
    let nhif = 0;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary >= 100000) {
        nhif = 1700;
    }
    return nhif;
}

// Function to calculate NSSF deductions based on basic salary
function calculateNSSF(basicSalary) {
    let nssf = 0;
    if (basicSalary <= 7000) {
        nssf = basicSalary * 0.06;
    } else if (basicSalary <= 36000) {
        nssf = 420 + (basicSalary - 7000) * 0.06;
    }
    return nssf;
}

// Calculating net salary
calculateNetSalary();
