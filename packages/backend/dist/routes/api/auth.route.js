"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_middleware_1 = require("../../middleware/auth.middleware");
var auth_contoller_1 = __importDefault(require("../../controllers/auth.contoller"));
var asyncWrapper_1 = require("../../middleware/asyncWrapper");
var user_validation_1 = __importDefault(require("../../middleware/user.validation"));
var authRouter = express_1.Router();
authRouter.post('/register', user_validation_1.default, asyncWrapper_1.asyncWrapper(auth_contoller_1.default.register.bind(auth_contoller_1.default)));
authRouter.post('/login', asyncWrapper_1.asyncWrapper(auth_contoller_1.default.login.bind(auth_contoller_1.default)));
authRouter.put('/reset-password', auth_middleware_1.authMiddleware, asyncWrapper_1.asyncWrapper(auth_contoller_1.default.resetPassword.bind(auth_contoller_1.default)));
authRouter.post('/user', asyncWrapper_1.asyncWrapper(auth_contoller_1.default.getUserByEmail.bind(auth_contoller_1.default)));
exports.default = authRouter;
//# sourceMappingURL=auth.route.js.map