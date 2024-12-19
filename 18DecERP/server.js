import expressServer from './node_modules/express/index.js';
// If a folder contains index.js, when we import it, it automaically throw the export to us
import dotenv from './node_modules/dotenv/lib/main.js';
import http from 'http';


console.log(dotenv.config());
const app = expressServer();


// First create server app
// Config Server Error Handling
// Then use Middlewares
// Then register routers
// Define Error Middlewares
// Run server


// Sometimes we can create HTTP server from HTTP module helps interact with header, footer 


// for low level server magement, we can use http

const httpServerApp = http.createServer(app);

httpServerApp.listen(process.env.PORT);

httpServerApp.setTimeout(5000);

// You can create and emit events. For http server use server.on('defaultValues Use' , ()=> {   }).  to emit, use server.emit. 
// // We can also use cutom event values and also default like 'listening' 'error' etc
// For express events, use app.on to create app.on('anyName not defaults', () => {  }).   to emit use app.emit
// Default events get emmited by themselves (custom events you must use app.emit or server.emit)







httpServerApp.on('error', (err) => {console.log(`THe error is ${err.code}`)});
httpServerApp.on('listening', () => {console.log(`Running on port ${process.env.PORT}`)});
// You can also listen using app
// You can create events anywhere in code top or bottom, they only run when emitted. But AFTER creating server

