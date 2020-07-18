"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlHandler = exports.hello = void 0;
const server_1 = require("./src/server");
const hello = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: Math.floor(Math.random() * 10),
        }),
    };
    callback(undefined, response);
};
exports.hello = hello;
const graphqlHandler = server_1.server.createHandler();
exports.graphqlHandler = graphqlHandler;
//# sourceMappingURL=handler.js.map