import { Request, Response } from "express";
import { createMenu, getAllMenus } from "../models/menuModel";
/**
 * Adds a new menu item to the database.Not used in the project
 * @param req 
 * @param res 
 */
export const addMenu = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    if (!name) res.status(400).json({ message: "Menu name is required" });

    const newMenu = await createMenu(name, description);
     res.status(201).json(newMenu);
  } catch (error) {
     res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Get all menus from the database
 * @param _req Express Request Object (not used)
 * @param res Express Response Object
 */
export const getMenus = async (_req: Request, res: Response) => {
  try {
    const menus = await getAllMenus();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: error});
  }
};
