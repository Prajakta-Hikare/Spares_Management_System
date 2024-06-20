document.addEventListener('DOMContentLoaded', function () {
    // Initialize the form with default values, date, etc.
    // You can use a JavaScript framework like React or Vue for more complex scenarios.

    // For demonstration purposes, setting some default values
    document.getElementById('issueNumber').value = generateIssueNumber();
    document.getElementById('issueDate').value = getCurrentDateTime();
    document.getElementById('preparedBy').value = getLoggedInUserID();

    // Populate initial dropdowns
    populateIndents();
    populateParts();
});

function generateIssueNumber() {
    // Implement logic to generate a unique issue number (e.g., from a database)
    // For simplicity, using a random number for demonstration
    return Math.floor(Math.random() * 1000) + 1;
}

function getCurrentDateTime() {
    // Implement logic to get the current date and time
    // For simplicity, using a string representation of the current date
    return new Date().toLocaleString();
}

function getLoggedInUserID() {
    // Implement logic to get the ID of the logged-in user
    // For simplicity, using a placeholder value
    return 'user123';
}

function populateIndents() {
    // Implement logic to fetch open indents from the server
    // For simplicity, using static data
    const indents = ['Indent 1', 'Indent 2', 'Indent 3'];

    const selectIndent = document.getElementById('selectIndent');
    indents.forEach((indent) => {
        const option = document.createElement('option');
        option.value = indent;
        option.textContent = indent;
        selectIndent.appendChild(option);
    });
}

function populateParts() {
    // Implement logic to fetch parts from the server
    // For simplicity, using static data
    const parts = [
        { number: 'P001', description: 'Part 1', quantity: 10, unit: 'EA' },
        { number: 'P002', description: 'Part 2', quantity: 5, unit: 'EA' },
        { number: 'P003', description: 'Part 3', quantity: 8, unit: 'EA' },
    ];

    const selectPartNumber = document.getElementById('selectPartNumber');
    const selectPartDescription = document.getElementById('selectPartDescription');

    parts.forEach((part) => {
        // Populate Select Part Number dropdown
        const optionNumber = document.createElement('option');
        optionNumber.value = part.number;
        optionNumber.textContent = part.number;
        selectPartNumber.appendChild(optionNumber);

        // Populate Select Part Description dropdown
        const optionDescription = document.createElement('option');
        optionDescription.value = part.description;
        optionDescription.textContent = part.description;
        selectPartDescription.appendChild(optionDescription);
    });
}

function addIssuedPart() {
    // Implement logic to add issued part fields dynamically
    // This may involve cloning existing fields or dynamically creating new ones.
}

document.getElementById('sparesIssueForm').addEventListener('submit', function (event) {
    // Implement form submission logic, e.g., sending data to the server.
    event.preventDefault();
    alert('Form submitted successfully!');
});
