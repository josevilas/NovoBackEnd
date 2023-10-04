const conn = require("../db/conn");

const read = (request, response) => {
  conn("listafone")
    .select()
    .then((listafone) => {
      response.json(listafone);
    });
};

const create = (request, response) => {
  const nome = request.body.nome;
  if (!nome) {
    return response.status(400).json({
      error: "Nome da tarefa não fornecido",
    });
  }

  conn("listafone")
    .insert({ nome: nome })
    .then((tlistafone) => {
      response.json(tarefa);
    })
    .catch((error) => {
      response.status(500).json({
        error: "Erro ao inserir a tarefa no banco de dados",
      });
    });
};

const update = (request, response) => {
  const nome = request.body.nome;
  const id = Number(request.params.id);

  if (!nome) {
    return response.status(400).json({
      error: "Nome da tarefa não fornecido",
    });
  }
  conn("listafone")
    .update({ nome: nome })
    .where({ id: id })
    .then((_) => {
      response.status(200).json({ msg: "Tarefa atualizada com sucesso!" });
    })
    .catch((error) => {
      response.status(500).json({
        error: "Erro ao inserir a tarefa no banco de dados",
      });
    }); 
};

const readById = (request, response) => {
  const id = Number(request.params.id);
  conn("listafone")
    .select()
    .where({ id: id })
    .then((listafone) => {
      response.status(200).json(tarefa);
    })
    .catch((error) => {
      response.status(500).json({
        error: "Erro ao buscar a tarefa no banco de dados!",
      });
    });
};

const del = (request, response) => {
    const id = Number(request.params.id);
    conn("listafone")
      .del()
      .where({ id: id })
      .then((_) => {
        response.status(200).json({ msg: "A tarefa foi excluida!" });
      })
      .catch((error) => {
        response.status(500).json({
          error: "Erro ao excluir a tarefa no banco de dados!",
        });
      });
  }

module.exports = { read, create, update, readById, del };
