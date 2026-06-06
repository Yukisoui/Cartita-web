// Confetis

//
// 1. Configuracion inicial
window.oncontextmenu = function () {
  return false;
};

const canvasConfeti = document.getElementById("canvas1"); //Lienzo
const ctxConfeti = canvasConfeti.getContext("2d"); // Funciones

let ancho = (canvasConfeti.width = window.innerWidth);
let alto = (canvasConfeti.height = window.innerHeight);

let confetis = [];

const coloresConfeti = [
  "rgba(255, 155, 170, 1)",
  "rgba(224, 130, 144, 1)",
  "rgba(251, 208, 214, 1)",
  "rgba(248, 93, 116, 1)",
  "rgba(246, 121, 139, 1)",
  "rgba(238, 174, 184, 1)",
  "rgba(255, 255, 255, 1)",
];

//
// 2. Crear confeti
//
function crearConfeti() {
  const cantidad = 100;
  for (let i = 0; i < cantidad; i++) {
    confetis.push({
      x: Math.random() * ancho, // Posicion horizontal aleatoria
      y: Math.random() * -alto, // Posición vertical aleatoria (Desde arriba por el negativo)
      r: Math.random() * 5 + 2, // Radio aleatorio (2 y 7 Pixeles)
      color: coloresConfeti[Math.floor(Math.random() * coloresConfeti.length)],
      velocidadY: Math.random() * 2 + 1, // Velocidad aleatoria (1 y 3 pixeles/frame)
    });
  }
}

//
// 3. Dibujar y mover confeti
//
function animarConfeti() {
  ctxConfeti.fillStyle = "rgba(255, 182, 193, 1)"; // Fondo rosa pastel
  ctxConfeti.fillRect(0, 0, ancho, alto);

  for (let i = 0; i < confetis.length; i++) {
    let confetiActual = confetis[i];

    ctxConfeti.beginPath(); // Empezamos una nueva figura
    ctxConfeti.arc(
      confetiActual.x,
      confetiActual.y,
      confetiActual.r,
      0,
      Math.PI * 2
    ); // Dibujar circulo
    ctxConfeti.fillStyle = confetiActual.color; // Color
    ctxConfeti.fill(); // Rellenamos el circulo

    // Movimiento
    confetiActual.y += confetiActual.velocidadY;

    // Si termina de caer, aparece arriba otra vez
    if (confetiActual.y > alto) {
      confetiActual.y = -10;
      confetiActual.x = Math.random() * ancho;
    }
  }

  // Animacion continua (bucle)
  requestAnimationFrame(animarConfeti);
}

crearConfeti();

// Esperar 1 segundo antes de iniciar el confeti
setTimeout(() => {
  animarConfeti();
}, 1500);