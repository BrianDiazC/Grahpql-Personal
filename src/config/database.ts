import { Sequelize } from "sequelize";
import dotenv from 'dotenv'


dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: console.log,
        port: process.env.DB_PORT
    })