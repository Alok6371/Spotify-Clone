import express from 'express';
import getAdmin from '../controller/admin.controller.js';

const router = express.Router();

router.get('/', getAdmin);

export default router;
