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
exports.WrongParametersError = void 0;
var WrongParametersError = /** @class */ (function (_super) {
    __extends(WrongParametersError, _super);
    function WrongParametersError(message) {
        var _this = _super.call(this, message) || this;
        _this.status = 400;
        return _this;
    }
    return WrongParametersError;
}(Error));
exports.WrongParametersError = WrongParametersError;
//# sourceMappingURL=errors.js.map