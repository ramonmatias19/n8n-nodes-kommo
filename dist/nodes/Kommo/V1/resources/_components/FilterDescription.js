"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFilterDescription = void 0;
const addFilterDescription = (displayOptions, options) => {
    return {
        displayName: 'Filter',
        name: 'filter',
        type: 'collection',
        placeholder: 'Add filter',
        default: {},
        displayOptions,
        options,
    };
};
exports.addFilterDescription = addFilterDescription;
//# sourceMappingURL=FilterDescription.js.map