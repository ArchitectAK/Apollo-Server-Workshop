"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_import_1 = require("graphql-import");
const graphql_tools_1 = require("graphql-tools");
const resolver_1 = __importDefault(require("./resolver"));
const typeDefs = graphql_import_1.importSchema(process.cwd() + "/src/schema/schema.graphql");
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers: resolver_1.default,
});
exports.default = schema;
//# sourceMappingURL=schema.js.map