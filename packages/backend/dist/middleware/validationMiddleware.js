"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var error_1 = require("./error");
function validatePost(req, res, next) {
    var postSchema = joi_1.default.object({
        name: joi_1.default.string().min(10).max(300).required(),
        phone: joi_1.default.string()
            .min(7)
            .max(14)
            .pattern(/^[0-9]+$/)
            .required(),
        description: joi_1.default.string().min(3).max(300).required()
    });
    var validationResult = postSchema.validate(req.body);
    if (validationResult.error) {
        next(new error_1.ValidationError(validationResult.error.message));
    }
    next();
}
exports.default = validatePost;
//# sourceMappingURL=validationMiddleware.js.map