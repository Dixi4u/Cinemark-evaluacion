import express from "express";
import empleadosController from "../controllers/empleadosController.js";

const router = express.Router();

router.route("/")
.get(empleadosController.getEmpleados)
.post(empleadosController.insertEmpleados)

router.route("/:id")
.put(empleadosController.updateEmpleados)
.delete(empleadosController.deleteEmpleados)

export default router;