"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var error_1 = require("./error");
function validatePost(req, res, next) {
    var postSchema = joi_1.default.object({
        topic: joi_1.default.string().min(3).max(15).required(),
        description: joi_1.default.string().min(3).max(500).required(),
        search: joi_1.default.string().min(1).max(10),
        status: joi_1.default.string().valid('completed', 'pending')
    });
    var validationResult = postSchema.validate(req.body);
    if (validationResult.error) {
        next(new error_1.ValidationError(validationResult.error.message));
    }
    next();
}
exports.default = validatePost;
//# sourceMappingURL=addPost.validation.js.map