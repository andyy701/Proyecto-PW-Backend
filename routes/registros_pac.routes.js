import { Router } from "express";
import { getregistrospacientes,createpaciente } from "../controllers/registros_pac.controller.js";


const router = Router();

router.get('/registros_pac', getregistrospacientes);
router.post('/registros_pac',createpaciente);

export default router;