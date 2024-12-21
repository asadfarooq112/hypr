import fs from 'fs/promises'; //we dont need callbacks in readFile if we use fs/promises. now fs functions return promises


// File Reader (we use await so to make sure that req is sent to the next middle ware or controller only when file reading is done)
export const fileReaderMiddleware = async (req,res,next) => {
    
    try {

    const jsonData = await fs.readFile('./expressStatic/BJ_files/json_files/sale-data-based-on-design.json', 'utf8');
    req.jsonData = jsonData;
    next();

    }

    catch(err) {
        console.log(`Error in chatMiddleware: ${err}`);
        res.send('Error');
    }

}