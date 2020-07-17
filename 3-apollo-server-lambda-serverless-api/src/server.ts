import { ApolloServer } from "apollo-server-lambda";
import schema from "./schema";

const server = new ApolloServer({
  schema,
  playground: true,
});

exports.graphqlHandler = server.createHandler();
