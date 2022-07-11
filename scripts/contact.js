// Contact TOAST--------
let resp = confirm("Acepta las cookies?");

if (resp) {
  const contactForm = document.getElementById("contactForm");

  let datos = document.getElementById("datos");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    console.log(name);
    datos.innerHTML = "nombre " + name + "<br/> email: " + email;
    myModal.show();
  });
}

const options = {
  backdrop: true,
  keyboard: true,
  focus: true,
};

const myModal = new bootstrap.Modal(
  document.getElementById("contactModal"),
  options
);

// ----- TOAST
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}
