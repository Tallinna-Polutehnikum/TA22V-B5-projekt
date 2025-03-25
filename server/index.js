// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
import sequelize from './db.js';
import express from 'express';
import initModels from './models/init-models.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import router from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { createDatabase } from './database/dbmk.js';
import logger from './utils/logger.js';

import errorHandler from './middleware/ErrorHandlingMiddleware.js';

const models = initModels(sequelize);
const PORT = process.env.PORT
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'static')));
app.use(fileUpload({}));
app.use('/api', router);

//the last middleware in chain
app.use(errorHandler);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'express is working' })
})

createDatabase();
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => logger.info(`Server was started on port ${PORT}`));
    } catch (e) {
        logger.error(e)
    }
};

start();