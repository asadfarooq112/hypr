// 1) Import all modules
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import {body, validationResult} from 'express-validator';
import fs from 'fs';
import xlsx from 'xlsx';
import inventoryRouter from './modules/inventory/inventoryRouter.js';
import productionRouter from './modules/production/productionRouter.js';
import salesRouter from './modules/sales/salesRouter.js';
import accountingRouter from './modules/accounting/accountingRouter.js';
import customersRouter from './modules/customers/customersRouter.js';
import { fileReaderMiddleware } from './modules/chat/chatMiddleware.js';
import { openAIReponseController } from './modules/chat/chatController.js';

dotenv.config();


// 2) Create server
const app = express()
app.set('view engine', 'ejs');



// 3) Define Global Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('expressStatic'));

app.use(helmet());
app.use(morgan('combined'));




// 4) Register Routes
app.get('/', (req,res) => {
    res.render('home.ejs');
});

app.use('/inventory', inventoryRouter);
app.use('/production', productionRouter);
app.use('/sales', salesRouter);
app.use('/accounting', accountingRouter);
app.use('/customers', customersRouter);

app.post('/chatbot', fileReaderMiddleware, openAIReponseController);


// 6) 404 Error Middleware which gets triggered when the request is not caught by anything above
app.use((req,res) => {
    res.status(404).send('Not Found 404');
})



// 7) Error Handling Middleware (that catches errors sent by some middleware by next(err) )
app.use((err, req, res, next) => {
    console.log(err.message);
})




// 8) Server Start
app.listen(process.env.PORT || 3100 , () => { console.log(`Server running on PORT ${process.env.PORT}`)});


