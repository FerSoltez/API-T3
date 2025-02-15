import { Router } from "express";
import localidadController from "../controllers/localidadesController";

const router = Router();

router.post("/", localidadController.createLocalidad);
router.get("/", localidadController.getAllLocalidades);
router.get("/:id", localidadController.getLocalidad);
router.put("/:id", localidadController.updateLocalidad);
router.patch("/:id", localidadController.partialUpdateLocalidad as any);
router.delete("/:id", localidadController.deleteLocalidad);

export default router;
