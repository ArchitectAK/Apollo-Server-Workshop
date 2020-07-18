import { Handler, Context, Callback } from "aws-lambda";
import { server } from "./src/server";

interface HelloResponse {
  statusCode: number;
  body: string;
}

const hello: Handler = (event: any, context: Context, callback: Callback) => {
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: Math.floor(Math.random() * 10),
    }),
  };

  callback(undefined, response);
};
const graphqlHandler = server.createHandler();

export { hello, graphqlHandler };
