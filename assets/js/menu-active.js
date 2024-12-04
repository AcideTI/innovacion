// Selecciona específicamente las <li> dentro del menú
const menuItems = document.querySelectorAll("#menu li");

// Agrega el evento 'click' a cada elemento <li>
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    // Remueve el color de todos los <li> del menú
    menuItems.forEach(i => i.style.color = "");
    // Aplica el color solo al elemento <li> clickeado
    item.style.color = "red";
  });
});