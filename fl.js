// Sample data for Functions List
const functionsList = [];

// Function to submit function form
function submitFunctionForm() {
    // Get form values
    const functionName = document.getElementById('functionName').value;
    const changedName = document.getElementById('changedName').value;

    // Validate and add function to the array (in-memory simulation)
    if (functionName && changedName) {
        // Check if the function name already exists
        const isDuplicate = functionsList.some(func => func.functionName === functionName);

        if (isDuplicate) {
            alert('Function with this name already exists. Please use a unique function name.');
            return;
        }

        const func = {
            functionNumber: generateFunctionNumber(),
            functionName,
            changedName,
        };

        // Add the function to the array
        functionsList.push(func);

        // Clear form fields
        document.getElementById('functionName').value = '';
        document.getElementById('changedName').value = '';

        // Update functions table
        updateFunctionsTable();
    }
}

// Function to generate a unique function number
function generateFunctionNumber() {
    return functionsList.length + 1;
}

// Function to update the functions table
function updateFunctionsTable() {
    const functionsTable = document.getElementById('functionsTable');
    functionsTable.innerHTML = '<h2>Functions List:</h2>';

    if (functionsList.length > 0) {
        const table = document.createElement('table');
        table.classList.add('functions-table');

        // Header Row
        const headerRow = table.insertRow(0);
        const headers = ['Function', 'Function Name', 'Changed Name', 'Action'];

        headers.forEach((header, index) => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });

        // Data Rows
        functionsList.forEach((func, index) => {
            const row = table.insertRow(index + 1);

            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);

            cell1.textContent = func.functionNumber;
            cell2.textContent = func.functionName;
            cell3.textContent = func.changedName;

            // Add Edit button
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editFunction(index));

            cell4.appendChild(editButton);
        });

        functionsTable.appendChild(table);
    } else {
        functionsTable.innerHTML += '<p>No functions available.</p>';
    }
}

// Function to edit a function
function editFunction(index) {
    // Get the edit modal
    const editModal = document.getElementById('editFunctionModal');

    // Populate the modal with current function details
    document.getElementById('editFunctionName').value = functionsList[index].functionName;
    document.getElementById('editChangedName').value = functionsList[index].changedName;

    // Show the modal
    editModal.style.display = 'block';

    // Save edited data on Save button click
    document.getElementById('saveEditButton').onclick = function () {
        // Update the function if Save is clicked
        functionsList[index].functionName = document.getElementById('editFunctionName').value;
        functionsList[index].changedName = document.getElementById('editChangedName').value;

        // Close the modal and update the table
        editModal.style.display = 'none';
        updateFunctionsTable();
    };
}

// Function to close the edit modal
function closeEditModal() {
    document.getElementById('editFunctionModal').style.display = 'none';
}



// Initial update of the functions table
updateFunctionsTable();
