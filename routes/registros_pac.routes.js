import { Router } from "express";
import { getregistrospacientes,createregistropaciente } from "../controllers/registros_pac.controller.js";


const router = Router();

router.get('/registros_pac', getregistrospacientes);
router.post('/registros_pac',createregistropaciente);

export default router;