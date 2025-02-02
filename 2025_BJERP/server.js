//1) Import All Modules
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import inventoryRouter from './modules/inventory/inventoryRouter.js';


dotenv.config(); 

//2) Create server
const app = express();
app.set('view engine', 'ejs');


//3) Define Global Middlewares
app.use(express.static('expressStatic'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));


//4) Register Routes
app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.use('/inventory', inventoryRouter);




//6) 404 Error Middleware triggered when request not caught by any of above routers (still doesnt catch errors thrown by error handling middleware (containing (err,req,res,next))
app.use((req,res) => {
    res.status(404).render('404.ejs');
})

//7) Error Handling Middleware (catches errors thrown by error handling middleware (err, req, res , next))
app.use( (err, req, res, next) => {
    console.log(err.message);
})



//At End: Server Start
app.listen(process.env.PORT || 2451, () => {console.log(`Running on PORT ${process.env.PORT}`)});