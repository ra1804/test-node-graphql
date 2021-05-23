"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var index_1 = __importDefault(require("../resolvers/index"));
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    getAllFootballer: [Footballer]\n  }\n\n  type Mutation {\n    addFootballer(\n      firstName: String\n      lastName: String\n      age: Float\n      team: String\n      number: String\n      height: Float\n      rating: Float\n    ): Footballer\n    deleteFootballer(id: ID!): String\n  }\n\n  type Footballer {\n    id: ID!\n    firstName: String\n    lastName: String\n    age: Float\n    team: String\n    number: String\n    height: Float\n    rating: Float\n    createdAt: String\n    updatedAt: String\n  }\n"], ["\n  type Query {\n    getAllFootballer: [Footballer]\n  }\n\n  type Mutation {\n    addFootballer(\n      firstName: String\n      lastName: String\n      age: Float\n      team: String\n      number: String\n      height: Float\n      rating: Float\n    ): Footballer\n    deleteFootballer(id: ID!): String\n  }\n\n  type Footballer {\n    id: ID!\n    firstName: String\n    lastName: String\n    age: Float\n    team: String\n    number: String\n    height: Float\n    rating: Float\n    createdAt: String\n    updatedAt: String\n  }\n"])));
var schema = {
    typeDefs: typeDefs,
    resolvers: index_1.default,
    introspection: true,
    playground: true,
};
exports.default = schema;
var templateObject_1;
