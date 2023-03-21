"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorHadnler = /** @class */ (function (_super) {
    __extends(ErrorHadnler, _super);
    function ErrorHadnler(status, message) {
        var _this = _super.call(this, message) || this;
        _this.status = status;
        _this.message = message;
        return _this;
    }
    return ErrorHadnler;
}(Error));
function errorMiddleware(error, request, response, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) {
    var status = error.status || 500;
    var message = error.message || 'Something went wrong';
    if (error.name === 'CastError') {
        status = 400;
        message = 'Wrong Id';
    }
    if (error.name === 'MongoError') {
        status = 400;
        message = 'This email is already in use';
    }
    response.status(status).send({
        status: status,
        message: message
    });
    next();
}
exports.default = errorMiddleware;
//# sourceMappingURL=errorMiddleware.js.map