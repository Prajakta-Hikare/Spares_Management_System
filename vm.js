function addVendor() {
    // Fetch values from the form
    var vendorCode = document.getElementById('vendorCode').value;
    var popularName = document.getElementById('popularName').value;
    var legalEntity = document.getElementById('legalEntity').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var pinCode = document.getElementById('pinCode').value;
    var gstNumber = document.getElementById('gstNumber').value;
    var pan = document.getElementById('pan').value;
    var spocName = document.getElementById('spocName').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var email = document.getElementById('email').value;
    var status = document.getElementById('status').value;
  
    // Validate and process the data (you may need more validation and processing here)
  
    // Display a confirmation or handle the data as needed (e.g., send it to a server)
    alert('Vendor added successfully!');
  
    // Reset form fields
    resetForm();
  }
  
  function resetForm() {
    document.getElementById('vendorCode').value = '';
    document.getElementById('popularName').value = '';
    document.getElementById('legalEntity').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('pinCode').value = '';
    document.getElementById('gstNumber').value = '';
    document.getElementById('pan').value = '';
    document.getElementById('spocName').value = '';
    document.getElementById('mobileNumber').value = '';
    document.getElementById('email').value = '';
    document.getElementById('status').value = 'Active';
  }
  