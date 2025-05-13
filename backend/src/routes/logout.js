import express from "express"
const router = express.Router();
import logoutController from "../controllers/logOutController.js";

router.route("/").post(logoutController.logout);

export default router