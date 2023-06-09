"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var todosSchema = new mongoose_1.Schema({
    topic: {
        type: String,
        required: true
    },
    userId: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    search: {
        type: String
    },
    status: {
        type: String,
        enum: ['completed', 'pending']
    },
    date: {
        type: Date,
        default: Date.now
    }
});
todosSchema.index({ topic: 'text', description: 'text' });
var Todos = mongoose_1.default.model('Posts', todosSchema);
Todos.createIndexes();
exports.default = Todos;
//# sourceMappingURL=Todos.js.map