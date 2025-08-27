import { Router } from "express";
import { getAllElements, getElementBySymbol } from "./appController.js";


const router = Router();

router.get('/api/v1/elements/all',getAllElements); //Obtener todos los elementos
router.get('/api/v1/symbol/:symbol',getElementBySymbol); //Obtener elemento por su simbolo


export default router;