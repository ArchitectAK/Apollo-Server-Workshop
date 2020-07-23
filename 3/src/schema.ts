import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";
import { GraphQLSchema } from "graphql";

const typeDefs = importSchema(process.cwd() + "/src/schema/schema.graphql");

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
export default schema;
