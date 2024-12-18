import {config} from 'dotenv';

console.log(config());

import expressServer from 'express';

const app = expressServer();

// app.use
// app.get
// app.post
// app.put
// app.router
// app.delete










app.listen(process.env.PORT || 3700,  () => {console.log(`Server is listening on port http://localhost:${process.env.PORT}`)});

