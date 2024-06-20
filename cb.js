// Sample data for departments, cabinets, spares categories, and spares groups
const departments = ["Department A", "Department B", "Department C"];
const cabinets = ["Cabinet 1", "Cabinet 2", "Cabinet 3"];
const sparesCategories = ["Category 1", "Category 2", "Category 3"];
const sparesGroups = ["Group A", "Group B", "Group C"];

// Sample data for bins
const bins = [];

// Function to populate department options
function populateDepartments() {
    const selectDepartment = document.getElementById("selectDepartment");
    departments.forEach(department => {
        const option = document.createElement("option");
        option.text = department;
        selectDepartment.add(option);
    });
}

// Function to populate cabinet options based on selected department
function populateCabinets() {
    const selectDepartment = document.getElementById("selectDepartment");
    const selectCabinet = document.getElementById("selectCabinet");
    const selectedDepartment = selectDepartment.value;

    // Clear existing options
    selectCabinet.innerHTML = '<option value="" selected>None</option>';

    // Populate cabinets based on selected department
    cabinets.forEach(cabinet => {
        const option = document.createElement("option");
        option.text = cabinet;
        selectCabinet.add(option);
    });
}

// Function to populate spares category options
function populateSparesCategories() {
    const sparesCategory = document.getElementById("sparesCategory");
    sparesCategories.forEach(category => {
        const option = document.createElement("option");
        option.text = category;
        sparesCategory.add(option);
    });
}

// Function to populate spares group options
function populateSparesGroups() {
    const sparesGroup = document.getElementById("sparesGroup");
    sparesGroups.forEach(group => {
        const option = document.createElement("option");
        option.text = group;
        sparesGroup.add(option);
    });
}

// Function to add a bin
function addBin() {
    const department = document.getElementById("selectDepartment").value;
    const cabinet = document.getElementById("selectCabinet").value;
    const binNumber = document.getElementById("binNumber").value;
    const sparesCategory = document.getElementById("sparesCategory").value;
    const sparesGroup = document.getElementById("sparesGroup").value;
    const status = document.getElementById("status").value;

    // Validate inputs
    if (!department || !cabinet || !binNumber) {
        alert("Please fill in all mandatory fields.");
        return;
    }

    // Check for unique bin number
    if (bins.some(bin => bin.binNumber === binNumber)) {
        alert("Bin number must be unique.");
        return;
    }

    // Create a bin object
    const bin = {
        department,
        cabinet,
        binNumber,
        sparesCategory,
        sparesGroup,
        status
    };

    // Display the bin in the list
    displayBin(bin);

    // Clear the form inputs
    document.getElementById("binNumber").value = "";
    document.getElementById("sparesCategory").value = "";
    document.getElementById("sparesGroup").value = "";
    document.getElementById("status").value = "Active";
}

// Function to display a bin in the list
function displayBin(bin) {
    const binList = document.getElementById("binList");

    const binDiv = document.createElement("div");
    binDiv.className = "bin-item";
    binDiv.innerHTML = `
        <strong>Department:</strong> ${bin.department}<br>
        <strong>Cabinet:</strong> ${bin.cabinet}<br>
        <strong>Bin Number:</strong> ${bin.binNumber}<br>
        <strong>Spares Category:</strong> ${bin.sparesCategory ? bin.sparesCategory : "None"}<br>
        <strong>Spares Group:</strong> ${bin.sparesGroup ? bin.sparesGroup : "None"}<br>
        <strong>Status:</strong> ${bin.status}<br>
        <hr>
    `;

    binList.appendChild(binDiv);
}

// Populate departments, cabinets, spares categories, and spares groups when the page loads
window.onload = function () {
    populateDepartments();
    populateCabinets();
    populateSparesCategories();
    populateSparesGroups();
};
