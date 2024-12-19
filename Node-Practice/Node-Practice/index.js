import express from "express";
import { body, validationResult } from 'express-validator';

import { validate } from "./middleware.js";
import { myCOntroller } from "./controller.js";
import productRouter from './router.js'

const app = express();



app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/product' , validateRequestBody, productRouter );
app.use('/inventory', productRouter );
app.use('/product', productRouter );
app.use('/product', productRouter );



// mid-1 --> mid-2 --> mid-3 .... 

const validateRequestBody = [
    body('name').isString().withMessage('Name must be a string'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer'),
];

// app.use(validateRequestBody);

app.use((req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
})





app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});


app.listen(5000, () => {
    console.log("Listening on port 5000");
})