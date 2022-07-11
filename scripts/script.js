const options = {
  backdrop: true,
  keyboard: true,
  focus: true,
};

const myModal = new bootstrap.Modal(
  document.getElementById("exampleModal"),
  options
);

const about = document.getElementById("text");

$(document).ready(function () {
  myModal.show();
  about.innerHTML =
    "Soy Desarrollador Fornt-End, egresado de Coder House, y actualmente estoy cursando el primer ano de la carrea de Analista de Sisitemas en la Escual Da Vinci. Tambien soy entrenador de categorias Sub-14 y Sub-18 de hockey sobre cesped en el club C.A.S.A. de Padua. Me considero una persona creativa, perseverante. Debido a mi trababjo actual y a que tambien formo parte de un equipo de hockey, trabajo muy bien en equipo.";
});

const skills = document.getElementById("skillsBtn");

// LIGHTBOX --------------

// import Lightbox from "bs5-lightbox";

// const option = {
//   keyboard: true,
//   size: "fullscreen",
// };

// document.querySelectorAll(".my-lightbox-toggle").forEach((el) =>
//   el.addEventListener("click", (e) => {
//     e.preventDefault();
//     const lightbox = new Lightbox(el, option);
//     lightbox.show();
//   })
// );
