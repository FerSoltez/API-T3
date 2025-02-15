"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const localidadesController_1 = __importDefault(require("../controllers/localidadesController"));
const router = (0, express_1.Router)();
router.post("/localidades", localidadesController_1.default.createLocalidad);
router.get("/localidades", localidadesController_1.default.getAllLocalidades);
router.get("/localidades/:id", localidadesController_1.default.getLocalidad);
router.put("/localidades/:id", localidadesController_1.default.updateLocalidad);
router.patch("/localidades/:id", localidadesController_1.default.partialUpdateLocalidad);
router.delete("/localidades/:id", localidadesController_1.default.deleteLocalidad);
exports.default = router;
