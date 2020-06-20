"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("graphql-import-node");
var typeDefs = __importStar(require("./schema/schema.graphql"));
var graphql_tools_1 = require("graphql-tools");
var resolver_1 = __importDefault(require("./resolver"));
var schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolver_1.default,
});
exports.default = schema;
