import express from 'express';
import getAdmin from '../controller/admin.controller.js';
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', protectRoute,requireAdmin,createSong);


export default router;
