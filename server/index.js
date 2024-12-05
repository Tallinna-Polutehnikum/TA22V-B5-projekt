// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
import sequelize from './db.js';
import express from 'express';  
import initModels from './models/init-models.js';

const models = initModels(sequelize);
const PORT = process.env.PORT;
const app = express();

const start = async () => {
    try
    {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server was started on port ${PORT}`));        
    } catch (e){
        console.log(e)
    }
};

start();