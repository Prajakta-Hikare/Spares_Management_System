// Sample data for departments and machines/equipment
const departments = ["Department A", "Department B", "Department C"];
const machines = ["Machine 1", "Machine 2", "Machine 3"];

// Sample data for cabinets
const cabinets = [];

// Function to populate department options
function populateDepartments() {
    const selectDepartment = document.getElementById("selectDepartment");
    departments.forEach(department => {
        const option = document.createElement("option");
        option.text = department;
        selectDepartment.add(option);
    });
}

// Function to populate machine/equipment options
function populateMachines() {
    const machineAllocation = document.getElementById("machineAllocation");
    machines.forEach(machine => {
        const option = document.createElement("option");
        option.text = machine;
        machineAllocation.add(option);
    });
}

// Function to add a cabinet
function addCabinet() {
    const department = document.getElementById("selectDepartment").value;
    const cabinetCode = document.getElementById("cabinetCode").value;
    const cabinetDescription = document.getElementById("cabinetDescription").value;
    const machineAllocation = document.getElementById("machineAllocation").value;
    const numberOfBins = document.getElementById("numberOfBins").value;
    const status = document.getElementById("status").value;

    // Validate inputs
    if (!department || !cabinetCode || !cabinetDescription || !numberOfBins) {
        alert("Please fill in all mandatory fields.");
        return;
    }

    // Check for unique cabinet code
    if (cabinets.some(cabinet => cabinet.cabinetCode === cabinetCode)) {
        alert("Cabinet code must be unique.");
        return;
    }

    // Create a cabinet object
    const cabinet = {
        department,
        cabinetCode,
        cabinetDescription,
        machineAllocation,
        numberOfBins,
        status
    };

    // Display the cabinet in the list
    displayCabinet(cabinet);

    // Clear the form inputs
    document.getElementById("cabinetCode").value = "";
    document.getElementById("cabinetDescription").value = "";
    document.getElementById("machineAllocation").value = "";
    document.getElementById("numberOfBins").value = "";
    document.getElementById("status").value = "Active";
}

// Function to display a cabinet in the list
function displayCabinet(cabinet) {
    const cabinetList = document.getElementById("cabinetList");

    const cabinetDiv = document.createElement("div");
    cabinetDiv.className = "cabinet-item";
    cabinetDiv.innerHTML = `
        <strong>Department:</strong> ${cabinet.department}<br>
        <strong>Cabinet Code:</strong> ${cabinet.cabinetCode}<br>
        <strong>Cabinet Description:</strong> ${cabinet.cabinetDescription}<br>
        <strong>Machine/Equipment Allocation:</strong> ${cabinet.machineAllocation ? cabinet.machineAllocation : "None"}<br>
        <strong>Number of Bins:</strong> ${cabinet.numberOfBins}<br>
        <strong>Status:</strong> ${cabinet.status}<br>
        <hr>
    `;

    cabinetList.appendChild(cabinetDiv);
}

// Populate departments and machines when the page loads
window.onload = function () {
    populateDepartments();
    populateMachines();
};
