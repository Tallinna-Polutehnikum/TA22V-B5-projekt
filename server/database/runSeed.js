import sequelize from '../db.js'; // Путь к файлу конфигурации Sequelize
import initModels from '../models/init-models.js'; // Путь к файлу с моделями

import { seed } from './seed.js';

async function runSeed() {
    try {
        // 1. connect to db
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // 2. models initialization
        const models = initModels(sequelize);

        // // 3. очистка базы данных
        // await sequelize.drop(); // Удаляет все таблицы

        // const sql = fs.readFileSync('./database/Apollo1_2024_11_23.sql', 'utf8'); // Читаем SQL-скрипт из файла
        // //console.log('console' + sql);
        // await sequelize.query(sql);

        // 3. sync models with DB (optionsl)
        await sequelize.sync(); 

        // 3. transfer models to func seed
        await seed({ entities: models, db: sequelize, sql: sequelize.literal });

        console.log('Seed completed successfully');
    } catch (error) {
        console.error('Seed failed', error);
    } finally {
        // Closing DB connection
        await sequelize.close();
        console.log('Connection closed.');
    }
}

runSeed();
