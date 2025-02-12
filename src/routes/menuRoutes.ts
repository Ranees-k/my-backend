import express from "express";
import { addMenu, getMenus } from "../controllers/menuController";

const router = express.Router();

router.post("/", addMenu);
router.get("/", getMenus);

export default router;
