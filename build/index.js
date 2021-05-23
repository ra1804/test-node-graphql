"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
var bluebird_1 = __importDefault(require("bluebird"));
var schema_1 = __importDefault(require("./graphql/schema"));
dotenv_1.default.config();
bluebird_1.default.promisifyAll(mongoose_1.default);
mongoose_1.default.connect(process.env.DB_URL || '', {
    bufferMaxEntries: 0,
    socketTimeoutMS: 0,
    keepAlive: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
});
mongoose_1.default.connection.on('error', function () {
    throw new Error("unable to connect to database: " + process.env.DB_URL);
});
var server = new apollo_server_1.ApolloServer(schema_1.default);
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
