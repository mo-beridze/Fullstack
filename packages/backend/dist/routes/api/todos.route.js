"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var asyncWrapper_1 = require("../../middleware/asyncWrapper");
var addPost_validation_1 = __importDefault(require("../../middleware/addPost.validation"));
var todo_controller_1 = __importDefault(require("../../controllers/todo.controller"));
var auth_middleware_1 = require("../../middleware/auth.middleware");
var todosRouter = express_1.Router();
todosRouter.use(auth_middleware_1.authMiddleware);
todosRouter.get('/', asyncWrapper_1.asyncWrapper(todo_controller_1.default.getAllTodo.bind(todo_controller_1.default)));
todosRouter.get('/:id', asyncWrapper_1.asyncWrapper(todo_controller_1.default.getTodoById.bind(todo_controller_1.default)));
todosRouter.post('/', addPost_validation_1.default, asyncWrapper_1.asyncWrapper(todo_controller_1.default.addTodo.bind(todo_controller_1.default)));
todosRouter.put('/:id', addPost_validation_1.default, asyncWrapper_1.asyncWrapper(todo_controller_1.default.changeTodo.bind(todo_controller_1.default)));
todosRouter.delete('/:id', asyncWrapper_1.asyncWrapper(todo_controller_1.default.deleteTodo.bind(todo_controller_1.default)));
exports.default = todosRouter;
//# sourceMappingURL=todos.route.js.map