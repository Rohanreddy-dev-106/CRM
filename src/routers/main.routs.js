import express from "express";
import MainControllers from "../controllers/main.controller.js";

const router = express.Router();
const controller = new MainControllers();

router.get("/cards", (req, res, next) => controller.getAllCards(req, res, next));
router.get("/cards/:id", (req, res, next) => controller.getCardById(req, res, next));
router.post("/cards", (req, res, next) => controller.createCard(req, res, next));
router.patch("/cards/:id", (req, res, next) => controller.updateCard(req, res, next));
router.delete("/cards/:id", (req, res, next) => controller.deleteCard(req, res, next));

router.post("/cards/:cardId/notes", (req, res, next) => controller.addNote(req, res, next));
router.get("/cards/:cardId/notes", (req, res, next) => controller.getNotesByCard(req, res, next));

router.get("/cards/:cardId/checklist", (req, res, next) => controller.getChecklistByCard(req, res, next));
router.patch("/checklist/:id", (req, res, next) => controller.updateChecklistStatus(req, res, next));

export default router;