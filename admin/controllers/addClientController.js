import { clients } from "../service/clients.js";
const registrationCompleted =
  "http://localhost:5000/telas/cadastro_concluido.html";

const name = document.querySelector("[data-nome]");
const email = document.querySelector("[data-email]");
const form = document.querySelector("[data-form]");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  clients.addClient(name.value, email.value);

  window.location.href = registrationCompleted;
});
