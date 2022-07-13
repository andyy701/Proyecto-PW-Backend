import { Router } from "express";
import { getRegistrosPac,createRegistroPac } from "../controllers/registros_pac.controller.js";


const router = Router();

router.get('/registros_pac', getRegistrosPac);
router.post('/registros_pac',createRegistroPac);

export default router;