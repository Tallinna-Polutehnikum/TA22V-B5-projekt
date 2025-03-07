import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

export async function createDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

    await connection.execute(`CREATE DATABASE IF NOT EXISTS apollo CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;`);

    console.log('DB succsesfully created!');
  } catch (error) {
    console.error('Error due DB creation:', error);
  }
}
