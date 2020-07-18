import { ApolloServer } from "apollo-server-lambda";
import schema from "./schema";

export const server = new ApolloServer({
  schema,
  playground: true,
});
