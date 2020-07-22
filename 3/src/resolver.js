"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let links = [
    {
        id: "link-0",
        url: "www.howtographql.com",
        description: "Fullstack tutorial for GraphQL",
    },
];
let idCount = links.length;
const resolvers = {
    Query: {
        helloWorld: () => "Hello world from Serverless Apollo Server",
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            };
            links.push(link);
            console.log(links);
            return link;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolver.js.map