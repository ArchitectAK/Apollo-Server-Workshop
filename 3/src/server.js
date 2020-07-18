"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
const schema_1 = require("./schema");
exports.server = new apollo_server_lambda_1.ApolloServer({
    schema: schema_1.default,
    playground: true,
});
//# sourceMappingURL=server.js.map