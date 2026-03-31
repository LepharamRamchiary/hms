import { Router } from "express";
import { patientRegistartion } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(patientRegistartion);

export default router;
