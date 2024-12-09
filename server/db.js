import { Sequelize } from 'sequelize';

import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.env') });


const sequelize = new Sequelize(
    process.env.DB_NAME || "apollo",
    process.env.DB_USER || "remote",
    process.env.DB_PASSWORD,
    {
        dialect: 'mysql',
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 3306
    }
);

export default sequelize;