import express from "express";
import AuthController from "../controllers/auth.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { validateRequest } from "../middleware/validate.middleware.js";
import { loginBodySchema, registerBodySchema } from "../validation/auth.validation.js";

const router = express.Router();
const controller = new AuthController();

router.post("/register", validateRequest({ body: registerBodySchema }), (req, res) => controller.register(req, res));
router.post("/login", validateRequest({ body: loginBodySchema }), (req, res) => controller.login(req, res));
router.get("/me", requireAuth, (req, res) => controller.me(req, res));
router.post("/logout", requireAuth, (req, res) => controller.logout(req, res));

export default router;
