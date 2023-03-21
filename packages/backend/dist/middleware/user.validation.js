"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var error_1 = require("./error");
function userValidation(req, res, next) {
    var postSchema = joi_1.default.object({
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().min(4).required(),
        avatar: joi_1.default.string().min(3).required()
    });
    var validationResult = postSchema.validate(req.body);
    if (validationResult.error) {
        next(new error_1.ValidationError(validationResult.error.message));
    }
    next();
}
exports.default = userValidation;
//# sourceMappingURL=user.validation.js.map