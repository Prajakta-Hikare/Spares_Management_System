document.addEventListener('DOMContentLoaded', function () {
    // Initialize the form with default values, date, etc.
    // You can use a JavaScript framework like React or Vue for more complex scenarios.

    // For demonstration purposes, setting some default values
    document.getElementById('indentNumber').value = generateIndentNumber();
    document.getElementById('date').value = getCurrentDateTime();
    document.getElementById('preparedBy').value = getLoggedInUserID();

    // Populate initial dropdowns
    populateDepartments();
});

function generateIndentNumber() {
    // Implement logic to generate a unique indent number (e.g., from a database)
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

    // Trigger initial population for machine and sub-assembly dropdowns
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

    // Trigger initial population for sub-assembly dropdown
    populateSubAssemblies();
}

function populateSubAssemblies() {
    // Implement logic to fetch sub-assemblies based on the selected machine
    // For simplicity, using static data
    const selectedMachine = document.getElementById('selectMachine').value;
    const subAssemblies = {
        'Machine 1A': ['Sub-Assembly 1A1', 'Sub-Assembly 1A2'],
        'Machine 1B': ['Sub-Assembly 1B1', 'Sub-Assembly 1B2'],
        'Machine 2A': ['Sub-Assembly 2A1', 'Sub-Assembly 2A2'],
        'Machine 2B': ['Sub-Assembly 2B1', 'Sub-Assembly 2B2'],
        'Machine 3A': ['Sub-Assembly 3A1', 'Sub-Assembly 3A2'],
        'Machine 3B': ['Sub-Assembly 3B1', 'Sub-Assembly 3B2'],
    };

    const selectSubAssembly = document.getElementById('selectSubAssembly');
    // Clear existing options
    selectSubAssembly.innerHTML = '';

    subAssemblies[selectedMachine].forEach((subAssembly) => {
        const option = document.createElement('option');
        option.value = subAssembly;
        option.textContent = subAssembly;
        selectSubAssembly.appendChild(option);
    });
}

// Add similar functions to populate other dropdowns as needed
