import { Router } from "express";
import { getregistrosatenciones,createregistroatencion } from "../controllers/registros_pac.controller.js";


const router = Router();

router.get('/registros_atencion', getregistrosatenciones);
router.post('/registros_atencion',createregistroatencion);

export default router;