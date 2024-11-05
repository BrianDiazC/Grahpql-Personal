import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { Context } from "../types/context.type";
import { sequelize } from '../config/database';
import { resolvers } from '../resolvers/index';
import { typeDefs } from '../schemas/userTypeDefs';

export const startServer = async (): Promise<string> => {

    const server = new ApolloServer<Context>({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context: async () => {
            return {
                sequelize,
            };
        },
    });

    return url;

}