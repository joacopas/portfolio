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
  about.innerHTML = "";
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
