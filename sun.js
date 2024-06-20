document.addEventListener('DOMContentLoaded', function () {
    // Initialize the form with default values, date, etc.
    // You can use a JavaScript framework like React or Vue for more complex scenarios.

    // For demonstration purposes, setting some default values
    document.getElementById('recordId').value = generateRecordID();
    document.getElementById('utilizationDate').value = getCurrentDateTime();
    document.getElementById('preparedBy').value = getLoggedInUserID();

    // Populate initial dropdowns
    populateDepartments();
    populateMachines();
});

function generateRecordID() {
    // Implement logic to generate a unique record ID (e.g., from a database)
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

function populateDepartments() {
    // Implement logic to fetch departments from the server
    // For simplicity, using static data
    const departments = ['Department 1', 'Department 2', 'Department 3'];

    const selectDepartment = document.getElementById('selectDepartment');
    departments.forEach((department) => {
        const option = document.createElement('option');
        option.value = department;
        option.textContent = department;
        selectDepartment.appendChild(option);
    });

    // Trigger initial population for machine dropdown
    populateMachines();
}

function populateMachines() {
    // Implement logic to fetch machines based on the selected department
    // For simplicity, using static data
    const selectedDepartment = document.getElementById('selectDepartment').value;
    const machines = {
        'Department 1': ['Machine 1A', 'Machine 1B'],
        'Department 2': ['Machine 2A', 'Machine 2B'],
        'Department 3': ['Machine 3A', 'Machine 3B'],
    };

    const selectMachine = document.getElementById('selectMachine');
    // Clear existing options
    selectMachine.innerHTML = '';

    machines[selectedDepartment].forEach((machine) => {
        const option = document.createElement('option');
        option.value = machine;
        option.textContent = machine;
        selectMachine.appendChild(option);
    });
}

function addUtilizedPart() {
    // Implement logic to add utilized part fields dynamically
    // This may involve cloning existing fields or dynamically creating new ones.
}

document.getElementById('sparesUtilizationForm').addEventListener('submit', function (event) {
    // Implement form submission logic, e.g., sending data to the server.
    event.preventDefault();
    alert('Form submitted successfully!');
});
