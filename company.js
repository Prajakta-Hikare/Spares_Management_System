function submitForm() {
    // Get form elements
    var shortName = document.getElementById('shortName').value;
    var legalEntityName = document.getElementById('legalEntityName').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zipCode = document.getElementById('zipCode').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var gstNumber = document.getElementById('gstNumber').value;
    var panNumber = document.getElementById('panNumber').value;
    var logo = document.getElementById('logo').value;
    var website = document.getElementById('website').value;

    if (!validateInput(shortName, 'Short Name')) return false;
    if (!validateInput(legalEntityName, 'Legal Entity Name')) return false;
    if (!validateInput(address, 'Address')) return false;
    if (!validateInput(city, 'City')) return false;
    if (!validateSelect(state, 'State')) return false;
    if (!validateInput(zipCode, 'Zip / Pin Code')) return false;
    if (!validateInput(phoneNumber, 'Phone Number')) return false;
    if (!validateInput(logo, 'Logo')) return false;

    console.log('Short Name:', shortName);
    console.log('Legal Entity Name:', legalEntityName);
    console.log('Address:', address);
    console.log('City:', city);
    console.log('State:', state);
    console.log('Zip / Pin Code:', zipCode);
    console.log('Phone Number:', phoneNumber);
    console.log('GST Registration Number:', gstNumber);
    console.log('PAN:', panNumber);
    console.log('Logo:', logo);
    console.log('Website:', website);

    // Show success message
    alert('Record entered successfully');

    // Clear the form data
    document.getElementById('companyForm').reset();

    // Optional: You can perform additional actions after successful submission

    // Prevent form submission
    return false;
}

// Validation functions...
