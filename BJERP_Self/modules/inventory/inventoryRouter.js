import express from 'express';
import { standardInventoryShow } from './inventoryController.js';

const router = express.Router();


router.get('/standard', standardInventoryShow);

export default router;