"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addReturnAll = void 0;
const addReturnAll = (displayOptions) => {
    return {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions,
        default: false,
        description: 'Whether to return all results or only up to a given limit',
    };
};
exports.addReturnAll = addReturnAll;
//# sourceMappingURL=ReturnAllDescription.js.map