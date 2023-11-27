const btn = document.getElementById('btn')
const nav = document.getElementById('nav')

btn.addEventListener("click", () =>{
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});


// Acción al hacer clic en el botón
document.getElementById("btn1").onclick = function() {
    // Aquí puedes añadir la lógica que quieras que ocurra al presionar el botón
    // Por ejemplo, redirigir a una página de donación:
    window.location.href = "https://www.bapuebla.org.mx/especie";
  }

  document.getElementById("btn2").onclick = function() {
    // Aquí puedes añadir la lógica que quieras que ocurra al presionar el botón
    // Por ejemplo, redirigir a una página de donación:
    window.location.href = "https://apt.org.mx/contacto/donativos-en-especie/";
  }

  document.getElementById("btn3").onclick = function() {
    // Aquí puedes añadir la lógica que quieras que ocurra al presionar el botón
    // Por ejemplo, redirigir a una página de donación:
    window.location.href = "https://casabetti.org.mx/donaciones";
  }

  document.getElementById("btn4").onclick = function() {
    // Aquí puedes añadir la lógica que quieras que ocurra al presionar el botón
    // Por ejemplo, redirigir a una página de donación:
    window.location.href = "https://www.donadoresaltruistas.org/cosmetic-dentistry#DONAR";
  }
  