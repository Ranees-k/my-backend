import express from "express";
import { addMenuItem, getMenuItems } from "../controllers/menuItemController";

const router = express.Router();

router.post("/", addMenuItem);
router.get("/:menu_id", getMenuItems);

export default router;
