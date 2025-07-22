"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addWithDescription = void 0;
const addWithDescription = (displayOptions, options) => {
    return {
        displayName: 'With',
        name: 'with',
        type: 'multiOptions',
        displayOptions,
        default: [],
        noDataExpression: true,
        options,
    };
};
exports.addWithDescription = addWithDescription;
//# sourceMappingURL=WithDescription.js.map