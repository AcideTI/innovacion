function validateNumericInput(inputField) {
    // Use input event to validate as the user types
    inputField.addEventListener('input', function() {
      // Regular expression to allow only positive numbers
      const regex = /^[0-9]+$/;
      if (!regex.test(this.value)) {
        // If the input is not a positive number, replace it with an empty string
        this.value = this.value.replace(/[^0-9]/g, '');
      }
    });
  }
  
  // Get the input fields by their IDs
  const rucField = document.getElementById('ruc');
  const contactNumberField = document.getElementById('contact-number');
  
  // Call the validation function for each input field
  validateNumericInput(rucField);
  validateNumericInput(contactNumberField);