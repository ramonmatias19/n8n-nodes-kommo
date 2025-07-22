"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLimitDescription = void 0;
const addLimitDescription = (displayOptions) => {
    return {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        description: 'Max number of results to return',
        displayOptions,
        typeOptions: {
            minValue: 1,
            numberStepSize: 1,
        },
        default: 50,
    };
};
exports.addLimitDescription = addLimitDescription;
//# sourceMappingURL=LimitDescription.js.map