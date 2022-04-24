import { clients } from "../service/clients.js";

const list = (nome, email, id) => {
  const template = document.createElement("tr");

  const content = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button" style="cursor:pointer;">Excluir</button></li>
        </ul>
    </td>`;

  template.dataset.id = id;
  template.innerHTML = content;
  return template;
};

const tabela = document.querySelector("[data-tabela]");

const showClient = async () => {
  const data = await clients.listaClientes();

  data.forEach((element) => {
    console.log(element);
    tabela.appendChild(list(element.nome, element.email, element.id));
  });
};
showClient();

const removeClient = () => {
  window.addEventListener("click", async (element) => {
    if (element.target.className === "botao-simples botao-simples--excluir") {
      const lineClient = element.target.closest("[data-id]");
      const id = lineClient.dataset.id;
      await clients.deleteClient(id);
      lineClient.remove(id);
    }
  });
};

removeClient();
