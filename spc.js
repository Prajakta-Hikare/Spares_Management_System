// Sample data for categories
const categories = [];

// Function to add a category
function addCategory() {
    const categoryCode = document.getElementById("categoryCode").value;
    const categoryDescription = document.getElementById("categoryDescription").value;

    // Validate inputs
    if (!categoryCode || !categoryDescription) {
        alert("Please fill in all mandatory fields.");
        return;
    }

    // Check for unique category code
    if (categories.some(category => category.categoryCode === categoryCode)) {
        alert("Category code must be unique.");
        return;
    }

    // Create a category object
    const category = {
        categoryCode,
        categoryDescription
    };

    // Display the category in the list with delete button
    displayCategory(category, categories.length);

    // Store the category in the array
    categories.push(category);

    // Clear the form inputs
    document.getElementById("categoryCode").value = "";
    document.getElementById("categoryDescription").value = "";
}

function displayCategory(category, index) {
    const categoryList = document.getElementById("categoryList");

    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category-item";
    categoryDiv.innerHTML = `
        <strong>Category Code:</strong> ${category.categoryCode}<br>
        <strong>Category Description:</strong> ${category.categoryDescription}<br>
        <button onclick="deleteCategory(${index})">Delete</button>
        <hr>
    `;

    categoryList.appendChild(categoryDiv);
}


// Function to delete a category
function deleteCategory(index) {
    const confirmation = confirm("Are you sure you want to delete this category?");
    
    if (confirmation) {
        categories.splice(index, 1);
        updateCategoryList();
    }
}

// Function to update the category list
function updateCategoryList() {
    const categoryList = document.getElementById("categoryList");
    categoryList.innerHTML = ""; // Clear the current list

    // Display each category with delete button
    categories.forEach((category, index) => {
        displayCategory(category, index);
    });
}

// Initial update of the category list
updateCategoryList();
