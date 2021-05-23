"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getAllFootballer_1 = __importDefault(require("./footballer/getAllFootballer"));
var addFootballer_1 = __importDefault(require("./footballer/addFootballer"));
var deleteFootballer_1 = __importDefault(require("./footballer/deleteFootballer"));
var rootResolver = {
    Query: __assign({}, getAllFootballer_1.default),
    Mutation: __assign(__assign({}, addFootballer_1.default), deleteFootballer_1.default),
};
exports.default = rootResolver;
