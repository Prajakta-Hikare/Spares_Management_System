function submitForm() {
    function submitForm() {
    // Retrieve values from form fields
    var grnNumber = generateGRNNumber();
    var date = getCurrentDate();
    var selectedVendor = document.getElementById('selectVendor').value;
    var selectedPONumber = document.getElementById('selectPONumber').value;
    var selectedPart = document.getElementById('selectPart').value;
    var orderedQuantity = document.getElementById('orderedQuantity').value;
    var receivedQuantity = document.getElementById('receivedQuantity').value;
    var packagingUnit = document.getElementById('packagingUnit').value;

    // Calculate balance quantity
    var balanceQuantity = calculateBalanceQuantity(orderedQuantity, receivedQuantity);

    // Display the form data
    var formData = {
      "GRN Number": grnNumber,
      "Date": date,
      "Vendor": selectedVendor,
      "PO Number": selectedPONumber,
      "Part": selectedPart,
      "Ordered Quantity": orderedQuantity,
      "Received Quantity": receivedQuantity,
      "Packaging Unit": packagingUnit,
      "Balance Quantity": balanceQuantity
    };

    // You can replace this alert with your logic to send data to the server or perform other actions
    alert("Form Data:\n" + JSON.stringify(formData, null, 2));
  }

  function generateGRNNumber() {
    // Implement your logic to generate a unique GRN number (e.g., using timestamp)
    return "GRN" + Date.now();
  }

  function getCurrentDate() {
    // Get the current date in the format YYYY-MM-DD
    var currentDate = new Date();
    return currentDate.toISOString().split('T')[0];
  }

  function calculateBalanceQuantity(orderedQuantity, receivedQuantity) {
    // Implement your logic to calculate the balance quantity
    return orderedQuantity - receivedQuantity;
  }
    alert('Form submitted!');
}