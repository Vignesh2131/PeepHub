import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { prismaClient } from '../clients/db';
import { User } from "./user"
import cors from 'cors'
import { GraphQLContext } from '../interfaces';
import JWTService from '../services/jwt';
export async function initServer() {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    const graphqlServer = new ApolloServer<GraphQLContext>({
          
        typeDefs: `
        ${User.types}
        type Query{
        ${User.queries}
        }
        `,
        resolvers: {
            Query: {
                ...User.resolvers.queries,
            },
        }
    });
    //TO get data - query
    //to send data - mutation
    await graphqlServer.start();

    app.use("/graphql", expressMiddleware(graphqlServer, {
        context: async ({ req, res }) => {
            return {
                user: req.headers.authorization
                    ? JWTService.decodeToken(req.headers.authorization.split('bearer ')[1])
                    : undefined,
            };
        },
    })
    );
    return app;
}
