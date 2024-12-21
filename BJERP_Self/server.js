// 1) Import all modules
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import {body, validationResult} from 'express-validator';
import OpenAI from 'openai';
import fs from 'fs';
import xlsx from 'xlsx';
import inventoryRouter from './modules/inventory/inventoryRouter.js';
import productionRouter from './modules/production/productionRouter.js';
import salesRouter from './modules/sales/salesRouter.js';
import accountingRouter from './modules/accounting/accountingRouter.js';
import customersRouter from './modules/customers/customersRouter.js';
import { json } from 'stream/consumers';


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





//////////////
console.log('Current working directory:', process.cwd());


fs.readFile('./expressStatic/BJ_files/json_files/sale-data-based-on-design.json', 'utf8', (err,data) => {
console.log(data);
});



////////////



///////chat bullshit
const openai = new OpenAI({apiKey:process.env.OPEN_AI_KEY});

const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
        {
            role: 'developer', 
            content: `You are the Digital Super Intelligence of the company Belgian Jewels. Answer any business questions based on the json data: \n
            which I actually converted from excel file using xlsx npm and giving you as a prompt. This is the JSON: sdfg } `
        },

        {
            role: 'user',
            content: 'what is the average sale value for our business'
        }
    ]
});



console.log(completion.choices[0].message);
///

// 4) Register Routes
app.get('/', (req,res) => {
    res.render('home.ejs');
});

app.use('/inventory', inventoryRouter);
app.use('/production', productionRouter);
app.use('/sales', salesRouter);
app.use('/accounting', accountingRouter);
app.use('/customers', customersRouter);

app.post('/chatbot', (req,res) => {
    const promptText = req.body.prompt;
    res.json({'getit?:': 'yess', 'reqBODYis:': promptText});
});


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


