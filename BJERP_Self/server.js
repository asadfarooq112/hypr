// 1) Import all modules
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import {body, validationResult} from 'express-validator';
dotenv.config();


// 2) Create server
const app = express()


// 3) Define Global Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('expressStatic'));

app.use(helmet());
app.use(morgan('combined'));


// 4) Register Routes
app.get('/', (req,res) => {
    console.log('home');
    res.send('asfdsaf');
});





// 5) Define Error Handling Middlewares




// 6) 404 Error Middleware which gets triggered when the request is not caught by anything above
app.use((res,req) => {
    res.status(404).send('Not Found 404');
})

// 7) Server Start
app.listen(process.env.PORT, () => { console.log(`Server running on PORT ${process.env.PORT}`)});


