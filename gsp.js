// Sample data for groups
const groups = [];

// Function to add a group
function addGroup() {
    const groupCode = document.getElementById("groupCode").value;
    const groupDescription = document.getElementById("groupDescription").value;

    // Validate inputs
    if (!groupCode || !groupDescription) {
        alert("Please fill in all mandatory fields.");
        return;
    }

    // Check for unique group code
    if (groups.some(group => group.groupCode === groupCode)) {
        alert("Group code must be unique.");
        return;
    }

    // Create a group object
    const group = {
        groupCode,
        groupDescription
    };

    // Display the group in the list
    displayGroup(group);

    // Clear the form inputs
    document.getElementById("groupCode").value = "";
    document.getElementById("groupDescription").value = "";
}

// Function to display a group in the list
function displayGroup(group) {
    const groupList = document.getElementById("groupList");

    const groupDiv = document.createElement("div");
    groupDiv.className = "group-item";
    groupDiv.innerHTML = `
        <strong>Group Code:</strong> ${group.groupCode}<br>
        <strong>Group Description:</strong> ${group.groupDescription}<br>
        <hr>
    `;

    groupList.appendChild(groupDiv);
}
