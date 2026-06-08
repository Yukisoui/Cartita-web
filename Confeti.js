// Confetis
window.oncontextmenu = function () {
  return false;
};

const canvasConfeti = document.getElementById("canvas1");
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

function crearConfeti() {
  const cantidad = 100;
  for (let i = 0; i < cantidad; i++) {
    confetis.push({
      x: Math.random() * ancho,
      y: Math.random() * -alto, 
      r: Math.random() * 5 + 2, 
      color: coloresConfeti[Math.floor(Math.random() * coloresConfeti.length)],
      velocidadY: Math.random() * 2 + 1, 
    });
  }
}

function animarConfeti() {
  ctxConfeti.fillStyle = "rgba(255, 182, 193, 1)"; 
  ctxConfeti.fillRect(0, 0, ancho, alto);

  for (let i = 0; i < confetis.length; i++) {
    let confetiActual = confetis[i];

    ctxConfeti.beginPath(); 
    ctxConfeti.arc(
      confetiActual.x,
      confetiActual.y,
      confetiActual.r,
      0,
      Math.PI * 2
    ); 
    ctxConfeti.fillStyle = confetiActual.color;
    ctxConfeti.fill();
    
    confetiActual.y += confetiActual.velocidadY;


    if (confetiActual.y > alto) {
      confetiActual.y = -10;
      confetiActual.x = Math.random() * ancho;
    }
  }


  requestAnimationFrame(animarConfeti);
}

crearConfeti();

setTimeout(() => {
  animarConfeti();
}, 1500);
