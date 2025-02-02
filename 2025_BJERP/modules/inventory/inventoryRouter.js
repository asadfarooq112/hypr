import express from 'express';
const router = express.Router();
import { sampleObj } from './inventoryMiddleware.js';

router.get('/', (req,res) => {
    res.render('inventory.ejs', {sampleObj});
}

)

export default router;