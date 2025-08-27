import { Router } from "express";
import { getAllElements } from "./appController.js";


const router = Router();

router.get('/api/v1/elements/all',getAllElements);

export default router;