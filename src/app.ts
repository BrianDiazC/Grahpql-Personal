// import { env } from "./validations/env";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';
import { typeDefs } from "./schemas/userTypeDefs";
import { resolvers } from "./resolvers";
import './validations/env'
import { sequelize } from './config/database';
import { Context } from "./types/context.type";
import { startServer } from "./server/server";
import { syncModels } from "./models/syncModels";


dotenv.config()

async function main() {


    try {


        //Verificar la conexion a la base de datos
        // await sequelize.authenticate();
        // console.log('Connection has been established successfully.');

        //Primero, sincroniza los modelos
        await syncModels();



        //Iniciar el Servidor 
        const url = await startServer();
        console.log(`Listen at ${url}`)


    } catch (error) {
        console.error('Error al iniciar la aplicacion', error);

    }
}

main();


