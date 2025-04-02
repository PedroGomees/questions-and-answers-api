import sequelize, { Sequelize } from 'sequelize'
import dotenv from 'dotenv';
import path from 'path'
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../database/.env") });

const db = new Sequelize(
    process.env.DATABASE,   // Nome do banco
    process.env.DATABASE_USER,  // Usuário
    process.env.PASSWORD,  // Senha
    {
        host: process.env.DATABASE_HOST || 'localhost',
        dialect: 'mysql',
       
    }
);
export default db;