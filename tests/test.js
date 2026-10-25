const fs = require("fs");

const file = fs.readFileSync("src/App.js", "utf8");

let score = 0;

function check(condition, message, marks) {
    if (condition) {
        console.log(`PASS: ${message} (+${marks})`);
        score += marks;
    } else {
        console.log(`FAIL: ${message}`);
    }
}

// Test 1 – useState
check(
    file.includes("useState"),
    "useState Hook is used",
    2
);

// Test 2 – onChange
check(
    file.includes("onChange"),
    "onChange event is used",
    1
);

// Test 3 – onSubmit
check(
    file.includes("onSubmit"),
    "onSubmit event is used",
    1
);

// Test 4 – Name validation
check(
    file.toLowerCase().includes("name"),
    "Name field is implemented",
    1
);

// Test 5 – Email validation
check(
    file.toLowerCase().includes("email") &&
    file.includes("@"),
    "Email validation is implemented",
    1
);

// Test 6 – Feedback
check(
    file.toLowerCase().includes("feedback"),
    "Feedback field is implemented",
    1
);

// Test 7 – Successful submission
check(
    file.toLowerCase().includes("feedback submitted successfully"),
    "Successful submission message is implemented",
    1
);

// Test 8 – Form
check(
    file.includes("<form") &&
    file.includes("</form>"),
    "Form element is implemented",
    1
);

// Test 9 – Submit button
check(
    file.includes("submit") &&
    file.includes("button"),
    "Submit button is implemented",
    1
);

console.log("--------------------------------");
console.log(`Total Marks: ${score}/10`);
console.log("--------------------------------");

if (score < 6) {
    process.exit(1);
}
