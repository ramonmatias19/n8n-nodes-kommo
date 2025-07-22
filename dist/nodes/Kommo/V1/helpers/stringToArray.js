"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToArray = void 0;
const isNumber_1 = require("./isNumber");
const stringToArray = (str) => {
    if (!str)
        return [];
    return str
        .toString()
        .split(',')
        .map((v) => {
        const value = v.trim();
        return (0, isNumber_1.isNumber)(value) ? Number(value) : String(value);
    });
};
exports.stringToArray = stringToArray;
//# sourceMappingURL=stringToArray.js.map