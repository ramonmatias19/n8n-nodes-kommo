"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
const isNumber = (v) => {
    const value = String(v).trim();
    return value.length === Number(value).toString().length;
};
exports.isNumber = isNumber;
//# sourceMappingURL=isNumber.js.map