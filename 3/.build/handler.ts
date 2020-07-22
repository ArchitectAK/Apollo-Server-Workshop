import { server } from "./src/server";

const graphqlHandler = server.createHandler();

export { graphqlHandler };
