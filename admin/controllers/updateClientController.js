import { clients } from "../service/clients.js";

(async () => {
  const UrlWithId = new URL(window.location);

  const id = UrlWithId.searchParams.get("id");

  const inputName = document.querySelector("[data-nome]");
  const inputEmail = document.querySelector("[data-email]");
  const form = document.querySelector("[data-form]");

  const data = await clients.detailClient(id);
  inputName.value = data.nome;
  inputEmail.value = data.email;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log(inputName.value);
    console.log(inputEmail.value);
    await clients.updateClient(inputName.value, inputEmail.value, id);
    window.location.href = "../telas/edicao_concluida.html";
  });
})();
