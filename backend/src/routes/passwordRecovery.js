import express from "express";
import passwordRecoveryController from "../controllers/passwordRecoveryController.js";

const router = express.Router();

router.route("/verifyCode").post(passwordRecoveryController.verifyCode);
router.route("/requestCode").post(passwordRecoveryController.requestCode);
router.route("/newPassword").post(passwordRecoveryController.newPassword)

export default router;