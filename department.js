// Array to store departments (in-memory simulation)
const departments = [];

function submitDepartmentForm() {
    // Get form values
    const shortCode = document.getElementById('shortCode').value;
    const departmentName = document.getElementById('departmentName').value;

    // Check if the short code already exists
    const isDuplicate = departments.some(department => department.shortCode === shortCode);

    if (isDuplicate) {
        alert('Record with this Short Code already exists. Please use a unique Short Code.');
        return;
    }

    // Validate and add department to the array (in-memory simulation)
    if (shortCode && departmentName) {
        const department = { shortCode, departmentName };
        departments.push(department);

        // Clear form fields
        document.getElementById('shortCode').value = '';
        document.getElementById('departmentName').value = '';

        // Update department table
        updateDepartmentTable();
    }
}


function updateDepartmentTable() {
    const departmentTable = document.getElementById('departmentTable');
    departmentTable.innerHTML = '<h2>Departments:</h2>';

    if (departments.length > 0) {
        const table = document.createElement('table');
        table.classList.add('department-table');

        // Header Row
        const headerRow = table.insertRow(0);
        const header1 = headerRow.insertCell(0);
        const header2 = headerRow.insertCell(1);
        const header3 = headerRow.insertCell(2);

        header1.textContent = 'Short Code';
        header2.textContent = 'Department';
        header3.textContent = 'Actions';

        // Data Rows
        departments.forEach((department, index) => {
            const row = table.insertRow(index + 1);
        
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
        
            cell1.textContent = department.shortCode;
            cell2.textContent = department.departmentName;
        
            // Add Edit and Delete buttons
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editDepartment(index));
        
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteDepartment(index));
        
            // Add margin to the right of the "Edit" button
            editButton.style.marginRight = '5px';
        
            cell3.appendChild(editButton);
            cell3.appendChild(deleteButton);
        });

        departmentTable.appendChild(table);
    } else {
        departmentTable.innerHTML += '<p>No departments available.</p>';
    }
}

function editDepartment(index) {
    // You can implement the edit functionality here
    console.log('Edit department:', departments[index]);
}

function deleteDepartment(index) {
    // You can implement the delete functionality here
    departments.splice(index, 1);
    updateDepartmentTable();
}

// ... (previous code remains unchanged)

function searchDepartments() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const filteredDepartments = departments.filter(
        department => department.shortCode.toLowerCase().includes(searchValue)
    );

    updateDepartmentTable(filteredDepartments);
}

function editDepartment(index) {
    const { shortCode, departmentName } = departments[index];

    // Set values in the modal
    document.getElementById('editShortCode').value = shortCode;
    document.getElementById('editDepartmentName').value = departmentName;

    // Show the modal
    document.getElementById('editModal').style.display = 'block';
}

function closeModal() {
    // Close the modal
    document.getElementById('editModal').style.display = 'none';
}

function saveEdit() {
    // Get edited values
    const editedShortCode = document.getElementById('editShortCode').value;
    const editedDepartmentName = document.getElementById('editDepartmentName').value;

    // Find the index of the department in the array
    const index = departments.findIndex(
        department => department.shortCode === editedShortCode
    );

    // Update the department if found
    if (index !== -1) {
        departments[index].shortCode = editedShortCode;  // Update shortCode
        departments[index].departmentName = editedDepartmentName;
        closeModal();
        updateDepartmentTable();
    }
}

