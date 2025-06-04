const { Router } = require("express");
const router = Router();
const turnosController = require("../controllers/API/turnos.controller.js");
const { verifyTokenMiddleware } = require("../middlewares/verifyToken.middleware.js");


router.get("/:idPaciente",turnosController.getByPaciente);
router.delete("/:idTurno",turnosController.delete);
router.post("/", turnosController.create);

module.exports = router;