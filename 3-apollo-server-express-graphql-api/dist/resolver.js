"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Query: {
        helloWorld: function (_, args) {
            return "Hello world!";
        },
    },
};
exports.default = resolvers;
