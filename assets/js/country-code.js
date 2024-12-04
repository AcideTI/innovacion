document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#contact-number");
  const countryCodeElement = document.querySelector("#country-code");

  // Inicializar intl-tel-input
  const iti = window.intlTelInput(input, {
    initialCountry: "pe", // Cargar Perú por defecto
    preferredCountries: ["pe", "us", "mx"], // Países favoritos
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
  });

  // Actualizar el campo de código de país al cambiar de país
  input.addEventListener("countrychange", function () {
    const countryCode = iti.getSelectedCountryData().dialCode; // Obtener nuevo código
    countryCodeElement.textContent = `+${countryCode}`; // Actualizar el span
  });

  // Validación del número al enviar el formulario
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    if (!iti.isValidNumber()) {
      event.preventDefault();
      input.classList.add("is-invalid");
      console.log("Número inválido:", iti.getNumber());
    } else {
      input.classList.remove("is-invalid");
      console.log("Número válido:", iti.getNumber());
    }
  });
});