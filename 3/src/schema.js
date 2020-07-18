"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("graphql-import-node");
const graphql_tools_1 = require("graphql-tools");
const apollo_server_lambda_1 = require("apollo-server-lambda");
const resolver_1 = require("./resolver");
const typeDefs = apollo_server_lambda_1.gql `
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
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers: resolver_1.default,
});
exports.default = schema;
//# sourceMappingURL=schema.js.map