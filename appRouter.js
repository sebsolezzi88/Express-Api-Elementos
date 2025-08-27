import { Router } from "express";
import { getAllElements, getElementByAtomicNumber, getElementByName, getElementBySymbol, getElementsByGroup, getElementsByPhase, getElementsByType, renderIndex } from "./appController.js";

const router = Router();

router.get('/',renderIndex); //Renderizar página principal
router.get('/api/v1/elements/all',getAllElements); //Obtener todos los elementos
router.get('/api/v1/symbol/:symbol',getElementBySymbol); //Obtener elemento por su simbolo
router.get('/api/v1/name/:name',getElementByName); //Obtener elemento por su nombre
router.get('/api/v1/atomic-number/:number',getElementByAtomicNumber); //Obtener elemento por su número
router.get('/api/v1/phase/:phase',getElementsByPhase); //Obtener elementos por su fase
router.get('/api/v1/type/:type',getElementsByType); //Obtener elementos por su tipo
router.get('/api/v1/group/:group',getElementsByGroup); //Obtener elementos por su grupo


export default router;