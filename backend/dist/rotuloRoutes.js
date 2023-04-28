"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const rotuloController_1 = require("./controller/rotuloController");
const router = express_1.default.Router();
exports.router = router;
// Routes for Rotulo entity
router.get('/rotulos', rotuloController_1.rotuloController.getAll);
router.get('/rotulos/:id', rotuloController_1.rotuloController.getById);
router.post('/rotulos', rotuloController_1.rotuloController.create);
router.put('/rotulos/:id', rotuloController_1.rotuloController.update);
router.delete('/rotulos/:id', rotuloController_1.rotuloController.delete);
