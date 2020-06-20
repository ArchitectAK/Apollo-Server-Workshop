"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolverMap = {
    Query: {
        helloWorld: function (_, args) {
            return "\uD83D\uDC4B Hello world! \uD83D\uDC4B";
        },
    },
};
exports.default = resolverMap;
