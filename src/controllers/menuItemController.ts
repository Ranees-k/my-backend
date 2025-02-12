import { Request, Response } from "express";
import { createMenuItem, getMenuItemsByMenuId } from "../models/menuItemModel";
/**
 * Adds a new menu item to a specific menu.
 * @param req Express Request Object containing menu item details in `req.body`
 * @param res Express Response Object for sending back API response
 */
export const addMenuItem = async (req: Request, res: Response) => {
  try {
    const { menu_id, name, description, price } = req.body;
    if (!menu_id || !name || !price) res.status(400).json({ message: "All fields are required" });

    const newItem = await createMenuItem(menu_id, name, description, price);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Retrieves all menu items for a specific menu.
 * @param req Express Request Object containing `menu_id` in `req.params`
 * @param res Express Response Object for sending back menu items
 */
export const getMenuItems = async (req: Request, res: Response) => {
  try {
    const menu_id = parseInt(req.params.menu_id);
    if (!menu_id) res.status(400).json({ message: "Menu ID is required" });

    const items = await getMenuItemsByMenuId(menu_id);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
