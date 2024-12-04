// Función para animar una sección con efectos más suaves y variados
function animateSection(sectionId, index) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  // Configuración inicial
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Aplicamos un retraso escalonado basado en el índice
        const delay = index * 100; // 100ms de retraso entre cada sección
        setTimeout(() => {
          requestAnimationFrame(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
          });
        }, delay);
        observer.unobserve(section);
      }
    });
  }, { 
    threshold: 0.15, 
    rootMargin: "0px 0px -10% 0px" // Inicia la animación un poco antes
  });

  observer.observe(section);
}

// Aplicar animaciones con efecto de cascada
document.addEventListener("DOMContentLoaded", () => {
  // Animar el título y el párrafo por separado
  const titulo_inicial = document.getElementById("titulo_inicial");
  const parrafo_inicial = document.getElementById("parrafo_inicial");
  const titulo_nosotros = document.getElementById("titulo_nosotros");
  const parrafo_nosotros = document.getElementById("parrafo_nosotros");
  const imagen_nosotros = document.getElementById("imagen_nosotros");
  const subtitulo_nosotros = document.getElementById("subtitulo_nosotros");
  const titulo_servicios = document.getElementById("titulo_servicios");
  const titulo_clientes = document.getElementById("titulo_clientes");
  const titulo_mision = document.getElementById("titulo_mision");
  const parrafo_mision = document.getElementById("parrafo_mision");
  const titulo_vision = document.getElementById("titulo_vision");
  const parrafo_vision = document.getElementById("parrafo_vision");
  const titulo_valores = document.getElementById("titulo_valores");
  const parrafo_valores = document.getElementById("parrafo_valores");
  const guion1_valores = document.getElementById("guion1_valores");
  const guion2_valores = document.getElementById("guion2_valores");
  const guion3_valores = document.getElementById("guion3_valores");
  const guion4_valores = document.getElementById("guion4_valores");
  const item1_valores = document.getElementById("item1_valores");
  const item2_valores = document.getElementById("item2_valores");
  const item3_valores = document.getElementById("item3_valores");
  const item4_valores = document.getElementById("item4_valores");

  if (titulo_inicial) {
    animateSection("titulo_inicial", 5); // Índice 5 para el título
  }

  if (parrafo_inicial) {
    animateSection("parrafo_inicial", 6); // Índice 6 para el párrafo, con retraso escalonado
  }

  if (titulo_nosotros) {
    animateSection("titulo_nosotros", 7); // Índice 7 para el título
  }

  if (parrafo_nosotros) {
    animateSection("parrafo_nosotros", 8); // Índice 8 para el parrafo
  }

  if (imagen_nosotros) {
    animateSection("imagen_nosotros", 8); // Índice 8 para la imagen
  }

  if (subtitulo_nosotros) {
    animateSection("subtitulo_nosotros", 8); // Índice 8 para la imagen
  }

  if (titulo_servicios) {
    animateSection("titulo_servicios", 7); // Índice 7 para el título
  }

  if (titulo_clientes) {
    animateSection("titulo_clientes", 7); // Índice 7 para el título
  }

  if (titulo_mision) {
    animateSection("titulo_mision", 1); // Índice 1 para el título de misión
  }

  if (parrafo_mision) {
      animateSection("parrafo_mision", 2); // Índice 2 para el párrafo de misión
  }

  if (titulo_vision) {
      animateSection("titulo_vision", 3); // Índice 3 para el título de visión
  }

  if (parrafo_vision) {
      animateSection("parrafo_vision", 4); // Índice 4 para el párrafo de visión
  }

  if (titulo_valores) {
      animateSection("titulo_valores", 5); // Índice 5 para el título de valores
  }

  if (parrafo_valores) {
      animateSection("parrafo_valores", 6); // Índice 6 para el párrafo de valores
  }

  if (guion1_valores) {
    animateSection("guion1_valores", 8); // Índice 8 para el primer ítem de valores
  }

  if (item1_valores) {
      animateSection("item1_valores", 8); // Índice 8 para el primer ítem de valores
  }

  if (guion2_valores) {
    animateSection("guion2_valores", 8); // Índice 8 para el primer ítem de valores
  }

  if (item2_valores) {
      animateSection("item2_valores", 9); // Índice 9 para el segundo ítem de valores
  }

  if (guion3_valores) {
    animateSection("guion3_valores", 8); // Índice 8 para el primer ítem de valores
  }


  if (item3_valores) {
      animateSection("item3_valores", 10); // Índice 10 para el tercer ítem de valores
  }

  if (guion4_valores) {
    animateSection("guion4_valores", 8); // Índice 8 para el primer ítem de valores
  }

  if (item4_valores) {
      animateSection("item4_valores", 11); // Índice 11 para el cuarto ítem de valores
  }

  // Animar las demás secciones
  const sections = [
    "Introduccion",
    "Consultoria",
    "Capacitacion",
    "Implementacion",
    "Clientes",
  ];

  sections.forEach((sectionId, index) => animateSection(sectionId, index + 2)); // Comienza después del título y párrafo
});