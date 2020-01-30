import * as tslib_1 from "tslib";
/**
 * Thrown if some required driver's option is not set.
 */
var DriverOptionNotSetError = /** @class */ (function (_super) {
    tslib_1.__extends(DriverOptionNotSetError, _super);
    function DriverOptionNotSetError(optionName) {
        var _this = _super.call(this) || this;
        _this.name = "DriverOptionNotSetError";
        Object.setPrototypeOf(_this, DriverOptionNotSetError.prototype);
        _this.message = "Driver option (" + optionName + ") is not set. Please set it to perform connection to the database.";
        return _this;
    }
    return DriverOptionNotSetError;
}(Error));
export { DriverOptionNotSetError };

//# sourceMappingURL=DriverOptionNotSetError.js.map