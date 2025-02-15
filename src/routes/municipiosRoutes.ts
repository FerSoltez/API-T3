import { Router } from "express";
import municipioController from "../controllers/municipiosController";

const router = Router();

router.post("/", municipioController.createMunicipio);
router.get("/", municipioController.getAllMunicipios);
router.get("/:id", municipioController.getMunicipio);
router.put("/:id", municipioController.updateMunicipio);
router.patch("/:id", municipioController.partialUpdateMunicipio as any);
router.delete("/:id", municipioController.deleteMunicipio);

export default router;
