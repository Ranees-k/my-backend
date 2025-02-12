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
exports.getMenus = exports.addMenu = void 0;
const menuModel_1 = require("../models/menuModel");
/**
 * Adds a new menu item to the database.Not used in the project
 * @param req
 * @param res
 */
const addMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.body;
        if (!name)
            res.status(400).json({ message: "Menu name is required" });
        const newMenu = yield (0, menuModel_1.createMenu)(name, description);
        res.status(201).json(newMenu);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.addMenu = addMenu;
/**
 * Get all menus from the database
 * @param _req Express Request Object (not used)
 * @param res Express Response Object
 */
const getMenus = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menus = yield (0, menuModel_1.getAllMenus)();
        res.json(menus);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getMenus = getMenus;
