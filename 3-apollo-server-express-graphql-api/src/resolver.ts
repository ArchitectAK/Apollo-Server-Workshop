import { IResolvers } from "graphql-tools";
const resolvers: IResolvers = {
  Query: {
    helloworld: () => "Hello world from Apollo Server 3",
  },
};
export default resolvers;
