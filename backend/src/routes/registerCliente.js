import express from "express";
import registerClienteController from "../controllers/registerClienteController.js";

const router = express.Router();

router.route("/").post(registerClienteController.register);
router.route("/verifyCodeMail").post(registerClienteController.verifyCodeEmail);

export default router;
