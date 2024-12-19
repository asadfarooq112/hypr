import express from 'express';
import {validate} from './middleware.js'

const productRouter = express.Router();

// res.status(202).send
// res.status(202).send
// res.status(202).render

// req.body
// req.params
// req.query
// req.headers (used for managing request headers)

// In GET we send data with req.query
// IN PUT (used for update), POST we send data using req.body
// in DELTE usually req.body not needed but we can use


productRouter.use(validate);
productRouter.get('/p1', (req, res, next) => {
    console.log(req.asad);
    res.send('prod1asfdasfadsfasdfsad');
})

export default productRouter;


// if you want to apply a middleare forexample authentication on all routes of products, the
// you should use app.use(middleare) on top of the routers.js above all other end poitn routes

// here the productRouter.use check all requests, but ONLY send response if relevant /p1 or
// relavent ath that we have routed (API endpoint) is defined. This means the query parameters
// that we mentioned in middelware.js should be passed as domain.com/product/p1?name=jawad

// if we only do domain.com/product?name=jawad, then the middle ware will run ofcourse and will
// run the middleare code, but the end point will not be availbe so we'll get error