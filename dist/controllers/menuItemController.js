"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuItems = exports.addMenuItem = void 0;
const menuItemModel_1 = require("../models/menuItemModel");
/**
 * Adds a new menu item to a specific menu.
 * @param req Express Request Object containing menu item details in `req.body`
 * @param res Express Response Object for sending back API response
 */
const addMenuItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { menu_id, name, description, price } = req.body;
        if (!menu_id || !name || !price)
            res.status(400).json({ message: "All fields are required" });
        const newItem = yield (0, menuItemModel_1.createMenuItem)(menu_id, name, description, price);
        res.status(201).json(newItem);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.addMenuItem = addMenuItem;
/**
 * Retrieves all menu items for a specific menu.
 * @param req Express Request Object containing `menu_id` in `req.params`
 * @param res Express Response Object for sending back menu items
 */
const getMenuItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu_id = parseInt(req.params.menu_id);
        if (!menu_id)
            res.status(400).json({ message: "Menu ID is required" });
        const items = yield (0, menuItemModel_1.getMenuItemsByMenuId)(menu_id);
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getMenuItems = getMenuItems;
