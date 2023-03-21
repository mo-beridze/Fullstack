"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errorMiddleware_1 = __importDefault(require("../middleware/errorMiddleware"));
var auth_route_1 = __importDefault(require("./api/auth.route"));
var todos_route_1 = __importDefault(require("./api/todos.route"));
var AppRouter = /** @class */ (function () {
    function AppRouter(app) {
        this.app = app;
    }
    AppRouter.prototype.init = function () {
        this.app.get('/', function (_req, res) {
            res.send('API Running');
        });
        this.app.use('/api/todos', todos_route_1.default);
        this.app.use('/api/auth', auth_route_1.default);
        this.app.use(errorMiddleware_1.default);
    };
    return AppRouter;
}());
exports.default = AppRouter;
//# sourceMappingURL=index.js.map