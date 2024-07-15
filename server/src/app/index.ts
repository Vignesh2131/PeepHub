import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
export async function initServer() {
    const app = express();
    app.use(bodyParser.json());
    const graphqlServer = new ApolloServer({
          
        typeDefs: `
        type Query{
        sayHello:String
        sayMyName(name:String):String
        }
        `,
        resolvers: {
            Query: {
                sayHello: () => `Hello from GraphQL`,
                sayMyName:(parent:any,{name}:{name:string})=>null,
            },
        }
});
    //TO get data - query
    //to send data - mutation
    await graphqlServer.start();

    app.use("/graphql", expressMiddleware(graphqlServer))
    
    return app;
}

