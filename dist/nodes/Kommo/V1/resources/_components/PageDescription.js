"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPageDescription = void 0;
const addPageDescription = (displayOptions) => {
    return {
        displayName: 'Page',
        name: 'page',
        type: 'number',
        displayOptions,
        typeOptions: {
            minValue: 1,
        },
        default: 1,
        description: 'Select page',
    };
};
exports.addPageDescription = addPageDescription;
//# sourceMappingURL=PageDescription.js.map