"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.authMiddleware = function (_, res, next) {
    var _a;
    var token = (_a = _.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        next(new Error('Please, provide a token'));
    }
    try {
        var user = jsonwebtoken_1.default.verify(token || '', process.env.JWT_SECRET);
        _.token = token;
        _.user = user;
        next();
    }
    catch (err) {
        next(new Error('Please, provide a token'));
    }
};
//# sourceMappingURL=auth.middleware.js.map