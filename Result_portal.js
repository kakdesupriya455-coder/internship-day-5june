console.log("Student Result Generation Started...");

// Step 1: Check Student Record
function checkStudentRecord() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Checking Student Record...");
            resolve();
        }, 2000);
    });
}

// Step 2: Calculate Marks
function calculateMarks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Calculating Marks...");
            resolve();
        }, 2000);
    });
}

// Step 3: Generate Result
function generateResult() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Generating Result...");
            resolve();
        }, 2000);
    });
}

// Step 4: Result Generated
function resultGenerated() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Result Generated Successfully!");
            resolve({
                studentName: "Rahul",
                totalMarks: 450,
                percentage: "90%",
                grade: "A"
            });
        }, 2000);
    });
}

// Execute Sequentially using Async/Await
async function studentResultPortal() {
    await checkStudentRecord();
    await calculateMarks();
    await generateResult();

    const result = await resultGenerated();

    console.log("\nStudent Name:", result.studentName);
    console.log("Total Marks:", result.totalMarks);
    console.log("Percentage:", result.percentage);
    console.log("Grade:", result.grade);
}

studentResultPortal();