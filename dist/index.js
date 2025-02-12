"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const menuRoutes_1 = __importDefault(require("./routes/menuRoutes"));
const menuItemRoutes_1 = __importDefault(require("./routes/menuItemRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
// Middleware
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.json());
// Routes
app.use("/api/menus", menuRoutes_1.default);
app.use("/api/menu-items", menuItemRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
