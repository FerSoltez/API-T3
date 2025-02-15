"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const municipiosController_1 = __importDefault(require("../controllers/municipiosController"));
const router = (0, express_1.Router)();
router.post("/", municipiosController_1.default.createMunicipio);
router.get("/", municipiosController_1.default.getAllMunicipios);
router.get("/:id", municipiosController_1.default.getMunicipio);
router.put("/:id", municipiosController_1.default.updateMunicipio);
router.patch("/:id", municipiosController_1.default.partialUpdateMunicipio);
router.delete("/:id", municipiosController_1.default.deleteMunicipio);
exports.default = router;
