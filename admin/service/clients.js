const listaClientes = () => {
  return fetch("http://localhost:3000/profile").then((response) => {
    return response.json();
  });
};
const addClient = (nome, email) =>
  fetch("http://localhost:3000/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((response) => {
    return response.body();
  });

const deleteClient = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  });
};

const updateClient = (nome, email, id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((resposta) => {
    resposta.json();
  });
};

const detailClient = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`).then((response) =>
    response.json()
  );
};

export const clients = {
  listaClientes,
  addClient,
  deleteClient,
  updateClient,
  detailClient,
};
