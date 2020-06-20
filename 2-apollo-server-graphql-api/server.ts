const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    helloworld: String
  }
`;
const resolvers = {
  Query: {
    helloworld: () => "Hello world from Apollo Server",
  },
};
const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: 3000 })
  .then((serverInfo) => console.log(`Server is running at ${serverInfo.url}`));
