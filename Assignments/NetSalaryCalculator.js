function calculateNetSalary() {
    // Prompt user for inputs
    let basicSalary = parseFloat(prompt("Enter your basic salary (Ksh):"));
    let benefits = parseFloat(prompt("Enter your benefits (Ksh):"));

    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE (Pay As You Earn) based on income brackets
    let paye = calculatePAYE(grossSalary);

    // Calculate NHIF deductions based on gross pay
    let nhif = calculateNHIF(grossSalary);

    // Calculate NSSF deductions based on pensionable pay
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

