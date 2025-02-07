import { Router } from "express";
import { authCallback } from "../controller/auth.controller.js";

const router = Router();

// Change the method from GET to POST
router.post('/callback', authCallback);

export default router;