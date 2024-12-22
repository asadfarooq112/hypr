import express from 'express';
const router = express.Router();



router.get('/standard', (req,res) => {
    res.render('./inventory/standardInventory.ejs');
})



export default router;