import express from 'express';
const router = express.Router();

router.get('/', (req,res) => {
    res.send('productsss');
})

export default router;