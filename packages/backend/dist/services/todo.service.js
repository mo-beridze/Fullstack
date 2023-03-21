"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable radix */
var Todos_1 = __importDefault(require("../models/Todos"));
var TodoService = /** @class */ (function () {
    function TodoService() {
    }
    TodoService.prototype.findAllTodos = function (userId, page, size, status, search) {
        return __awaiter(this, void 0, void 0, function () {
            var skip, todos, count, finalTodos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        skip = (parseInt(page) - 1) * parseInt(size);
                        todos = Todos_1.default.find({ userId: userId });
                        if (status) {
                            todos.find({ status: status });
                        }
                        if (search) {
                            todos.find({ $text: { $search: "\"" + search + "\"" } });
                        }
                        return [4 /*yield*/, todos];
                    case 1:
                        count = (_a.sent()).length;
                        return [4 /*yield*/, todos.skip(skip).limit(parseInt(size))];
                    case 2:
                        finalTodos = _a.sent();
                        return [2 /*return*/, { todos: finalTodos, count: count }];
                }
            });
        });
    };
    TodoService.prototype.getTodoById = function (todoId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var todos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Todos_1.default.findOne({ _id: todoId, userId: userId })];
                    case 1:
                        todos = _a.sent();
                        return [2 /*return*/, todos];
                }
            });
        });
    };
    TodoService.prototype.addTodo = function (input, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var topic, description, search, status, todo;
            return __generator(this, function (_a) {
                topic = input.topic, description = input.description, search = input.search, status = input.status;
                todo = new Todos_1.default({ topic: topic, description: description, search: search, status: status, userId: userId });
                return [2 /*return*/, todo.save()];
            });
        });
    };
    TodoService.prototype.changeTodoById = function (todoId, input, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var topic, description, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        topic = input.topic, description = input.description, status = input.status;
                        return [4 /*yield*/, Todos_1.default.findOneAndUpdate({ _id: todoId }, { topic: topic, description: description, status: status, userId: userId })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TodoService.prototype.deleteTodoById = function (todoId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Todos_1.default.findOneAndRemove({ _id: todoId })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TodoService;
}());
exports.default = TodoService;
//# sourceMappingURL=todo.service.js.map