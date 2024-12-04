// Función de envío de correo
const sendEmail = async (formData) => {
  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_nswucc5",
        template_id: "template_38w9odo",
        user_id: "AcilVb584WuYgAtvG",
        template_params: formData,
      }),
    });

    // Verificar si la respuesta es JSON o texto
    const contentType = response.headers.get("Content-Type") || "";

    if (!response.ok) {
      // Manejar errores de la API
      let errorData;
      if (contentType.includes("application/json")) {
        errorData = await response.json(); // Parsear como JSON
      } else {
        errorData = await response.text(); // Parsear como texto
      }
      throw new Error(
        `Error ${response.status}: ${response.statusText} - ${errorData}`
      );
    }

    return true; // Retornar éxito si la solicitud fue exitosa
  } catch (error) {
    console.error("Error en sendEmail:", error.message);
    throw error; // Relanzar el error para manejarlo fuera de la función
  }
};

// Seleccionamos el botón de envío por su ID
const submitButton = document.getElementById("form-submit");

// Manejo del envío de datos al correo desde el formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
  // Referencia al botón de envío
  const submitButton = document.getElementById("form-submit");

  // Agregar evento al botón
  submitButton.addEventListener("click", async (event) => {
    event.preventDefault(); // Evita la recarga del formulario

    let isValid = true; // Bandera para el estado de validación

    // Obtener los elementos del formulario
    const rucInput = document.getElementById("ruc");
    const nameInput = document.getElementById("contact-name");
    const countryCodeElement = document.getElementById("country-code");
    const countryCode = countryCodeElement.textContent; // Captura el texto dentro del <span>
    const contactNumberInput = document.getElementById("contact-number");
    const errorMessage = document.getElementById("numero_vacio");
    const phoneNumber = contactNumberInput.value.trim();
    const serviceInput = document.getElementById("service");
    const messageInput = document.getElementById("message");

    // Validación de RUC
    if (rucInput.value.trim() === "" || rucInput.value.length !== 11 || !/^\d+$/.test(rucInput.value)) {
      rucInput.classList.add("is-invalid");
      isValid = false;
    } else {
      rucInput.classList.remove("is-invalid");
    }

    // Validación del nombre
    if (nameInput.value.trim() === "") {
      nameInput.classList.add("is-invalid");
      isValid = false;
    } else {
      nameInput.classList.remove("is-invalid");
    }

    // Validación del número de contacto
    if (phoneNumber === "" || isNaN(phoneNumber)) {
      // Mostrar mensaje de error manualmente
      errorMessage.style.display = "block"; // Muestra el mensaje de error
      contactNumberInput.style.borderColor = "red"; // Aplica estilo de error al input
      isValid = false;
    } else {
      // Ocultar mensaje de error si es válido
      errorMessage.style.display = "none";
      contactNumberInput.style.borderColor = ""; // Restaura el borde original
    }

    // Validación del servicio
    if (serviceInput.value === "") {
      serviceInput.classList.add("is-invalid");
      isValid = false;
    } else {
      serviceInput.classList.remove("is-invalid");
    }

    // Validación del mensaje
    if (messageInput.value.trim() === "") {
      messageInput.classList.add("is-invalid");
      isValid = false;
    } else {
      messageInput.classList.remove("is-invalid");
    }

    // Si algún campo no es válido, detener el proceso
    if (!isValid) {
      return;
    }

    // Construir el mensaje
    const formattedMessage = `
    ${messageInput.value}
    Estos son mis datos:
    RUC: ${rucInput.value}
    Nombre de contacto: ${nameInput.value}
    Número de contacto: ${countryCode} ${phoneNumber}
    Servicio solicitado: ${serviceInput.value}
    `;

    // Crear el objeto de datos para enviar
    const formData = {
      to_name: "Consultora Innovación", // El destinatario
      from_name: nameInput.value, // El nombre del remitente
      message: formattedMessage, // Mensaje con los datos del formulario
      reply_to: "", // Responder a este número (o email si aplica)
      from_email: "francogt8000@gmail.com", // Email del remitente
    };

    try {
      const success = await sendEmail(formData);
      if (success) {
        Swal.fire({
          text: "¡El mensaje se envió correctamente!",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "green",
        });
        document.getElementById("contact-form").reset();
        document.querySelectorAll(".is-invalid").forEach((el) => el.classList.remove("is-invalid"));
      }
    } catch (error) {
      Swal.fire({
        text: `Ocurrió un error al enviar el mensaje: ${error.message}. Inténtalo de nuevo.`,
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "black",
      });
    }
  });
});