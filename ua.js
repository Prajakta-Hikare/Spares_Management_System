document.addEventListener("DOMContentLoaded", function () {
    // Populate functions dynamically from your backend
    const functionsData = [
      { name: "Company Information", grantAccess: false },
      { name: "Departments", grantAccess: false },
      { name: "Users Masters", grantAccess: false },
      { name: "Function List", grantAccess: false },
      { name: "User Authorities", grantAccess: false },
    ];
  
    const functionList = document.getElementById("functionList");
  
    functionsData.forEach((func) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${func.name}</td>
        <td><input type="checkbox" ${func.grantAccess ? "checked" : ""}></td>
      `;
      functionList.appendChild(row);
    });
  });
  
  function saveUserAuthorities() {
    // Logic to save user authorities to the backend
    alert("User authorities saved!");
  }
  