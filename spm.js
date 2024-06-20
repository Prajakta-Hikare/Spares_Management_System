// Dummy data for dynamic select options
const departments = ["Department A", "Department B", "Department C"];
const machines = ["Machine A", "Machine B", "Machine C"];
const categories = ["Category A", "Category B", "Category C"];
const groups = ["Group A", "Group B", "Group C"];
const cabinets = ["Cabinet A", "Cabinet B", "Cabinet C"];
const bins = ["Bin A", "Bin B", "Bin C"];

// Function to populate select options
function populateSelectOptions(selectId, options) {
    const select = document.getElementById(selectId);
    select.innerHTML = "";
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.text = option;
        select.appendChild(optionElement);
    });
}

// Function to be called on form submission
function submitForm(event) {
    event.preventDefault();
    // Add your form submission logic here
}

// Populate initial select options on page load
document.addEventListener("DOMContentLoaded", function () {
    populateSelectOptions("selectDepartment", departments);
    populateSelectOptions("selectMachine", machines);
    populateSelectOptions("selectSpareCategory", categories);
    populateSelectOptions("selectSpareGroup", groups);
    populateSelectOptions("selectStorageCabinet", cabinets);
    populateSelectOptions("selectBinCrate", bins);
});
