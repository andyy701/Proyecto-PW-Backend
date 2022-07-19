import { Router } from "express";
import { getregistrosmedicos,createregistromedico } from "../controllers/registros_med.controller.js";


const router = Router();

router.get('/registros_med', getregistrosmedicos);
router.post('/registros_med',createregistromedico);

export default router;