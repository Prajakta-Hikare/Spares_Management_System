// Sample data for departments
const departments = ["Department A", "Department B", "Department C"];

// Function to populate department options
function populateDepartments() {
    const selectDepartment = document.getElementById("selectDepartment");
    departments.forEach(department => {
        const option = document.createElement("option");
        option.text = department;
        selectDepartment.add(option);
    });
}

// Function to add a machine
function addMachine() {
    const department = document.getElementById("selectDepartment").value;
    const machineName = document.getElementById("machineName").value;
    const additionalDescription = document.getElementById("additionalDescription").value;

    // Validate inputs
    if (!department || !machineName) {
        alert("Please fill in all mandatory fields.");
        return;
    }

    // Create a machine object
    const machine = {
        department,
        machineName,
        additionalDescription
    };

    // Display the machine in the list
    displayMachine(machine);

    // Clear the form inputs
    document.getElementById("selectDepartment").value = "";
    document.getElementById("machineName").value = "";
    document.getElementById("additionalDescription").value = "";
}

// Function to display a machine in the list
function displayMachine(machine) {
    const machineList = document.getElementById("machineList");

    const machineDiv = document.createElement("div");
    machineDiv.className = "machine-item";
    machineDiv.innerHTML = `
        <strong>Department:</strong> ${machine.department}<br>
        <strong>Machine/Equipment Name:</strong> ${machine.machineName}<br>
        <strong>Additional Description:</strong> ${machine.additionalDescription ? machine.additionalDescription : "N/A"}<br>
        <hr>
    `;

    machineList.appendChild(machineDiv);
}

// Populate departments when the page loads
window.onload = function () {
    populateDepartments();
};
