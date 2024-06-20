function addPart() {
    const partsContainer = document.getElementById('partsContainer');
    const newPart = document.createElement('div');
    newPart.className = 'part';

    const partNumber = partsContainer.children.length + 1;

    newPart.innerHTML = `
        <label for="part${partNumber}">Select Part:</label>
        <select class="partSelect" required>
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
        </select>

        <label for="quantity${partNumber}">Order Quantity:</label>
        <input type="number" class="quantity" required>

        <label for="rate${partNumber}">Rate (₹):</label>
        <input type="text" class="rate" required>

        <label for="packaging${partNumber}">Packaging/Supply Unit:</label>
        <input type="text" class="packaging" readonly>

        <label for="orderAmount${partNumber}">Order Amount (₹):</label>
        <input type="text" class="orderAmount" readonly>

        <label for="cgstAmount${partNumber}">CGST Amount (₹):</label>
        <input type="text" class="cgstAmount" readonly>

        <label for="sgstAmount${partNumber}">SGST Amount (₹):</label>
        <input type="text" class="sgstAmount" readonly>
    `;

    partsContainer.appendChild(newPart);
}

// Add more JavaScript logic as needed, such as form validation and submission handling.
