const router = require("express").Router();

const tarefaController = require("../controller/TarefasController")

router.get("", tarefaController.read);

router.post("", tarefaController.create);

router.put("/:id",  tarefaController.update);

router.get("/:id", tarefaController.readById )

router.delete("/:id", tarefaController.del );


module.exports = router;