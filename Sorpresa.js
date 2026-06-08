// Carta
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

regalo.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

regalos.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
});

// Todo oscuro + soplido + cancion
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");

llama.addEventListener("click", () => {
  soplido.currentTime = 0;
  soplido.play();

  llama.style.animation = "apagar 0.5s forwards"; 

  setTimeout(() => {
    cancion.currentTime = 0;
    cancion.play();
    overlay.classList.add("hidden");
  }, 1000);
});
