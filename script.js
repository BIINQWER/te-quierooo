document.addEventListener("DOMContentLoaded", function () {
  var mensajeDiv = document.getElementById("mensaje");
  
  // Mostrar mensaje "Te Quiero"
  mensajeDiv.textContent = "Te Quiero";
  
  // Titilar el mensaje
  var interval = setInterval(function () {
    if (mensajeDiv.style.visibility === "hidden") {
      mensajeDiv.style.visibility = "visible";
    } else {
      mensajeDiv.style.visibility = "hidden";
    }
  }, 500); // Cambia este valor para ajustar la velocidad del titileo
  
  // Mostrar mensaje en diferentes idiomas
  var mensajes = [
    "Te Quiero", // Español
    "I Love You", // Inglés
    "Je t'aime", // Francés
    "Ich liebe dich", // Alemán
    "Ti amo", // Italiano
    "Eu te amo", // Portugués
    "Ik hou van jou", // Holandés
    "Я тебя люблю", // Ruso
    "愛してる", // Japonés
    "사랑해", // Coreano
    "我爱你", // Mandarín
    "أحبك", // Árabe
    "मैं तुमसे प्यार करता/करती हूँ", // Hindi
    "Nakupenda", // Swahili
    "Jag älskar dig", // Sueco
  ];
  
  var mensajeIndex = Math.floor(Math.random() * mensajes.length);
  mensajeDiv.textContent = mensajes[mensajeIndex];
  
  // Mostrar y ocultar menú de hamburguesa
  var menuToggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function () {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });
  
  // Mostrar y ocultar submenú
  var submenuToggle = document.querySelectorAll(".submenu-toggle");

  submenuToggle.forEach(function (item) {
    item.addEventListener("click", function () {
      var submenu = this.querySelector(".submenu");
      if (submenu.style.display === "block") {
        submenu.style.display = "none";
      } else {
        submenu.style.display = "block";
      }
    });
  });
});
