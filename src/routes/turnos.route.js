const { Router } = require("express");
const turnosController = require("../controllers/API/turnos.controller.js");
const { verifyTokenMiddleware } = require("../middlewares/verifyToken.middleware.js");

const router = Router();

router.get("/:idPaciente", verifyTokenMiddleware,turnosController.getByPaciente);
router.delete("/:idTurno", verifyTokenMiddleware,turnosController.delete);
router.post("/", verifyTokenMiddleware, turnosController.create);

module.exports = router;