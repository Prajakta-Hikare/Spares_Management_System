document.addEventListener('DOMContentLoaded', function () {
    const vendorSelect = document.getElementById('vendorSelect');
    const partSelect = document.getElementById('partSelect');
    const baseUnitInput = document.getElementById('baseUnit');
    const rateInput = document.getElementById('rate');
    const moqInput = document.getElementById('moq');
    const packagingUnitInput = document.getElementById('packagingUnit');
    const cgstRateInput = document.getElementById('cgstRate');
    const sgstRateInput = document.getElementById('sgstRate');
    const leadTimeInput = document.getElementById('leadTime');
    const statusSelect = document.getElementById('status');

    vendorSelect.addEventListener('change', function () {
        const selectedVendor = vendorSelect.value;

        // Simulated data for demonstration
        const vendorDetails = {
            baseUnit: 'Each',
            // Add more details as needed
        };

        baseUnitInput.value = vendorDetails.baseUnit;
    });

    partSelect.addEventListener('change', function () {
        const selectedPart = partSelect.value;

        // Simulated data for demonstration
        const partDetails = {
            rate: 150.00,
            moq: 10,
            packagingUnit: 'Box',
            cgstRate: 5.00,
            sgstRate: 2.50,
            leadTime: 15,
        };

        // Update the UI with the fetched details
        rateInput.value = partDetails.rate.toFixed(2);
        moqInput.value = partDetails.moq;
        packagingUnitInput.value = partDetails.packagingUnit;
        cgstRateInput.value = partDetails.cgstRate.toFixed(2);
        sgstRateInput.value = partDetails.sgstRate.toFixed(2);
        leadTimeInput.value = partDetails.leadTime;
    });

    const form = document.getElementById('sparesMappingForm');
    form.addEventListener('submit', function (event) {
        // Handle form submission, perform validation, and send data to the server
        event.preventDefault();

        // Example: You may want to send data to the server using AJAX
        // const formData = new FormData(form);
        // sendFormDataToServer(formData);
        alert('Form submitted!');
    });
});
