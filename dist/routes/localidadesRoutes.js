"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const localidadesController_1 = __importDefault(require("../controllers/localidadesController"));
const router = (0, express_1.Router)();
router.post("/", localidadesController_1.default.createLocalidad);
router.get("/", localidadesController_1.default.getAllLocalidades);
router.get("/:id", localidadesController_1.default.getLocalidad);
router.put("/:id", localidadesController_1.default.updateLocalidad);
router.patch("/:id", localidadesController_1.default.partialUpdateLocalidad);
router.delete("/:id", localidadesController_1.default.deleteLocalidad);
exports.default = router;
