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
var bcrypt = require("bcrypt");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var error_1 = require("../middleware/error");
var User_1 = __importDefault(require("../models/User"));
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signUp = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var email, password, avatar, user, _a, _b, token;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        email = body.email, password = body.password, avatar = body.avatar;
                        _a = User_1.default.bind;
                        _b = { email: email };
                        return [4 /*yield*/, bcrypt.hash(password, 10)];
                    case 1:
                        user = new (_a.apply(User_1.default, [void 0, (_b.password = _c.sent(), _b.avatar = avatar, _b)]))();
                        if (!user) {
                            throw new error_1.ValidationError('This email is already in use');
                        }
                        return [4 /*yield*/, user.save()];
                    case 2:
                        _c.sent();
                        token = jsonwebtoken_1.default.sign({
                            _id: user._id,
                            avatar: user.avatar
                        }, process.env.JWT_SECRET);
                        return [2 /*return*/, token];
                }
            });
        });
    };
    AuthService.prototype.signIn = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_1.default.findOne({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new error_1.ValidationError('No user found with this email');
                        }
                        return [4 /*yield*/, bcrypt.compare(password, user.password)];
                    case 2:
                        if (!(_a.sent())) {
                            throw new error_1.ValidationError('Wrong password');
                        }
                        token = jsonwebtoken_1.default.sign({
                            _id: user._id,
                            avatar: user.avatar
                        }, process.env.JWT_SECRET);
                        return [2 /*return*/, token];
                }
            });
        });
    };
    AuthService.prototype.changePassword = function (userId, oldPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var user, compare, hashPassword, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_1.default.findById(userId)];
                    case 1:
                        user = _a.sent();
                        if (!user) return [3 /*break*/, 4];
                        compare = bcrypt.compareSync(oldPassword, user.password);
                        if (!compare) {
                            throw new Error('Wrong old password');
                        }
                        if (oldPassword === newPassword) {
                            throw new Error('This password is already in use');
                        }
                        return [4 /*yield*/, bcrypt.hash(newPassword, 10)];
                    case 2:
                        hashPassword = _a.sent();
                        return [4 /*yield*/, User_1.default.findByIdAndUpdate(userId, { password: hashPassword }, { new: true })];
                    case 3:
                        newUser = _a.sent();
                        return [2 /*return*/, newUser];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.findUserByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_1.default.findOne({ email: email })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    return AuthService;
}());
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map