import "graphql-import-node";
import { makeExecutableSchema } from "graphql-tools";
import { gql } from "apollo-server-lambda";
import resolvers from "./resolver";
import { GraphQLSchema } from "graphql";

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }

  type Mutation {
    post(url: String!, description: String!): Link!
  }
  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
export default schema;
