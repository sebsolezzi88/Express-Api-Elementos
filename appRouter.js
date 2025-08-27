import { Router } from "express";
import { getAllElements, getElementByAtomicNumber, getElementBySymbol, getElementsByPhse } from "./appController.js";


const router = Router();

router.get('/api/v1/elements/all',getAllElements); //Obtener todos los elementos
router.get('/api/v1/symbol/:symbol',getElementBySymbol); //Obtener elemento por su simbolo
router.get('/api/v1/atomic-number/:number',getElementByAtomicNumber); //Obtener elemento por su número
router.get('/api/v1/phase/:phase',getElementsByPhse); //Obtener elementos por su fase




export default router;