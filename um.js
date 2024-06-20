// Sample data for Departments Master
const departmentsMaster = [
    { id: '1', name: 'Department A' },
    { id: '2', name: 'Department B' },
    // Add more departments as needed
];

// Array to store user data (in-memory simulation)
const users = [];

// Function to populate department options
function populateDepartments() {
    const selectDepartment = document.getElementById('selectDepartment');
    departmentsMaster.forEach(department => {
        const option = document.createElement('option');
        option.value = department.id;
        option.textContent = department.name;
        selectDepartment.appendChild(option);
    });
}

// Function to submit user form
function submitUserForm() {
    // Get form values
    const employeeCode = document.getElementById('employeeCode').value;
    const userName = document.getElementById('userName').value;
    const selectedDepartment = document.getElementById('selectDepartment');
    const departmentName = selectedDepartment.options[selectedDepartment.selectedIndex].text;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const userRole = document.getElementById('userRole').value;
    const password = document.getElementById('password').value;
    const createdBy = document.getElementById('createdBy').value;
    const dateCreated = document.getElementById('dateCreated').value;

    // Check if the employee code already exists
    const isDuplicate = users.some(user => user.employeeCode === employeeCode);

    if (isDuplicate) {
        alert('User with this Employee Code already exists. Please use a unique Employee Code.');
        return;
    }

    // Validate and add user to the array (in-memory simulation)
    if (employeeCode && userName && email && mobileNumber && password) {
        // Validate mobile number format
        if (!/^\d{10}$/.test(mobileNumber)) {
            alert('Mobile number must be 10 digits.');
            return;
        }

        const user = {
            userId: generateUserId(),
            employeeCode,
            userName,
            departmentName,
            email,
            mobileNumber,
            userRole,
            accountStatus: 'Active',
            password,
            createdBy,
            dateCreated,
            lastEditedBy: '',
            dateLastEdited: '',
            lastLoginDate: '',
            loginCounter: 0,
        };

        // Add the user to the array
        users.push(user);

        // Clear form fields
        document.getElementById('employeeCode').value = '';
        document.getElementById('userName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mobileNumber').value = '';
        document.getElementById('password').value = '';

        // Update user table
        updateUserTable();
    }
}

// Function to generate a unique user ID (Suggested PK)
function generateUserId() {
    return users.length + 1;
}

// Function to update the user table
function updateUserTable() {
    const userTable = document.getElementById('userTable');
    userTable.innerHTML = '<h2>Users:</h2>';

    if (users.length > 0) {
        const table = document.createElement('table');
        table.classList.add('user-table');

        // Header Row
        const headerRow = table.insertRow(0);
        const headers = ['User ID', 'Employee Code', 'User Name', 'Department', 'Email', 'Mobile Number', 'User Role', 'Actions'];

        headers.forEach((header, index) => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });

        // Data Rows
        users.forEach((user, index) => {
            const row = table.insertRow(index + 1);
        
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            const cell7 = row.insertCell(6);
            const cell8 = row.insertCell(7);
        
            cell1.textContent = user.userId;
            cell2.textContent = user.employeeCode;
            cell3.textContent = user.userName;
            cell4.textContent = user.departmentName;
            cell5.textContent = user.email;
            cell6.textContent = user.mobileNumber;
            cell7.textContent = user.userRole;
        
            // Add Edit and Delete buttons with a small gap
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editUser(index));
        
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteUser(index));
        
            // Add a small gap between the buttons
            cell8.appendChild(editButton);
            cell8.appendChild(document.createTextNode(' ')); // Add a text node for spacing
            cell8.appendChild(deleteButton);
        });

        userTable.appendChild(table);
    } else {
        userTable.innerHTML += '<p>No users available.</p>';
    }
}

// Function to edit a user
function editUser(index) {
    // Get the user data
    const user = users[index];

    // Set values in the edit modal
    document.getElementById('editEmployeeCode').value = user.employeeCode;
    document.getElementById('editUserName').value = user.userName;
    document.getElementById('editSelectDepartment').value = user.departmentName;
    document.getElementById('editEmail').value = user.email;
    document.getElementById('editMobileNumber').value = user.mobileNumber;
    document.getElementById('editUserRole').value = user.userRole;

    // Show the edit modal
    document.getElementById('editModal').style.display = 'block';
}

// Function to delete a user
function deleteUser(index) {
    // This is where you can implement the functionality to delete a user
    users.splice(index, 1);
    updateUserTable();
}

// Initial population of department options
populateDepartments();
// Initial update of the user table
updateUserTable();
function saveEdit() {
    // Get edited values
    const editedEmployeeCode = document.getElementById('editEmployeeCode').value;
    const editedUserName = document.getElementById('editUserName').value;
    const editedSelectedDepartment = document.getElementById('editSelectDepartment');
    const editedDepartmentName = editedSelectedDepartment.options[editedSelectedDepartment.selectedIndex].text;
    const editedEmail = document.getElementById('editEmail').value;
    const editedMobileNumber = document.getElementById('editMobileNumber').value;
    const editedUserRole = document.getElementById('editUserRole').value;

    // Find the index of the user in the array
    const index = users.findIndex(user => user.employeeCode === editedEmployeeCode);

    // Update the user if found
    if (index !== -1) {
        users[index].userName = editedUserName;
        users[index].departmentName = editedDepartmentName;
        users[index].email = editedEmail;
        users[index].mobileNumber = editedMobileNumber;
        users[index].userRole = editedUserRole;
        users[index].lastEditedBy = 'AdminID456';  // Set the ID of the Admin who edited (you may adjust this)
        users[index].dateLastEdited = getCurrentDate();  // Function to get the current date

        closeModal();
        updateUserTable();
    }
}

function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
}

function closeModal() {
    // Close the edit modal
    document.getElementById('editModal').style.display = 'none';
}

function isValidMobileNumber(mobileNumber) {
    return /^\d{10}$/.test(mobileNumber);
}


// Initial update of the user table
updateUserTable();

