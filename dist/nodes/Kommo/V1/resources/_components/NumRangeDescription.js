"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumRangeDescription = void 0;
const addNumRangeDescription = (displayName, name, displayOptions) => {
    return {
        displayName,
        name,
        placeholder: 'Add Range',
        type: 'fixedCollection',
        displayOptions,
        default: {},
        options: [
            {
                displayName: 'Range',
                name: 'rangeCustom',
                values: [
                    {
                        displayName: 'From',
                        name: 'from',
                        type: 'number',
                        required: true,
                        default: '',
                    },
                    {
                        displayName: 'To',
                        name: 'to',
                        type: 'number',
                        required: true,
                        default: '',
                    },
                ],
            },
        ],
    };
};
exports.addNumRangeDescription = addNumRangeDescription;
//# sourceMappingURL=NumRangeDescription.js.map