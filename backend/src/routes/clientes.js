import express from "express";
import clientesController from "../controllers/clientesController.js";

const router = express.Router();

router.route("/")
.get(clientesController.getClientes)
.post(clientesController.insertClientes)

router.route("/:id")
.put(clientesController.updateClientes)
.delete(clientesController.deleteClientes)

export default router;