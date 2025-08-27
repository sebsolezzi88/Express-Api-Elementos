import { Router } from "express";
import { getAllElements, getElementBySymbol } from "./appController.js";


const router = Router();

router.get('/api/v1/elements/all',getAllElements); //Obtener todos los elementos
router.get('/api/v1/symbol/:symbol',getElementBySymbol); //Obtener elemento por su simbolo
router.get('/api/v1/atomic-number/:number',getElementBySymbol); //Obtener elemento por su número



export default router;